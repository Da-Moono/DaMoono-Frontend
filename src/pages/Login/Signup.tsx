import { useState } from 'react';
import { useNavigate } from 'react-router';
import mascot from '@/assets/images/search-moono.png';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSignup = () => {
    // TODO: 회원가입 로직 구현
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    console.log('회원가입:', { name, userId, password });
    navigate(PAGE_PATHS.LOGIN_FORM);
  };

  const handleCheckDuplicate = () => {
    // TODO: 중복 확인 로직
    console.log('중복 확인:', userId);
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
            <label htmlFor="name" className={styles.label}>
              이름
            </label>
            <input
              id="name"
              type="text"
              className={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="userId" className={styles.label}>
              아이디
            </label>
            <div className={styles.inputWithButton}>
              <input
                id="userId"
                type="text"
                className={styles.inputFlex}
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <button
                type="button"
                className={styles.checkButton}
                onClick={handleCheckDuplicate}
              >
                중복 확인
              </button>
            </div>
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

          <div className={styles.inputGroup}>
            <label htmlFor="passwordConfirm" className={styles.label}>
              비밀번호 확인
            </label>
            <input
              id="passwordConfirm"
              type="password"
              className={styles.input}
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>

          <button
            type="button"
            className={styles.signupButton}
            onClick={handleSignup}
          >
            회원가입
          </button>
        </div>
      </div>
    </Layout>
  );
}
