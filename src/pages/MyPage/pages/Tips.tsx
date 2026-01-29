import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';
import Layout from '@/pages/layout/Layout';
import TipsGuideSection from '../components/TipsGuideSection';
import * as css from '../styles/tips.css';

export default function TipsPage() {
  return (
    <Layout>
      <Header />
      <main>
        <div className={css.header}>
          <span className={css.badge}>다무너 가이드</span>
          <h1 className={css.guide}>다무너와 알아보는 사용법</h1>
        </div>
        <div className={css.featureSection}>
          <h2 className={css.featureTitle}>다무너에는 이런 기능들이 있어요</h2>

          <ul className={css.featureList}>
            <li className={css.featureItem}>
              <span className={css.checkBox}>✓</span>
              상담 챗봇 서비스와 상담 요약
            </li>
            <li className={css.featureItem}>
              <span className={css.checkBox}>✓</span>
              나의 요금제 및 구독 서비스 확인
            </li>
            <li className={css.featureItem}>
              <span className={css.checkBox}>✓</span>
              성향 테스트로 맞춤 서비스를
            </li>
          </ul>
        </div>
        <TipsGuideSection
          cards={[
            {
              id: 1,
              title: '상담 봇 서비스와 상담 요약 사용법',
              description: '다무너의 상담 요약 서비스를 이용할 수 있어요',
              imageUrl: '/src/assets/images/tip-guide-1.png',
            },
            {
              id: 2,
              title: '상담 챗봇 서비스와 상담 요약 사용법',
              description: '사용 방법을 자세히 알고 싶다면!',
              imageUrl: '/src/assets/images/tip-guide-2.png',
            },
            {
              id: 3,
              title: '나의 요금제 및 구독 서비스 확인',
              description: '나의 요금제와 구독 서비스를 한눈에 볼 수 있어요',
              imageUrl: '/src/assets/images/tip-guide-1.png',
            },
            {
              id: 4,
              title: '나의 성향을 알아볼 수 있어요',
              description: '메뉴의 성향 탭을 사용해보세요!',
              imageUrl: '/src/assets/images/tip-guide-3.png',
            },
          ]}
        />
      </main>
      <BottomNav />
    </Layout>
  );
}
