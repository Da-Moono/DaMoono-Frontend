import PhoneIcon from '@/pages/Summary/assets/call.svg'; // 전화 아이콘
import DetectiveMascot from '@/pages/Summary/assets/detective.png';
import MailIcon from '@/pages/Summary/assets/mail.svg'; // 메일 아이콘
import PinkBubble from '@/pages/Summary/assets/pink-bubble.svg'; // 공통 말풍선 배경
import * as s from '@/pages/Summary/style/NextActionCard.css';

interface NextActionProps {
  nextActions: string[];
}

// 아이콘 매핑 로직
const ICON_MAP: Record<string, string> = {
  '📩': MailIcon,
  '📞': PhoneIcon,
};

export default function NextActionCard({ nextActions }: NextActionProps) {
  return (
    <div className={s.CardContainer}>
      <div className={s.header}>
        <img src={DetectiveMascot} alt="detective" className={s.mascotImg} />
        <p className={s.title}>다음 단계 안내</p>
      </div>

      <div className={s.content}>
        {nextActions.map((action) => {
          const iconKey = action.startsWith('📩') ? '📩' : '📞';
          const cleanText = action.replace(/📩|📞/g, '').trim();

          return (
            <div key={action} className={s.actionItem}>
              {/* 말풍선과 아이콘을 겹치기 위한 컨테이너 */}
              <div className={s.iconStack}>
                <img src={PinkBubble} className={s.bubbleBg} alt="bubble" />
                <img
                  src={ICON_MAP[iconKey]}
                  className={s.innerIcon}
                  alt="icon"
                />
              </div>
              <p className={s.actionText}>{cleanText}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
