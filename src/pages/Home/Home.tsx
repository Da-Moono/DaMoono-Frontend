import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import chatbotButton from '@/assets/images/damoono-chatbot-button-removebg.png';
import planBanner from '@/assets/images/Plan-banner.png';
import serviceRecommendationBanner from '@/assets/images/ServiceRecommendation-banner.png';
import subscribeBanner from '@/assets/images/Subscribe-banner.png';
import BottomNav from '@/components/BottomNav';
import Guide from '@/components/Guide';
import Header from '@/components/Header';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS } from '@/pages/Plan/constants';
import {
  CATEGORY_LABELS,
  MOCK_SUBSCRIBES,
  SUBSCRIBE_IMAGES,
} from '@/pages/Subscribe/constants';
import { fetchCounselList } from '@/services/counselApi';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/Home.css';

interface CounselApiItem {
  sessionId: string;
  createdAt: string;
  title: string;
  isSummarized: boolean;
}

interface RecentCounsel {
  id: string;
  date: string;
  title: string;
  isSummarized: boolean;
}

const formatDate = (iso: string) => {
  const d = new Date(iso);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, '0')}.${String(d.getDate()).padStart(2, '0')}`;
};

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGuide, setShowGuide] = useState(false);
  const [activeTab, setActiveTab] = useState<'plan' | 'subscribe'>('plan');
  const [recentCounsels, setRecentCounsels] = useState<RecentCounsel[]>([]);
  const [counselSlide, setCounselSlide] = useState(0);

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

  // 최근 상담 내역 불러오기
  useEffect(() => {
    const loadRecentCounsels = async () => {
      try {
        const res = await fetchCounselList({ page: 1, size: 3 });
        const mapped: RecentCounsel[] = res.items
          .filter((item: CounselApiItem) => item.isSummarized)
          .slice(0, 3)
          .map((item: CounselApiItem) => ({
            id: item.sessionId,
            date: formatDate(item.createdAt),
            title: item.title,
            isSummarized: item.isSummarized,
          }));
        setRecentCounsels(mapped);
      } catch (e) {
        console.error('최근 상담 내역 로드 실패', e);
      }
    };

    loadRecentCounsels();
  }, []);

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
    navigate('/chat');
  };

  const handleCounselClick = async (sessionId: string) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      const res = await axios.get(
        `${apiUrl}/summary/consults/${sessionId}/user`,
        { withCredentials: true },
      );

      if (res.status === 200) {
        navigate('/summary', { state: { summaryData: res.data.payload } });
      }
    } catch (e) {
      console.error('요약 조회 실패', e);
      alert('요약을 불러오지 못했습니다.');
    }
  };

  const handlePrevCounsel = () => {
    setCounselSlide((prev) =>
      prev === 0 ? recentCounsels.length - 1 : prev - 1,
    );
  };

  const handleNextCounsel = () => {
    setCounselSlide((prev) =>
      prev === recentCounsels.length - 1 ? 0 : prev + 1,
    );
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
          <img
            src={chatbotButton}
            alt="채팅하기"
            className={styles.chatButtonImage}
          />
        </button>

        {/* 최근 상담 요약 */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>최근 상담 요약</h2>
            <button
              type="button"
              className={styles.moreButton}
              onClick={() => navigate('/counsel')}
            >
              더보기 &gt;
            </button>
          </div>

          {recentCounsels.length === 0 ? (
            <div className={styles.emptyState}>최근 상담 내역이 없습니다</div>
          ) : (
            <div className={styles.counselSliderWrapper}>
              {recentCounsels.length > 1 && (
                <button
                  type="button"
                  className={styles.counselArrowLeft}
                  onClick={handlePrevCounsel}
                  aria-label="이전 상담"
                >
                  ‹
                </button>
              )}

              <div
                className={styles.counselSliderTrack}
                style={{
                  transform: `translateX(-${counselSlide * 100}%)`,
                }}
              >
                {recentCounsels.map((counsel) => (
                  <button
                    key={counsel.id}
                    type="button"
                    className={styles.counselCard}
                    onClick={() => handleCounselClick(counsel.id)}
                  >
                    <div className={styles.counselDate}>{counsel.date}</div>
                    <div className={styles.counselTitle}>{counsel.title}</div>
                  </button>
                ))}
              </div>

              {recentCounsels.length > 1 && (
                <button
                  type="button"
                  className={styles.counselArrowRight}
                  onClick={handleNextCounsel}
                  aria-label="다음 상담"
                >
                  ›
                </button>
              )}

              {recentCounsels.length > 1 && (
                <div className={styles.counselDots}>
                  {recentCounsels.map((counsel, index) => (
                    <button
                      key={counsel.id}
                      type="button"
                      className={
                        counselSlide === index ? styles.dotActive : styles.dot
                      }
                      onClick={() => setCounselSlide(index)}
                      aria-label={`상담 ${index + 1}로 이동`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
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
              ? randomPlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    className={styles.productCard}
                    onClick={() =>
                      navigate(
                        `${PAGE_PATHS.PLAN_DETAIL.replace(':id', plan.id.toString())}`,
                      )
                    }
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardProvider}>LG U+</span>
                      <span className={styles.cardPrice}>
                        월 {plan.price.toLocaleString()}원
                      </span>
                    </div>
                    <div className={styles.cardName} title={plan.name}>
                      {plan.name}
                    </div>

                    <div className={styles.badgeContainer}>
                      <span className={`${styles.badge} ${styles.badgeData}`}>
                        {plan.dataAmountMb === 0
                          ? '무제한'
                          : `${(plan.dataAmountMb / 1024).toFixed(1)}GB`}
                      </span>
                      <span className={`${styles.badge} ${styles.badgeVoice}`}>
                        {plan.voiceMinutes === -1
                          ? '무제한'
                          : `${plan.voiceMinutes}분`}
                      </span>
                      <span className={`${styles.badge} ${styles.badgeSpeed}`}>
                        속도 {plan.overageSpeedMbps ?? 0}Mbps
                      </span>
                      <span className={`${styles.badge} ${styles.badgeSms}`}>
                        혜택 가치 {plan.smsIncluded}
                      </span>
                    </div>

                    {plan.subscriptionServices &&
                      plan.subscriptionServices.length > 0 && (
                        <div className={styles.ottContainer}>
                          {plan.subscriptionServices.map((service, index) => (
                            <div
                              key={service}
                              className={`${styles.ottCircle} ${index !== 0 ? styles.ottCircleOverlap : ''}`}
                              title={OTT_LABELS[service]}
                            >
                              <img
                                src={OTT_IMAGES[service]}
                                alt={OTT_LABELS[service]}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  borderRadius: '50%',
                                  objectFit: 'cover',
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                  </button>
                ))
              : randomSubscribes.map((subscribe) => (
                  <button
                    key={subscribe.id}
                    type="button"
                    className={styles.productCard}
                    onClick={() =>
                      navigate(
                        `${PAGE_PATHS.SUBSCRIBE_DETAIL.replace(':id', subscribe.id.toString())}`,
                      )
                    }
                  >
                    <div className={styles.cardHeader}>
                      <span className={styles.cardCategory}>
                        {CATEGORY_LABELS[subscribe.category]}
                      </span>
                      <span className={styles.cardPrice}>
                        월 {subscribe.monthlyPrice.toLocaleString()}원
                      </span>
                    </div>
                    <div className={styles.cardName} title={subscribe.name}>
                      {subscribe.name}
                    </div>

                    <div className={styles.descriptionContainer}>
                      <p className={styles.descriptionText}>
                        {subscribe.description}
                      </p>
                    </div>

                    <div className={styles.subscribeContainer}>
                      <div
                        className={styles.subscribeCircle}
                        title={subscribe.name}
                      >
                        {SUBSCRIBE_IMAGES[subscribe.name] ? (
                          <img
                            src={SUBSCRIBE_IMAGES[subscribe.name] || ''}
                            alt={subscribe.name}
                            className={styles.subscribeImage}
                          />
                        ) : (
                          subscribe.name.charAt(0)
                        )}
                      </div>
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
    </Layout>
  );
}
