import { useNavigate } from 'react-router';
import { logout } from '@/services/authApi';
import * as css from '../styles/MyPage.css';

export function LogoutBtn() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('userId');
      localStorage.removeItem('userName');
      localStorage.removeItem('userRole');
      navigate('/');
    } catch (_error) {
      alert('로그아웃 중 오류가 발생했습니다.');
    }
  };

  return (
    <button type="button" className={css.logout} onClick={handleLogout}>
      로그아웃
    </button>
  );
}
