import * as css from '../styles/Counsel.css';

interface CounselCardProps {
  content: string;
  summarized: boolean;
  onSummarize?: () => void;
}

export function CounselCard({
  content,
  summarized,
  onSummarize,
}: CounselCardProps) {
  return (
    <div className={css.card}>
      <div className={css.cardHeader}>
        {summarized ? (
          <span className={css.done}>✔ 요약됨</span>
        ) : (
          <span className={css.pending}>✖ 요약전</span>
        )}
      </div>

      <p className={css.content}>{content}</p>

      {!summarized && (
        <button type="button" className={css.summaryBtn} onClick={onSummarize}>
          요약하기
        </button>
      )}
    </div>
  );
}
