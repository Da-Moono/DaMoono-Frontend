import { useEffect, useState } from 'react';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import { fetchCounselList } from '@/services/counselApi';
import Layout from '../layout/Layout';
import { CounselSection } from './components/CounselSection';
import { LogoutBtn } from './components/LogoutBtn';
import { Menu } from './components/Menu';
import { TipsSection } from './components/TipsSection';
import * as css from './styles/MyPage.css';

export default function MyPage() {
  const [counselCount, setCounselCount] = useState(0);

  useEffect(() => {
    const loadCount = async () => {
      try {
        const res = await fetchCounselList({
          page: 1,
          size: 1,
        });
        setCounselCount(res.count);
      } catch (e) {
        console.error('상담 내역 개수 조회 실패', e);
      }
    };

    loadCount();
  }, []);

  return (
    <Layout>
      <Header />
      <div className={css.mypage}>
        <CounselSection count={counselCount} />
        <Menu />
        <TipsSection />
        <LogoutBtn />
      </div>
      <BottomNav />
    </Layout>
  );
}
