import { useNavigate } from 'react-router-dom';
import homeIcon from '@/assets/images/home.png';
import phoneIcon from '@/assets/images/phone.png';
import userIcon from '@/assets/images/user.png';
import * as styles from './style/BottomNav.css';

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className={styles.bottomNav}>
      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/customer')}
      >
        <img src={phoneIcon} alt="고객센터" className={styles.navIcon} />
        <span className={styles.navLabel}>고객센터</span>
      </button>

      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/home')}
      >
        <img src={homeIcon} alt="홈" className={styles.navIcon} />
        <span className={styles.navLabel}>홈</span>
      </button>

      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/mypage')}
      >
        <img src={userIcon} alt="마이페이지" className={styles.navIcon} />
        <span className={styles.navLabel}>마이페이지</span>
      </button>
    </nav>
  );
}
