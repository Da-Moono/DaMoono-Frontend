import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import * as styles from '../Home/style/Home.css';
import Layout from '../layout/Layout';
import * as css from '../MyPage/styles/MyPage.css';
import { MenuSection } from './components/MenuSection';
import { MenuTabs } from './components/MenuTabs';
import { TipsSection } from './components/TipsSection';

export default function MyPage() {
  return (
    <Layout>
      <div className={styles.container}>
        {/* 헤더 */}
        <Header />

        {/* 상담 섹션 */}
        <section className={css.counselCard}>
          <span>상담 내역이 없어요</span>
          <button>상담 찾으러 가기</button>
        </section>

        <MenuTabs />
        <MenuSection />
        <TipsSection />

        <button className={css.logout}>로그아웃</button>
      </div>
      <BottomNav />
    </Layout>
  );
}
