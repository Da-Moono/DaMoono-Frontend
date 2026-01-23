import rocketIcon from '@/pages/Summary/assets/rocket.svg';
import * as s from '@/pages/Summary/style/Badge.css';

export default function Badge({ category }: { category: string }) {
  return (
    <div className={s.badgeContainer}>
      <img src={rocketIcon} alt="rocket" className={s.icon} />
      <p className={s.text}>{category}</p>
    </div>
  );
}
