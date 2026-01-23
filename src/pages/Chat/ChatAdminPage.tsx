import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate, useSearchParams } from 'react-router';
import chatIcon from '@/assets/images/chat.png';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
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
  userId: string;
  createdAt: Date;
}

export default function ChatAdminPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [sessionId, setSessionId] = useState<string>('');
  const [waitingSessions, setWaitingSessions] = useState<WaitingSession[]>([]);
  const [showSessionList, setShowSessionList] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const voiceRecorderRef = useRef<VoiceRecorderRef>(null);

  // Socket 연결 및 이벤트 리스너 설정
  useEffect(() => {
    socketService.connect();

    // URL에서 세션 ID 가져오기
    const urlSessionId = searchParams.get('session');
    if (urlSessionId) {
      setSessionId(urlSessionId);
      socketService.joinSession(urlSessionId);
      setIsConnected(true);
      setShowSessionList(false);
    } else {
      // 대기 중인 세션 목록 요청
      socketService.getWaitingSessions();
    }

    // 대기 중인 세션 목록 수신
    socketService.onWaitingSessions((sessions) => {
      setWaitingSessions(sessions);
    });

    // 세션 목록 업데이트
    socketService.onSessionsUpdated((sessions) => {
      setWaitingSessions(sessions);
    });

    // 메시지 수신
    socketService.onMessage((data) => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: data.sender === 'consultant' ? 'consultant' : 'user',
          content: data.message,
          timestamp: new Date(data.timestamp),
        },
      ]);
    });

    // 상담 종료
    socketService.onConsultEnded(() => {
      alert('상담이 종료되었습니다.');
      setShowSessionList(true);
      setSessionId('');
      setMessages([]);
      navigate('/chat/admin');
    });

    return () => {
      socketService.disconnect();
    };
  }, [navigate, searchParams]);

  // 메시지가 추가될 때마다 스크롤을 아래로
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  });

  const handleSendMessage = async (content: string) => {
    socketService.sendMessage(content, 'consultant');
    setIsLoading(false);
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleEndConsult = () => {
    if (confirm('상담을 종료하시겠습니까?')) {
      socketService.endConsult();
      setShowSessionList(true);
      setSessionId('');
      setMessages([]);
      navigate('/chat/admin');
    }
  };

  const handleBackToList = () => {
    setShowSessionList(true);
    setSessionId('');
    setMessages([]);
    navigate('/chat/admin');
  };

  const handleJoinSession = (selectedSessionId: string) => {
    setSessionId(selectedSessionId);
    socketService.joinSession(selectedSessionId);
    setIsConnected(true);
    setShowSessionList(false);
    navigate(`/chat/admin?session=${selectedSessionId}`);
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
              <div className={styles.headerLeft}>
                <img src={chatIcon} alt="채팅" className={styles.headerIcon} />
                <span className={styles.headerTitle}>상담 대기 목록</span>
              </div>
            </div>

            <div className={styles.content}>
              {waitingSessions.length === 0 ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 20px',
                    color: '#999',
                  }}
                >
                  <p>대기 중인 상담이 없습니다.</p>
                </div>
              ) : (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >
                  {waitingSessions.map((session) => (
                    <button
                      type="button"
                      key={session.sessionId}
                      onClick={() => handleJoinSession(session.sessionId)}
                      style={{
                        padding: '16px',
                        backgroundColor: '#fff',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        border: 'none',
                        width: '100%',
                        textAlign: 'left',
                      }}
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
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: '14px',
                              fontWeight: 600,
                              color: '#333',
                            }}
                          >
                            {session.userId}
                          </p>
                          <p
                            style={{
                              margin: '4px 0 0 0',
                              fontSize: '12px',
                              color: '#999',
                            }}
                          >
                            세션 ID: {session.sessionId}
                          </p>
                        </div>
                        <div
                          style={{
                            padding: '6px 12px',
                            backgroundColor: '#FFE253',
                            borderRadius: '8px',
                            fontSize: '12px',
                            fontWeight: 500,
                          }}
                        >
                          대기 중
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div className={styles.header}>
              <div className={styles.headerLeft}>
                <button
                  type="button"
                  onClick={handleBackToList}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '18px',
                    padding: '4px 8px',
                    marginRight: '8px',
                  }}
                >
                  ←
                </button>
                <img src={chatIcon} alt="채팅" className={styles.headerIcon} />
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
                  <div className={styles.statusDot} />
                  <span className={styles.statusText}>
                    {isConnected ? '상담 진행 중' : '대기 중'}
                  </span>
                </div>
              </div>
              <p className={styles.statusSubtext}>
                {isConnected
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
                            <span className={styles.userName}>고객</span>
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
            />
          </>
        )}
      </div>

      <BottomNav />
    </Layout>
  );
}
