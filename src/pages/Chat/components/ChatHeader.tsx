import chatIcon from '@/assets/images/chat.png';
import * as styles from '../style/ChatHeader.css';

interface ChatHeaderProps {
  title: string;
  showActions?: boolean;
  onEndConsult?: () => void;
  onSummary?: () => void;
}

export default function ChatHeader({
  title,
  showActions = false,
  onEndConsult,
  onSummary,
}: ChatHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={chatIcon} alt="채팅" className={styles.headerIcon} />
        <span className={styles.headerTitle}>{title}</span>
      </div>
      {showActions && (
        <div className={styles.headerRight}>
          <button
            type="button"
            className={styles.endButton}
            onClick={onEndConsult}
          >
            상담종료
          </button>
          <button
            type="button"
            className={styles.summaryButton}
            onClick={onSummary}
          >
            요약하기
          </button>
        </div>
      )}
    </div>
  );
}
