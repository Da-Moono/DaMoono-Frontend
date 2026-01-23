import { useNavigate } from 'react-router';
import logo from '@/assets/images/logo.png';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate(PAGE_PATHS.LOGIN_FORM);
  };

  const handleGuestLogin = () => {
    navigate(PAGE_PATHS.HOME);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <img src={logo} alt="다무너 로고" className={styles.logo} />

        <button
          type="button"
          className={styles.loginButton}
          onClick={handleLoginClick}
        >
          로그인 / 회원가입
        </button>

        <button
          type="button"
          className={styles.guestText}
          onClick={handleGuestLogin}
        >
          로그인 없이 이용하기
        </button>
      </div>
    </Layout>
  );
}
