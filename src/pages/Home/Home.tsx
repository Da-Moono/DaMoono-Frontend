import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import BottomNav from '@/components/BottomNav';
import Guide from '@/components/Guide';
import Header from '@/components/Header';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGuide, setShowGuide] = useState(false);

  const slides = [
    { id: 1, content: '성향 테스트 하러가기' },
    { id: 2, content: '슬라이드 2' },
    { id: 3, content: '슬라이드 3' },
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
      message: '슬라이더를 통해 다른 기능들도 확인하실 수 있어요 !',
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
  }, []);

  // 첫 방문 체크 및 가이드 표시
  useEffect(() => {
    const hasSeenGuide = localStorage.getItem('hasSeenHomeGuide');
    if (!hasSeenGuide) {
      setTimeout(() => setShowGuide(true), 500);
    }
  }, []);

  const handleGuideComplete = () => {
    setShowGuide(false);
    localStorage.setItem('hasSeenHomeGuide', 'true');
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
          onClick={() => navigate('/chat')}
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
            <div
              className={styles.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <button
                  key={slide.id}
                  type="button"
                  className={styles.sliderCard}
                  onClick={() => {
                    if (slide.id === 1) {
                      navigate(PAGE_PATHS.PERSONALITY_TEST);
                    }
                  }}
                  disabled={slide.id !== 1}
                >
                  <div className={styles.sliderContent}>{slide.content}</div>
                </button>
              ))}
            </div>
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

        {/* BEST 상품 한번에 보기 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>BEST 상품 한번에 보기</h2>
            <button type="button" className={styles.moreButton}>
              더보기 &gt;
            </button>
          </div>

          <div className={styles.tabs}>
            <button type="button" className={styles.tabActive}>
              요금제
            </button>
            <button type="button" className={styles.tab}>
              구독
            </button>
          </div>

          <div className={styles.productList}>
            {[1, 2, 3, 4, 5].map((rank) => (
              <div key={rank} className={styles.productItem}>
                <div className={styles.productRank}>{rank}</div>
                <div className={styles.productIcon} />
                <div className={styles.productInfo}>
                  <p className={styles.productName}>
                    데이터 무한 + 로밍 + 유튜브 프리미엄 요금제 + 추가 혜택 &gt;
                  </p>
                  <p className={styles.productPrice}>월 59,800원</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <BottomNav />

      {showGuide && (
        <Guide steps={guideSteps} onComplete={handleGuideComplete} />
      )}
    </Layout>
  );
}
