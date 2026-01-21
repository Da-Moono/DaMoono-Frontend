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
        <span className={styles.navIcon}>👤</span>
        <span className={styles.navLabel}>마이페이지</span>
      </button>
    </nav>
  );
}
