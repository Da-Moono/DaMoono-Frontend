import { useState } from 'react';
import { useNavigate } from 'react-router';
import mascot from '@/assets/images/search-moono.png';
import { checkUserId, login, signup } from '@/services/authApi';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Signup.css';

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [isIdChecked, setIsIdChecked] = useState(false);
  const [isIdAvailable, setIsIdAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
    setIsIdChecked(false);
    setIsIdAvailable(false);
  };

  const handleCheckDuplicate = async () => {
    if (!userId.trim()) {
      alert('아이디를 입력해주세요.');
      return;
    }

    if (userId.length < 4) {
      alert('아이디는 4자 이상이어야 합니다.');
      return;
    }

    setIsLoading(true);
    try {
      const data = await checkUserId(userId);
      if (data.available) {
        alert('사용 가능한 아이디입니다.');
        setIsIdChecked(true);
        setIsIdAvailable(true);
      } else {
        alert('이미 사용 중인 아이디입니다.');
        setIsIdChecked(true);
        setIsIdAvailable(false);
      }
    } catch (error) {
      console.error('중복 확인 에러:', error);
      alert(
        error instanceof Error
          ? `중복 확인 실패: ${error.message}`
          : '중복 확인 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async () => {
    // 유효성 검사
    if (!name.trim() || !userId.trim() || !password || !passwordConfirm) {
      alert('모든 항목을 입력해주세요.');
      return;
    }

    if (name.length < 2) {
      alert('이름은 2자 이상이어야 합니다.');
      return;
    }

    if (!isIdChecked || !isIdAvailable) {
      alert('아이디 중복 확인을 해주세요.');
      return;
    }

    if (password.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsLoading(true);
    try {
      // 회원가입
      await signup({ name, userId, password });

      // 자동 로그인
      const loginData = await login({ userId, password });
      localStorage.setItem('userName', loginData.data.name);
      localStorage.setItem('userRole', loginData.data.role);

      alert('회원가입이 완료되었습니다.');
      navigate(PAGE_PATHS.HOME, { state: { showGuide: true } });
    } catch (error) {
      console.error('회원가입 에러:', error);
      alert(
        error instanceof Error
          ? `회원가입 실패: ${error.message}`
          : '회원가입 중 오류가 발생했습니다.',
      );
    } finally {
      setIsLoading(false);
    }
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
                onChange={handleUserIdChange}
                disabled={isLoading}
              />
              <button
                type="button"
                className={styles.checkButton}
                onClick={handleCheckDuplicate}
                disabled={isLoading}
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
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </div>

          <button
            type="button"
            className={styles.signupButton}
            onClick={handleSignup}
            disabled={isLoading}
          >
            {isLoading ? '처리 중...' : '회원가입'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
