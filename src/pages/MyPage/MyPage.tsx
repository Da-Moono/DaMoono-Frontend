import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '../layout/Layout';
import { CounselSection } from './components/CounselSection';
import { LogoutBtn } from './components/LogoutBtn';
import { Menu } from './components/Menu';
import { TipsSection } from './components/TipsSection';
import * as css from './styles/MyPage.css';

export default function MyPage() {
  return (
    <Layout>
      <Header />
      <div className={css.mypage}>
        <CounselSection />
        <Menu />
        <TipsSection />
        <LogoutBtn />
      </div>
      <BottomNav />
    </Layout>
  );
}
