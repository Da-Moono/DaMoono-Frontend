import { useNavigate } from 'react-router';
import * as css from '../styles/MyPage.css';

interface CounselSectionProps {
  count?: number;
}

export function CounselSection({ count = 1 }: CounselSectionProps) {
  const navigate = useNavigate();
  const hasCounsel = count > 0;

  const handleGoChat = () => {
    navigate('/chat');
  };

  const handleGoCounsel = () => {
    if (!hasCounsel) return;
    navigate('/counsel');
  };

  return (
    <section className={css.container}>
      <h4 className={css.counselTitle}>
        {hasCounsel ? (
          <>
            상담 내역 총 <span className={css.counselCnt}>{count}</span>건
          </>
        ) : (
          '\u00A0' // 줄바꿈이 일어나지 않는 공백
        )}
      </h4>
      <div className={css.counselCard}>
        <button
          type="button"
          className={css.counselText}
          onClick={handleGoCounsel}
          disabled={!hasCounsel}
        >
          {hasCounsel ? (
            <>
              상담 내역 조회
              <span className={css.arrow}>&gt;</span>
            </>
          ) : (
            '상담 내역이 없어요'
          )}
        </button>

        <button className={css.counselBtn} onClick={handleGoChat}>
          상담 챗봇 이용하기
        </button>
      </div>
    </section>
  );
}
