<<<<<<< HEAD
import * as styles from './style/BottomNav.css';

export default function BottomNav() {
  return (
    <nav className={styles.bottomNav}>
      <button type="button" className={styles.navItem}>
        <span className={styles.navIcon}>📞</span>
        <span className={styles.navLabel}>고객센터</span>
      </button>
      <button type="button" className={styles.navItem}>
        <span className={styles.navIcon}>🏠</span>
        <span className={styles.navLabel}>홈</span>
      </button>
      <button type="button" className={styles.navItem}>
=======
import { useNavigate } from 'react-router-dom';
import * as styles from './style/BottomNav.css';

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <nav className={styles.bottomNav}>
      <button
        type="button"
        className={styles.navItem}
        onClick={() => navigate('/customer_service')}
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
>>>>>>> 3e2f934 (feat : 고객센터 페이지 구현)
        <span className={styles.navIcon}>👤</span>
        <span className={styles.navLabel}>마이페이지</span>
      </button>
    </nav>
  );
}
