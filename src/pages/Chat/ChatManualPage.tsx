import { useNavigate } from 'react-router';
import Layout from '../layout/Layout';
import * as styles from './style/ChatManualPage.css';

export default function ChatManualPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className={styles.container}>
        <header className={styles.header}>
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate('/chat')}
          >
            ← 뒤로
          </button>
          <h1 className={styles.title}>챗봇 메뉴얼</h1>
        </header>

        <div className={styles.content}>
          <p className={styles.text}>챗봇 메뉴얼 페이지입니다.</p>
          <p className={styles.text}>추후 구현 예정입니다.</p>
        </div>
      </div>
    </Layout>
  );
}
