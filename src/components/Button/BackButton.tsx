import { useNavigate } from 'react-router';
import * as s from '../Button/style/BackButton.css';

interface BackButtonProps {
  targetPath: string; // 유저는 '/home', 상담사는 '/chat/admin' 등
  label?: string;
}

export default function BackButton({
  targetPath,
  label = '홈으로 돌아가기',
}: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <div className={s.buttonWrapper}>
      <button className={s.button} onClick={() => navigate(targetPath)}>
        {label}
      </button>
    </div>
  );
}
