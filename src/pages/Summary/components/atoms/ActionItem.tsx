import AlarmIcon from '@/pages/Summary/assets/clock.svg';
import PhoneIcon from '@/pages/Summary/assets/phone.svg';
import ShieldIcon from '@/pages/Summary/assets/shield.svg';
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
