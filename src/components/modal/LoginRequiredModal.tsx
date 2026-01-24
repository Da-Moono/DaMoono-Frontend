import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '@/assets/images/login-guard.png';
import Layout from '@/pages/layout/Layout';
import * as css from './style/LoginRequiredModal.css';

export default function LoginRequiredModal() {
  const navigate = useNavigate();

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return (
    <Layout>
      <div className={css.overlay}>
        <div className={css.modal}>
          <div className={css.header}>
            <img src={img} alt="무너 캐릭터" className={css.image} />

            <button
              className={css.closeButton}
              onClick={() => navigate(-1)}
              aria-label="닫기"
            >
              ✕
            </button>
          </div>

          <h2 className={css.title}>로그인이 필요한 페이지입니다.</h2>

          <p className={css.description}>
            로그인 후 이용 가능한 페이지입니다.
            <br />
            로그인 후 다시 시도해 주세요!
          </p>

          <button
            className={css.loginButton}
            onClick={() => navigate('/login/form')}
          >
            로그인 / 회원가입 하러가기
          </button>
        </div>
      </div>
    </Layout>
  );
}
