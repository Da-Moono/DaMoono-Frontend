import BoxIcon from '@/pages/Summary/assets/box.svg';
import CallIcon from '@/pages/Summary/assets/call.svg';
import CheckIcon from '@/pages/Summary/assets/check.svg';
import AlarmIcon from '@/pages/Summary/assets/clock.svg';
import EarthIcon from '@/pages/Summary/assets/earth.svg';
import InfoIcon from '@/pages/Summary/assets/info.svg';
import MailIcon from '@/pages/Summary/assets/mail.svg';
import MoneyIcon from '@/pages/Summary/assets/money.svg';
import NumberIcon from '@/pages/Summary/assets/number.svg';
import PhoneIcon from '@/pages/Summary/assets/phone.svg';
import PresentIcon from '@/pages/Summary/assets/present.svg';
import ShieldIcon from '@/pages/Summary/assets/shield.svg';
import SignalIcon from '@/pages/Summary/assets/signal.svg';
import SparkleIcon from '@/pages/Summary/assets/sparkle.svg';
import * as s from '@/pages/Summary/style/ActionItem.css';

interface ActionItemProps {
  action: {
    id: number;
    icon: string;
    title: string;
    description: string;
  };
  variant: 'orange' | 'blue' | 'pink';
}

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

// action 객체를 구조 분해 할당으로 가져오기
export default function ActionItem({ action, variant }: ActionItemProps) {
  return (
    <div className={s.itemContainer}>
      <div className={s.iconBox({ color: variant })}>
        <img
          src={ICON_MAP[action.icon]}
          className={s.iconImage}
          alt={action.title}
        />
      </div>
      <div className={s.textBox}>
        <p className={s.title}>{action.title}</p>
        <p className={s.description}>{action.description}</p>
      </div>
    </div>
  );
}
