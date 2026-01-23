import circle from '@/pages/Summary/assets/circle.svg';
import * as s from '@/pages/Summary/style/StatusCard.css';
import StatusItem from './atoms/StatusItem';

interface StatusData {
  currentStatus: status[];
}

interface status {
  icon: string;
  label: string;
  value: string;
  detail: string;
}

const colors: ('blue' | 'purple' | 'yellow' | 'green')[] = [
  'blue',
  'purple',
  'yellow',
  'green',
];

export default function StatusCard({ currentStatus }: StatusData) {
  return (
    <div className={s.CardContainer}>
      <div className={s.content}>
        <div className={s.titleSection}>
          <img src={circle} className={s.statusImg} alt="circle" />
          <p className={s.statusTitle}>현재 적용 상태</p>
        </div>
        {currentStatus.map((status, index) => (
          <div key={status.label} className={s.statusList}>
            <StatusItem status={status} variant={colors[index % 4]} />
          </div>
        ))}
      </div>
    </div>
  );
}
