import { useState } from 'react';
import { useNavigate } from 'react-router';
import dropArrow from '@/assets/images/drop-arrow.png';
import mic from '@/assets/images/mic.png';
import plusButton from '@/assets/images/plus-button.png';
import plusChat from '@/assets/images/plus-chat.png';
import plusConsult from '@/assets/images/plus-consult.png';
import plusInfo from '@/assets/images/plus-info.svg';
import sendButton from '@/assets/images/send-button.svg';
import LoginRequiredModal from '@/components/modal/LoginRequiredModal';
import * as styles from '../style/ChatInput.css';
import type { VoiceRecorderRef } from './VoiceRecorder';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  onClearChat: () => void;
  voiceRecorderRef: React.RefObject<VoiceRecorderRef | null>;
  isListening: boolean;
  setIsListening: (listening: boolean) => void;
  hasBottomNav?: boolean;
  onInputChange?: (value: string) => void;
}

export default function ChatInput({
  onSendMessage,
  isLoading,
  onClearChat,
  voiceRecorderRef,
  isListening,
  hasBottomNav = false,
  onInputChange,
}: ChatInputProps) {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputMessage(value);
    onInputChange?.(value);
  };

  const handleSend = () => {
    if (inputMessage.trim() && !isLoading) {
      onSendMessage(inputMessage.trim());
      setInputMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && !isLoading) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleVoiceInput = () => {
    if (!isListening) {
      voiceRecorderRef.current?.startRecording();
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleClearChat = () => {
    onClearChat();
    setShowMenu(false);
  };

  const handleConsultant = () => {
    // 로그인 체크
    const userName = localStorage.getItem('userName');
    if (!userName) {
      setShowLoginModal(true);
      setShowMenu(false);
      return;
    }

    navigate('/chat/consult');
    setShowMenu(false);
  };

  const handleManual = () => {
    navigate('/chat/manual');
    setShowMenu(false);
  };

  return (
    <>
      {showLoginModal && (
        <LoginRequiredModal
          onClose={() => setShowLoginModal(false)}
          useLayout={false}
        />
      )}

      <div
        className={
          hasBottomNav
            ? styles.inputContainerWithBottomNav
            : styles.inputContainer
        }
      >
        {showMenu && (
          <div className={styles.menuOverlay}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleMenuToggle}
            >
              <img src={dropArrow} alt="닫기" className={styles.closeIcon} />
            </button>
            <div className={styles.menuGrid}>
              <button
                type="button"
                className={styles.menuButton}
                onClick={handleClearChat}
              >
                <img
                  src={plusChat}
                  alt="채팅 초기화"
                  className={styles.menuIcon}
                />
                <span className={styles.menuText}>채팅 초기화</span>
              </button>
              <button
                type="button"
                className={styles.menuButton}
                onClick={handleConsultant}
              >
                <img
                  src={plusConsult}
                  alt="상담사 연결"
                  className={styles.menuIcon}
                />
                <span className={styles.menuText}>상담사 연결</span>
              </button>
              <button
                type="button"
                className={styles.menuButton}
                onClick={handleManual}
              >
                <img src={plusInfo} alt="메뉴얼" className={styles.menuIcon} />
                <span className={styles.menuText}>메뉴얼</span>
              </button>
            </div>
          </div>
        )}

        <div className={styles.inputWrapper}>
          <button
            type="button"
            className={styles.plusButton}
            onClick={handleMenuToggle}
          >
            <img src={plusButton} alt="메뉴" className={styles.plusIcon} />
          </button>

          <div className={styles.inputBox}>
            <input
              type="text"
              placeholder="질문을 입력하세요"
              value={inputMessage}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className={styles.input}
              disabled={isLoading}
            />
            <button
              type="button"
              className={styles.iconButton}
              onClick={handleVoiceInput}
              disabled={isLoading}
            >
              <img src={mic} alt="음성 입력" className={styles.icon} />
            </button>
            <button
              type="button"
              className={styles.iconButton}
              onClick={handleSend}
              disabled={isLoading}
            >
              <img src={sendButton} alt="전송" className={styles.icon} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
