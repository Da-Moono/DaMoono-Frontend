import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router';
import chatIcon from '@/assets/images/chat.png';
import counselingIcon from '@/assets/images/counseling-icon.png';
import counselingMoono from '@/assets/images/counseling-moono.png';
import endCounselingIcon from '@/assets/images/end-counseling-icon.png';
import noCounselingMoono from '@/assets/images/no-counseling-moono.png';
import consult from '@/assets/images/plus-consult.png';
import Header from '@/components/Header';
import { logout } from '@/services/authApi';
import { getConsultantSummary } from '@/services/counselApi';
import socketService from '@/services/socketService';
import Layout from '../layout/Layout';
import ChatInput from './components/ChatInput';
import VoiceRecorder, {
  type VoiceRecorderRef,
} from './components/VoiceRecorder';
import * as styles from './style/ChatAdminPage.css';

interface Message {
  id: string;
  role: 'consultant' | 'user';
  content: string;
  timestamp: Date;
}

interface WaitingSession {
  sessionId: string;
  userName: string;
  status: 'waiting' | 'connected';
  createdAt: Date;
}

interface CompletedSession {
  sessionId: string;
  userName: string;
  completedAt: Date;
}

export default function ChatAdminPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [currentUserName, setCurrentUserName] = useState<string>('고객'); // 현재 상담 중인 사용자 이름
  const [isConsultEnded, setIsConsultEnded] = useState(false); // 상담 종료 상태
  const [waitingSessions, setWaitingSessions] = useState<WaitingSession[]>([]);
  const [completedSessions, setCompletedSessions] = useState<
    CompletedSession[]
  >([]);
  const [showSessionList, setShowSessionList] = useState(true);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const voiceRecorderRef = useRef<VoiceRecorderRef>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const messageIdCounter = useRef(0); // 메시지 ID 카운터

  const handleSummaryAndNavigate = useCallback(
    async (sessionId: string) => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;

        const response = await axios.post(
          `${apiUrl}/summary/consults/${sessionId}/consultant`,
          {},
          { withCredentials: true },
        );

        if (response.status === 200 || response.status === 201) {
          setShowSessionList(true);
          setSessionId('');
          setMessages([]);
          setIsConsultEnded(false);
          setIsLoading(false); // 로딩 상태 리셋

          navigate('/admin-summary', {
            state: {
              summaryData: response.data.payload,
              userName: currentUserName,
            },
          });
        }
      } catch (error) {
        console.error('요약 생성 실패:', error);
        setShowSessionList(true);
        setSessionId('');
        setMessages([]);
        setIsConsultEnded(false);
        setIsLoading(false); // 로딩 상태 리셋
        navigate('/chat/admin');
      }
    },
    [navigate, currentUserName],
  );

  // Socket 연결 및 이벤트 리스너 설정
  useEffect(() => {
    socketService.connect();

    const urlSessionId = searchParams.get('session');
    if (urlSessionId) {
      setSessionId(urlSessionId);
      socketService.setSessionId(urlSessionId); // socketService에도 sessionId 설정
      socketService.joinSession(urlSessionId);
      setIsConnected(true);
      setShowSessionList(false);
    } else {
      socketService.getWaitingSessions();
      socketService.getCompletedSessions();
    }

    socketService.onWaitingSessions((sessions) => {
      const normalizedSessions = sessions.map((session) => {
        let userName = session.userName;

        if (!userName && 'userId' in session && session.userId) {
          const userIdObj = session.userId as { userName?: string };
          userName = userIdObj.userName || '게스트';
        }

        return {
          ...session,
          userName: userName || '게스트',
        };
      });

      setWaitingSessions(normalizedSessions);
    });

    socketService.onCompletedSessions((sessions) => {
      setCompletedSessions(sessions);
    });

    socketService.onCompletedSessionsUpdated((sessions) => {
      setCompletedSessions(sessions);
    });

    socketService.onSessionsUpdated((sessions) => {
      const normalizedSessions = sessions.map((session) => {
        let userName = session.userName;

        if (!userName && 'userId' in session && session.userId) {
          const userIdObj = session.userId as { userName?: string };
          userName = userIdObj.userName || '게스트';
        }

        return {
          ...session,
          userName: userName || '게스트',
        };
      });

      setWaitingSessions(normalizedSessions);
    });

    socketService.onMessage((data) => {
      messageIdCounter.current += 1;

      const newMessage: Message = {
        id: `${Date.now()}-${messageIdCounter.current}-${Math.random().toString(36).substring(2, 9)}`,
        role: data.sender === 'consultant' ? 'consultant' : 'user',
        content: data.message,
        timestamp: new Date(data.timestamp),
      };

      setMessages((prev) => [...prev, newMessage]);
    });

    socketService.onTyping((data) => {
      if (data.sender === 'user') {
        setIsUserTyping(data.isTyping);
      }
    });

    socketService.onConsultEnded(() => {
      const urlSessionId = searchParams.get('session');
      if (!urlSessionId) return;

      const isManualEnd = sessionStorage.getItem(
        `is_admin_manual_end_${urlSessionId}`,
      );

      if (isManualEnd === 'true') {
        sessionStorage.removeItem(`is_admin_manual_end_${urlSessionId}`);
        return;
      }

      setIsConnected(false);
      setIsConsultEnded(true);

      messageIdCounter.current += 1;
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-${messageIdCounter.current}`,
          role: 'user',
          content: `${currentUserName}님이 상담을 종료하였습니다.`,
          timestamp: new Date(),
        },
      ]);

      setTimeout(() => {
        messageIdCounter.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${messageIdCounter.current}`,
            role: 'user',
            content: '요약본을 생성합니다.',
            timestamp: new Date(),
          },
        ]);

        setIsLoading(true);

        setTimeout(() => {
          handleSummaryAndNavigate(urlSessionId);
        }, 1000);
      }, 500);
    });

    return () => {
      // 연결 유지
    };
  }, [searchParams, handleSummaryAndNavigate, currentUserName]);

  // 완료된 상담 목록 로드
  useEffect(() => {
    if (showSessionList) {
      socketService.getCompletedSessions();
      socketService.getWaitingSessions();
    }
  }, [showSessionList]);

  // 완료된 상담 목록 갱신
  useEffect(() => {
    const handleCompletedUpdate = (
      sessions: Array<{
        sessionId: string;
        userName: string;
        completedAt: Date;
      }>,
    ) => {
      setCompletedSessions(sessions);
    };

    socketService.onCompletedSessionsUpdated(handleCompletedUpdate);

    return () => {
      // cleanup
    };
  }, []);

  // 메시지가 추가될 때마다 스크롤을 아래로
  // biome-ignore lint/correctness/useExhaustiveDependencies: 메시지 변경 시에만 스크롤 필요
  useEffect(() => {
    // requestAnimationFrame을 두 번 사용하여 DOM 렌더링을 확실히 기다림
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        messagesEndRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      });
    });
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    if (!content.trim() || !sessionId || isConsultEnded) {
      console.error('메시지 전송 실패:', {
        hasContent: !!content.trim(),
        sessionId,
        isConsultEnded,
        socketSessionId: socketService.getSessionId(),
      });
      return;
    }

    socketService.sendMessage(content, 'consultant');
    socketService.sendTyping('consultant', false);
  };

  const handleInputChange = (value: string) => {
    if (value.length > 0) {
      socketService.sendTyping('consultant', true);

      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
      typingTimeoutRef.current = setTimeout(() => {
        socketService.sendTyping('consultant', false);
      }, 1000);
    } else {
      socketService.sendTyping('consultant', false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleEndConsult = () => {
    if (window.confirm('상담을 종료하시겠습니까?')) {
      if (sessionId) {
        sessionStorage.setItem(`is_admin_manual_end_${sessionId}`, 'true');

        messageIdCounter.current += 1;
        setMessages((prev) => [
          ...prev,
          {
            id: `${Date.now()}-${messageIdCounter.current}`,
            role: 'consultant',
            content: '상담이 종료되었습니다.',
            timestamp: new Date(),
          },
        ]);

        setTimeout(() => {
          messageIdCounter.current += 1;
          setMessages((prev) => [
            ...prev,
            {
              id: `${Date.now()}-${messageIdCounter.current}`,
              role: 'consultant',
              content: '요약본을 생성합니다.',
              timestamp: new Date(),
            },
          ]);

          setIsLoading(true);

          setTimeout(() => {
            socketService.endConsult();
            handleSummaryAndNavigate(sessionId);
          }, 1000);
        }, 500);
      }
    }
  };

  const handleJoinSession = (selectedSessionId: string) => {
    // 세션에 참여할 때 해당 세션의 userName 저장
    const session = waitingSessions.find(
      (s) => s.sessionId === selectedSessionId,
    );
    if (session) {
      setCurrentUserName(session.userName || '고객');
    }

    setSessionId(selectedSessionId);
    socketService.setSessionId(selectedSessionId); // socketService에도 sessionId 설정
    setIsConsultEnded(false); // 상태 리셋
    setIsLoading(false); // 로딩 상태 리셋
    socketService.joinSession(selectedSessionId);
    setIsConnected(true);
    setShowSessionList(false);
    navigate(`/chat/admin?session=${selectedSessionId}`);
  };

  const handleViewCompletedSummary = async (selectedSessionId: string) => {
    try {
      // 완료된 세션에서 userName 찾기
      const session = completedSessions.find(
        (s) => s.sessionId === selectedSessionId,
      );
      const userName = session?.userName || '고객';

      const response = await getConsultantSummary(selectedSessionId);

      if (response.success && response.payload) {
        navigate('/admin-summary', {
          state: {
            summaryData: response.payload.payload,
            userName: userName, // userName 추가
          },
        });
      } else {
        alert('요약 데이터를 불러올 수 없습니다.');
      }
    } catch (error) {
      console.error('요약 조회 실패:', error);
      alert('요약 데이터를 불러오는데 실패했습니다.');
    }
  };

  const handleLogout = async () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      try {
        await logout();
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        navigate('/');
      } catch {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        localStorage.removeItem('userRole');
        navigate('/');
      }
    }
  };

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? '오후' : '오전';
    const displayHours = hours % 12 || 12;
    return `${period} ${displayHours}:${minutes.toString().padStart(2, '0')}`;
  };

  return (
    <Layout>
      <VoiceRecorder
        ref={voiceRecorderRef}
        onTranscript={(text) => {
          handleSendMessage(text);
        }}
        isListening={isListening}
        onListeningChange={setIsListening}
      />

      <Header />

      <div className={styles.container}>
        {showSessionList ? (
          <>
            <div className={styles.header}>
              <img
                src={counselingMoono}
                alt="무너"
                className={styles.headerIcon}
              />
              <h2>상담사 페이지</h2>
            </div>

            {/* 현재 요청된 상담 섹션 */}
            <div style={{ padding: '20px 0' }}>
              {waitingSessions.length === 0 ? (
                <div className={styles.chatBox}>
                  <div className={styles.chatState}>
                    <div className={styles.noChatDot} />
                    <span>현재 요청된 상담</span>
                  </div>
                  <img
                    src={noCounselingMoono}
                    alt="상담 대기"
                    className={styles.chatStateIcon}
                  />
                  <p>현재 요청된 상담이 없습니다.</p>
                </div>
              ) : (
                <div className={styles.chatBox}>
                  <div className={styles.chatState}>
                    <div className={styles.statusDot} />
                    <span>현재 요청된 상담</span>
                  </div>
                  {waitingSessions.map((session) => (
                    <button
                      type="button"
                      key={session.sessionId}
                      onClick={() => handleJoinSession(session.sessionId)}
                      className={styles.chatCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow =
                          '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow =
                          '0 2px 8px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <div className={styles.counselingWrapper}>
                        <div className={styles.counselingIdBox}>
                          <img
                            src={counselingIcon}
                            alt="무너"
                            className={styles.chatIcon}
                          />
                          <div>
                            <p className={styles.counselingId}>
                              {session.userName || '게스트'}
                            </p>
                            <p className={styles.sessionIdSmall}>
                              ({session.sessionId})
                            </p>
                          </div>
                        </div>
                        <div
                          className={styles.counselingBtn}
                          style={{
                            background:
                              session.status === 'connected'
                                ? 'linear-gradient(90deg, rgba(31, 255, 106, 0.2) 0%, rgba(255, 255, 255, 0.2) 50%, rgba(31, 255, 106, 0.2) 100%)'
                                : undefined,
                            color:
                              session.status === 'connected'
                                ? '#1FFF6A'
                                : undefined,
                          }}
                        >
                          {session.status === 'connected'
                            ? '상담 진행 중'
                            : '상담 시작'}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 완료된 상담 섹션 */}
            <div style={{ padding: '0 0 20px 0' }}>
              <div className={styles.chatBox}>
                <div className={styles.chatState}>
                  <img src={consult} alt="상담사" className={styles.chatIcon} />
                  <span>완료된 상담</span>
                </div>
                {completedSessions.length === 0 ? (
                  <p
                    style={{
                      textAlign: 'center',
                      color: '#999',
                      padding: '20px',
                    }}
                  >
                    완료된 상담이 없습니다.
                  </p>
                ) : (
                  completedSessions.map((session) => (
                    <button
                      type="button"
                      key={session.sessionId}
                      onClick={() =>
                        handleViewCompletedSummary(session.sessionId)
                      }
                      className={styles.endChatCard}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow =
                          '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow =
                          '0 2px 8px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      <div className={styles.counselingWrapper}>
                        <div className={styles.counselingIdBox}>
                          <img
                            src={endCounselingIcon}
                            alt="무너"
                            className={styles.chatIcon}
                          />
                          <div>
                            <p className={styles.counselingId}>
                              {session.userName || '게스트'}
                            </p>
                            <p className={styles.sessionIdSmall}>
                              ({session.sessionId})
                            </p>
                          </div>
                        </div>
                        <div className={styles.endCounselingBtn}>상담 완료</div>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            <div className={styles.logoutContainer}>
              <button
                type="button"
                className={styles.logoutButton}
                onClick={handleLogout}
              >
                로그아웃
              </button>
            </div>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <img src={chatIcon} alt="채팅" className={styles.chatIcon} />
                <span className={styles.headerTitle}>상담 진행하기</span>
              </div>
              <button
                type="button"
                className={styles.endButton}
                onClick={handleEndConsult}
              >
                상담종료
              </button>
            </div>

            <div className={styles.statusContainer}>
              <div className={styles.statusHeader}>
                <div className={styles.statusIndicator}>
                  <div
                    className={styles.statusDot}
                    style={{
                      backgroundColor: isConsultEnded
                        ? '#FF1F1F'
                        : isConnected
                          ? '#1FFF6A'
                          : '#FF1F1F',
                    }}
                  />
                  <span className={styles.statusText}>
                    {isConsultEnded
                      ? '상담 종료됨'
                      : isConnected
                        ? '상담 진행 중'
                        : '대기 중'}
                  </span>
                </div>
              </div>
              <p className={styles.statusSubtext}>
                {isConsultEnded
                  ? `${currentUserName}님이 상담을 종료하였습니다`
                  : isConnected
                    ? '고객과 실시간 상담 중입니다'
                    : '세션에 연결 중...'}
              </p>
              {sessionId && (
                <p
                  className={styles.statusSubtext}
                  style={{ marginTop: '4px', fontSize: '9px' }}
                >
                  세션 ID: {sessionId}
                </p>
              )}
            </div>

            <div className={styles.content} ref={contentRef}>
              {messages.length > 0 && (
                <div className={styles.messagesContainer}>
                  {messages.map((message) => (
                    <div key={message.id} className={styles.messageWrapper}>
                      {message.role === 'consultant' ? (
                        <div className={styles.consultantMessageContainer}>
                          <div className={styles.consultantMessage}>
                            <p className={styles.consultantText}>
                              {message.content}
                            </p>
                          </div>
                          <span className={styles.timestamp}>
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      ) : (
                        <div className={styles.userMessageContainer}>
                          <div className={styles.userHeader}>
                            <span className={styles.userName}>
                              {currentUserName}
                            </span>
                          </div>
                          <div className={styles.userMessage}>
                            <div className={styles.userText}>
                              <ReactMarkdown
                                components={{
                                  p: ({ children }) => <p>{children}</p>,
                                }}
                              >
                                {message.content}
                              </ReactMarkdown>
                            </div>
                          </div>
                          <span className={styles.timestamp}>
                            {formatTime(message.timestamp)}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                  {isUserTyping && (
                    <div className={styles.userMessageContainer}>
                      <div className={styles.userHeader}>
                        <span className={styles.userName}>
                          {currentUserName}
                        </span>
                      </div>
                      <div className={styles.userMessage}>
                        <div className={styles.userText}>
                          <div className={styles.loadingDots}>
                            <div className={styles.loadingDot} />
                            <div className={styles.loadingDot} />
                            <div className={styles.loadingDot} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {isLoading && (
                    <div className={styles.userMessageContainer}>
                      <div className={styles.userMessage}>
                        <div className={styles.userText}>
                          <div className={styles.loadingDots}>
                            <div className={styles.loadingDot} />
                            <div className={styles.loadingDot} />
                            <div className={styles.loadingDot} />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              onClearChat={handleClearChat}
              voiceRecorderRef={voiceRecorderRef}
              isListening={isListening}
              setIsListening={setIsListening}
              onInputChange={handleInputChange}
            />
          </>
        )}
      </div>
    </Layout>
  );
}
