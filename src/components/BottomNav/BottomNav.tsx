import { useNavigate } from 'react-router-dom';
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
        <span className={styles.navIcon}>📞</span>
        <span className={styles.navLabel}>고객센터</span>
      </button>

      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/')}
      >
        <span className={styles.navIcon}>🏠</span>
        <span className={styles.navLabel}>홈</span>
      </button>

      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/mypage')}
      >
        <span className={styles.navIcon}>👤</span>
        <span className={styles.navLabel}>마이페이지</span>
      </button>
    </nav>
  );
}
