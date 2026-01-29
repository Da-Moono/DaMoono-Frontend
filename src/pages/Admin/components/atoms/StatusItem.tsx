import AlarmIcon from '@/pages/Summary/assets/clock.svg';
import PhoneIcon from '@/pages/Summary/assets/phone.svg';
import ShieldIcon from '@/pages/Summary/assets/shield.svg';
import SignalIcon from '@/pages/Summary/assets/signal.svg';
import SparkleIcon from '@/pages/Summary/assets/sparkle.svg';
import * as s from '@/pages/Summary/style/StatusItem.css';

interface ActionItemProps {
  status: {
    icon: string;
    label: string;
    value: string;
    detail: string;
  };
  variant: 'blue' | 'purple' | 'yellow' | 'green';
}

const ICON_MAP: Record<string, string> = {
  '🛡️': ShieldIcon,
  '📱': PhoneIcon,
  '⏰': AlarmIcon,
  '✨': SparkleIcon,
  '📶': SignalIcon,
};

export default function StatusItem({ status, variant }: ActionItemProps) {
  return (
    <div className={s.itemContainer({ color: variant })}>
      <div className={s.headerSection}>
        <div className={s.imgWrapper}>
          <img
            src={ICON_MAP[status.icon]}
            className={s.iconImage({ color: variant })}
            alt={status.label}
          />
        </div>

        <div className={s.textBox}>
          <p className={s.title}>{status.label}</p>
          <p className={s.detail}>{status.detail}</p>
        </div>
      </div>

      <div className={s.valueSection({ color: variant })}>
        <p className={s.value({ color: variant })}>{status.value}</p>
      </div>
    </div>
  );
}
