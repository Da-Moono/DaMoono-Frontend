import { useState } from 'react';
import { useNavigate } from 'react-router';
import mascot from '@/assets/images/search-moono.png';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/LoginForm.css';

export default function LoginForm() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: 로그인 로직 구현
    console.log('로그인:', { userId, password });
    navigate(PAGE_PATHS.HOME);
  };

  const handleSignupClick = () => {
    navigate(PAGE_PATHS.SIGNUP);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <img src={mascot} alt="무너" className={styles.mascot} />
          <div className={styles.speechBubble}>다 무 너</div>
        </div>

        <div className={styles.formContainer}>
          <div className={styles.inputGroup}>
            <label htmlFor="userId" className={styles.label}>
              아이디
            </label>
            <input
              id="userId"
              type="text"
              className={styles.input}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="button"
            className={styles.loginButton}
            onClick={handleLogin}
          >
            로그인
          </button>

          <button
            type="button"
            className={styles.signupText}
            onClick={handleSignupClick}
          >
            회원가입
          </button>
        </div>
      </div>
    </Layout>
  );
}
