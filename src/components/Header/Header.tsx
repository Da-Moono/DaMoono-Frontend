import logo from '@/assets/images/logo-removebg.png';
import * as styles from './style/Header.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="다무너" className={styles.logo} />
    </header>
  );
}
