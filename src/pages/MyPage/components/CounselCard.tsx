import * as css from '../styles/Counsel.css';

interface CounselCardProps {
  content: string;
  summarized: boolean;
  onSummarize: () => void;
  onGetSummary: () => void;
}

export function CounselCard({
  content,
  summarized,
  onSummarize,
  onGetSummary,
}: CounselCardProps) {
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: 카드 전체 클릭 UX를 위해 의도적으로 div 사용
    // biome-ignore lint/a11y/noStaticElementInteractions: button 중첩 방지
    // biome-ignore lint/a11y/useSemanticElements: 카드 레이아웃을 위해 div 사용
    <div
      className={css.card}
      role="button"
      tabIndex={0}
      onClick={summarized ? onGetSummary : undefined}
      onKeyDown={
        summarized
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                onGetSummary();
              }
            }
          : undefined
      }
    >
      <div>
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
