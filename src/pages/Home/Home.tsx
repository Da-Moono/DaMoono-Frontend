import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import planBanner from '@/assets/images/Plan-banner.png';
import serviceRecommendationBanner from '@/assets/images/ServiceRecommendation-banner.png';
import subscribeBanner from '@/assets/images/Subscribe-banner.png';
import BottomNav from '@/components/BottomNav';
import Guide from '@/components/Guide';
import Header from '@/components/Header';
import LoginRequiredModal from '@/components/modal/LoginRequiredModal';
import { MOCK_PLANS } from '@/pages/Plan/constants';
import { MOCK_SUBSCRIBES } from '@/pages/Subscribe/constants';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<'plan' | 'subscribe'>('plan');
  const [showLoginModal, setShowLoginModal] = useState(false);

  // 랜덤으로 5개 선택하는 함수
  const getRandomItems = <T,>(array: T[], count: number): T[] => {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // 랜덤 5개 요금제
  const [randomPlans] = useState(() => getRandomItems(MOCK_PLANS, 5));

  // 랜덤 5개 구독
  const [randomSubscribes] = useState(() => getRandomItems(MOCK_SUBSCRIBES, 5));

  const slides = [
    {
      id: 1,
      content: '맞춤 서비스 추천받기',
      path: PAGE_PATHS.SERVICE_RECOMMENDATION,
      image: serviceRecommendationBanner,
    },
    {
      id: 2,
      content: '요금제 둘러보기',
      path: PAGE_PATHS.PLAN,
      image: planBanner,
    },
    {
      id: 3,
      content: '구독 둘러보기',
      path: PAGE_PATHS.SUBSCRIBE,
      image: subscribeBanner,
    },
  ];

  const guideSteps = [
    {
      target: `.${styles.chatButton}`,
      message: 'AI 챗봇에게 궁금한걸 물어보세요 !',
      position: 'bottom' as const,
    },
    {
      target: `.${styles.emptyState}`,
      message: '최근에 요약한 상담내역을 볼 수 있습니다 !',
      position: 'bottom' as const,
    },
    {
      target: `.${styles.sliderWrapper}`,
      message: '슬라이더를 통해 다른 페이지로 이동하실 수 있어요 !',
      position: 'bottom' as const,
    },
    {
      target: `.${styles.productList}`,
      message: '유플러스의 다양한 상품들을 확인하실 수 있습니다 !',
      position: 'top' as const,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // 회원가입 후 가이드 표시
  useEffect(() => {
    if (location.state?.showGuide) {
      setTimeout(() => setShowGuide(true), 500);
      // 상태 초기화 (뒤로가기 시 다시 표시 안 되도록)
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleGuideComplete = () => {
    setShowGuide(false);
  };

  const handleChatClick = () => {
    const userName = localStorage.getItem('userName');
    if (!userName) {
      setShowLoginModal(true);
    } else {
      navigate('/chat');
    }
  };

  return (
    <Layout>
      <Header />

      <div className={styles.container}>
        {/* <div style={{ width: "200px", height: "200px" }}>
          <Loading3D
            textureUrl="src/assets/images/search-moono.png"
            floatSpeed={1.8}
            rotation={0.5}
          />
        </div> */}

        {/* AI 챗봇 버튼 */}
        <button
          type="button"
          className={styles.chatButton}
          onClick={handleChatClick}
        >
          <span className={styles.chatText}>무너에게 다 무너봐~</span>
          <span className={styles.chatBadge}>채팅하기</span>
        </button>

        {/* 최근 상담 요약 */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>최근 상담 요약 &gt;</h2>
          <div className={styles.emptyState}>최근 상담 내역이 없습니다</div>
        </section>

        {/* 이벤트 슬라이더 */}
        <section className={styles.section}>
          <div className={styles.sliderWrapper}>
            {/* 왼쪽 화살표 */}
            <button
              type="button"
              className={styles.sliderArrowLeft}
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0 ? slides.length - 1 : prev - 1,
                )
              }
              aria-label="이전 슬라이드"
            >
              ‹
            </button>

            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  className={styles.sliderCard}
                  onClick={() => navigate(slide.path)}
                >
                  <img
                    src={slide.image}
                    alt={slide.content}
                    className={styles.sliderImage}
                  />
                </button>
              ))}
            </div>

            {/* 오른쪽 화살표 */}
            <button
              type="button"
              className={styles.sliderArrowRight}
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1 ? 0 : prev + 1,
                )
              }
              aria-label="다음 슬라이드"
            >
              ›
            </button>

            <div className={styles.sliderDots}>
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  className={
                    currentSlide === index ? styles.dotActive : styles.dot
                  }
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`슬라이드 ${index + 1}로 이동`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 유플러스 상품 둘러보기 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>유플러스 상품 둘러보기</h2>
            <button
              type="button"
              className={styles.moreButton}
              onClick={() =>
                navigate(
                  activeTab === 'plan' ? PAGE_PATHS.PLAN : PAGE_PATHS.SUBSCRIBE,
                )
              }
            >
              더보기 &gt;
            </button>
          </div>

          <div className={styles.tabs}>
            <button
              type="button"
              className={activeTab === 'plan' ? styles.tabActive : styles.tab}
              onClick={() => setActiveTab('plan')}
            >
              요금제
            </button>
            <button
              type="button"
              className={
                activeTab === 'subscribe' ? styles.tabActive : styles.tab
              }
              onClick={() => setActiveTab('subscribe')}
            >
              구독
            </button>
          </div>

          <div className={styles.productList}>
            {activeTab === 'plan'
              ? randomPlans.map((plan, index) => (
                  <button
                    key={plan.id}
                    type="button"
                    className={styles.productItem}
                    onClick={() =>
                      navigate(
                        `${PAGE_PATHS.PLAN_DETAIL.replace(':id', plan.id.toString())}`,
                      )
                    }
                  >
                    <div className={styles.productRank}>{index + 1}</div>
                    <div className={styles.productInfo}>
                      <p className={styles.productName}>{plan.name} &gt;</p>
                      <p className={styles.productPrice}>
                        월 {plan.price.toLocaleString()}원
                      </p>
                    </div>
                  </button>
                ))
              : randomSubscribes.map((subscribe, index) => (
                  <button
                    key={subscribe.id}
                    type="button"
                    className={styles.productItem}
                    onClick={() =>
                      navigate(
                        `${PAGE_PATHS.SUBSCRIBE_DETAIL.replace(':id', subscribe.id.toString())}`,
                      )
                    }
                  >
                    <div className={styles.productRank}>{index + 1}</div>
                    <div className={styles.productInfo}>
                      <p className={styles.productName}>
                        {subscribe.name} &gt;
                      </p>
                      <p className={styles.productPrice}>
                        월 {subscribe.monthlyPrice.toLocaleString()}원
                      </p>
                    </div>
                  </button>
                ))}
          </div>
        </section>
      </div>

      <BottomNav />

      {showGuide && (
        <Guide steps={guideSteps} onComplete={handleGuideComplete} />
      )}

      {showLoginModal && <LoginRequiredModal />}
    </Layout>
  );
}
