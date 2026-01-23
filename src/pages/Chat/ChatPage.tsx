import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useNavigate } from 'react-router';
import chatIcon from '@/assets/images/chat.png';
import infoIcon from '@/assets/images/info-icon.png';
import moonerbot from '@/assets/images/moonerbot.png';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '../layout/Layout';
import ChatInput from './components/ChatInput';
import MessageCard from './components/MessageCard';
import VoiceRecorder, {
  type VoiceRecorderRef,
} from './components/VoiceRecorder';
import * as styles from './style/ChatPage.css';

// 추천 질문 목록
const recommendedQuestions = [
  '구독(유독) 추천',
  '요금제 추천',
  '휴대폰 추천',
  '신규가입 이벤트',
  '채팅 상담사 연결',
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  type?: 'text' | 'plan' | 'subscription' | 'phone' | 'event';
  cards?: Array<{
    title: string;
    price?: string;
    originalPrice?: string;
    discountPrice?: string;
    mainFeature?: string;
    details: Array<{ label: string; value: string }>;
  }>;
}

export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const voiceRecorderRef = useRef<VoiceRecorderRef>(null);

  // 메시지가 추가될 때마다 스크롤을 아래로
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  });

  const handleSendMessage = async (content: string) => {
    // "상담사 연결" 키워드 체크
    if (
      content.includes('상담사 연결') ||
      content.includes('상담사연결') ||
      content.includes('채팅 상담사 연결')
    ) {
      navigate('/chat/consult');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // 임시 어시스턴트 메시지 생성
    const tempAssistantId = (Date.now() + 1).toString();
    const tempAssistantMessage: Message = {
      id: tempAssistantId,
      role: 'assistant',
      content: '',
      timestamp: new Date(),
      type: 'text',
    };

    setMessages((prev) => [...prev, tempAssistantMessage]);

    try {
      const apiUrl =
        import.meta.env.VITE_API_URL ||
        import.meta.env.VITE_API_BASE_URL ||
        'http://localhost:3000';
      const response = await fetch(`${apiUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
          history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // 실시간 타이핑 효과
      const fullText = data.reply;
      const words = fullText.split(' ');
      let currentText = '';

      for (let i = 0; i < words.length; i++) {
        currentText += (i > 0 ? ' ' : '') + words[i];

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === tempAssistantId
              ? {
                  ...msg,
                  content: currentText,
                  type: data.type || 'text',
                  cards: i === words.length - 1 ? data.cards : undefined,
                }
              : msg,
          ),
        );

        // 단어 사이 딜레이 (자연스러운 타이핑 효과)
        await new Promise((resolve) => setTimeout(resolve, 30));
      }
    } catch (_error) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === tempAssistantId
            ? {
                ...msg,
                content:
                  '죄송합니다. 서버와의 연결에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.',
                type: 'text',
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  const handleQuestionClick = (question: string) => {
    if (question === '챗봇 메뉴얼') {
      navigate('/chat/manual');
      return;
    }
    handleSendMessage(question);
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
      {/* 녹음 컴포넌트 */}
      <VoiceRecorder
        ref={voiceRecorderRef}
        onTranscript={(text) => {
          // 음성 인식 결과를 메시지로 전송
          handleSendMessage(text);
        }}
        isListening={isListening}
        onListeningChange={setIsListening}
      />

      <Header />

      <div className={styles.container}>
        <div className={styles.chatHeader}>
          <img src={chatIcon} alt="채팅" className={styles.headerIcon} />
          <span className={styles.headerTitle}>다무너와 대화하기</span>
        </div>

        <div className={styles.content} ref={contentRef}>
          {/* Welcome Section */}
          <div className={styles.welcomeSection}>
            <img src={moonerbot} alt="무너봇" className={styles.welcomeIcon} />
            <p className={styles.welcomeText}>
              상담 챗봇 서비스입니다.
              <br />
              궁금하신 내용을 입력해 주세요.
            </p>
          </div>

          {/* Recommended Questions */}
          <div className={styles.recommendedSection}>
            <h3 className={styles.recommendedTitle}>추천질문</h3>
            <div className={styles.questionList}>
              {recommendedQuestions.map((question: string) => (
                <button
                  key={question}
                  type="button"
                  className={styles.questionButton}
                  onClick={() => handleQuestionClick(question)}
                >
                  {question}
                </button>
              ))}
              <button
                type="button"
                className={styles.questionButton}
                onClick={() => handleQuestionClick('챗봇 메뉴얼')}
              >
                <img src={infoIcon} alt="정보" className={styles.infoIcon} />
                챗봇 메뉴얼
              </button>
            </div>
          </div>

          {/* Messages */}
          {messages.length > 0 && (
            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <div key={message.id} className={styles.messageWrapper}>
                  {message.role === 'user' ? (
                    <div className={styles.userMessageContainer}>
                      <div className={styles.userMessage}>
                        <p className={styles.userText}>{message.content}</p>
                      </div>
                      <span className={styles.timestamp}>
                        {formatTime(message.timestamp)}
                      </span>
                    </div>
                  ) : (
                    <div className={styles.assistantMessageContainer}>
                      <div className={styles.assistantHeader}>
                        <img
                          src={moonerbot}
                          alt="무너"
                          className={styles.botIcon}
                        />
                        <span className={styles.botName}>무너</span>
                      </div>
                      <div className={styles.assistantMessage}>
                        <div className={styles.assistantText}>
                          {message.content ? (
                            <ReactMarkdown
                              components={{
                                p: ({ children }) => (
                                  <p
                                    style={{
                                      marginBottom: '0.8em',
                                      lineHeight: '1.6',
                                    }}
                                  >
                                    {children}
                                  </p>
                                ),
                                ul: ({ children }) => (
                                  <ul
                                    style={{
                                      marginLeft: '1.2em',
                                      marginBottom: '0.8em',
                                      lineHeight: '1.6',
                                    }}
                                  >
                                    {children}
                                  </ul>
                                ),
                                ol: ({ children }) => (
                                  <ol
                                    style={{
                                      marginLeft: '1.2em',
                                      marginBottom: '0.8em',
                                      lineHeight: '1.6',
                                    }}
                                  >
                                    {children}
                                  </ol>
                                ),
                                li: ({ children }) => (
                                  <li style={{ marginBottom: '0.4em' }}>
                                    {children}
                                  </li>
                                ),
                                strong: ({ children }) => (
                                  <strong style={{ fontWeight: 'bold' }}>
                                    {children}
                                  </strong>
                                ),
                                em: ({ children }) => (
                                  <em style={{ fontStyle: 'italic' }}>
                                    {children}
                                  </em>
                                ),
                                h1: ({ children }) => (
                                  <h1
                                    style={{
                                      fontSize: '1.5em',
                                      fontWeight: 'bold',
                                      marginBottom: '0.5em',
                                    }}
                                  >
                                    {children}
                                  </h1>
                                ),
                                h2: ({ children }) => (
                                  <h2
                                    style={{
                                      fontSize: '1.3em',
                                      fontWeight: 'bold',
                                      marginBottom: '0.5em',
                                    }}
                                  >
                                    {children}
                                  </h2>
                                ),
                                h3: ({ children }) => (
                                  <h3
                                    style={{
                                      fontSize: '1.1em',
                                      fontWeight: 'bold',
                                      marginBottom: '0.5em',
                                    }}
                                  >
                                    {children}
                                  </h3>
                                ),
                              }}
                            >
                              {message.content}
                            </ReactMarkdown>
                          ) : (
                            <div className={styles.loadingDots}>
                              <div className={styles.loadingDot} />
                              <div className={styles.loadingDot} />
                              <div className={styles.loadingDot} />
                            </div>
                          )}
                        </div>
                      </div>
                      {message.cards && message.cards.length > 0 && (
                        <MessageCard
                          cards={message.cards}
                          type={message.type || 'text'}
                        />
                      )}
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

        {/* Input */}
        <ChatInput
          onSendMessage={handleSendMessage}
          isLoading={isLoading}
          onClearChat={handleClearChat}
          voiceRecorderRef={voiceRecorderRef}
          isListening={isListening}
          setIsListening={setIsListening}
        />
      </div>

      <BottomNav />
    </Layout>
  );
}
