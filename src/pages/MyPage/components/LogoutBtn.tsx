import * as css from '../styles/MyPage.css';

interface LogoutButtonProps {
  onLogout: () => void;
}

export function LogoutBtn() {
  return (
    <button type="button" className={css.logout}>
      로그아웃
    </button>
  );
}
