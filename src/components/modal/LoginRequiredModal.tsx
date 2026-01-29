import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '@/assets/images/login-guard.png';
import Layout from '@/pages/layout/Layout';
import * as css from './style/LoginRequiredModal.css';

interface LoginRequiredModalProps {
  onClose?: () => void;
  message?: string;
  useLayout?: boolean;
}

export default function LoginRequiredModal({
  onClose,
  message = '로그인 후 이용 가능한 페이지입니다.\n로그인 후 다시 시도해 주세요!',
  useLayout = true,
}: LoginRequiredModalProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  const content = (
    // biome-ignore lint/a11y/noStaticElementInteractions: 모달 오버레이 클릭 처리
    <div className={css.overlay} onClick={handleClose} role="presentation">
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: 모달 내부 클릭 전파 방지 */}
      <div
        className={css.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className={css.header}>
          <img src={img} alt="무너 캐릭터" className={css.image} />

          <button
            className={css.closeButton}
            onClick={handleClose}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        <h2 className={css.title}>로그인이 필요한 페이지입니다.</h2>

        <p className={css.description}>
          {message.split('\n').map((line, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: 정적 텍스트 분할이므로 인덱스 사용 안전
            <span key={i}>
              {line}
              {i < message.split('\n').length - 1 && <br />}
            </span>
          ))}
        </p>

        <button
          className={css.loginButton}
          onClick={() => navigate('/login/form')}
        >
          로그인 / 회원가입 하러가기
        </button>
      </div>
    </div>
  );

  return useLayout ? <Layout>{content}</Layout> : content;
}
