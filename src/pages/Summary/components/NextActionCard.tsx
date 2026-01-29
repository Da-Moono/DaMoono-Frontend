import BoxIcon from '@/pages/Summary/assets/box.svg';
import PhoneIcon from '@/pages/Summary/assets/call.svg'; // 전화 아이콘
import CallIcon from '@/pages/Summary/assets/call.svg';
import CheckIcon from '@/pages/Summary/assets/check.svg';
import AlarmIcon from '@/pages/Summary/assets/clock.svg';
import EarthIcon from '@/pages/Summary/assets/earth.svg';
import DetectiveMascot from '@/pages/Summary/assets/holeman.png';
import InfoIcon from '@/pages/Summary/assets/info.svg';
import MailIcon from '@/pages/Summary/assets/mail.svg'; // 메일 아이콘
import MoneyIcon from '@/pages/Summary/assets/money.svg';
import NumberIcon from '@/pages/Summary/assets/number.svg';
import PinkBubble from '@/pages/Summary/assets/pink-bubble.svg'; // 공통 말풍선 배경
import PresentIcon from '@/pages/Summary/assets/present.svg';
import ShieldIcon from '@/pages/Summary/assets/shield.svg';
import SignalIcon from '@/pages/Summary/assets/signal.svg';
import SparkleIcon from '@/pages/Summary/assets/sparkle.svg';
import * as s from '@/pages/Summary/style/NextActionCard.css';

interface NextActionProps {
  nextActions: string[];
}

// 아이콘 매핑 로직
const ICON_MAP: Record<string, string> = {
  '🛡️': ShieldIcon,
  '📱': PhoneIcon,
  '⏰': AlarmIcon,
  '✨': SparkleIcon,
  '📶': SignalIcon,
  '📩': MailIcon,
  '📞': CallIcon,
  '✅': CheckIcon,
  '📦': BoxIcon,
  '💰': MoneyIcon,
  '🌐': EarthIcon,
  '🎁': PresentIcon,
  ℹ️: InfoIcon,
  '🔢': NumberIcon,
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
