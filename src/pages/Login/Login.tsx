import logo from '@/assets/images/logo.png';
import Layout from '../layout/Layout';
import * as styles from './style/Login.css';

export default function Login() {
  return (
    <Layout>
      <div className={styles.container}>
        <img src={logo} alt="다무너 로고" className={styles.logo} />

        <button type="button" className={styles.loginButton}>
          로그인 / 회원가입
        </button>

        <p className={styles.guestText}>로그인 없이 이용하기</p>
      </div>
    </Layout>
  );
}
