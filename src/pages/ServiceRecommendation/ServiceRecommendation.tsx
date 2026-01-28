import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ideaMascot from '@/assets/images/moono-idea-removebg.png';
import mascot from '@/assets/images/search-moono.png';
import thinkingMascot from '@/assets/images/thinking-moono.png';
import Header from '@/components/Header';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS } from '@/pages/Plan/constants';
import type { Plan } from '@/pages/Plan/types';
import { CATEGORY_LABELS, MOCK_SUBSCRIBES } from '@/pages/Subscribe/constants';
import type { Subscribe } from '@/pages/Subscribe/types';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/ServiceRecommendation.css';

// 질문 데이터 타입
interface Question {
  id: number;
  question: string;
  options: string[];
}

// 질문 데이터
const questions: Question[] = [
  {
    id: 1,
    question: '통화를 자주 하시는 편인가요?',
    options: [
      '매일 1시간 이상 통화한다',
      '자주 하는 편이다',
      '보통이다',
      '거의 안하는 편이다',
      '문자나 메신저만 사용한다',
    ],
  },
  {
    id: 2,
    question: '한 달 데이터 사용량은 얼마나 되나요?',
    options: [
      '100GB 이상 (영상 많이 봄)',
      '50~100GB (적당히 사용)',
      '30~50GB (보통)',
      '10~30GB (적게 사용)',
      '잘 모르겠다',
    ],
  },
  {
    id: 3,
    question: '5G 네트워크가 필요하신가요?',
    options: [
      '꼭 필요하다 (빠른 속도 중요)',
      '있으면 좋다',
      '잘 모르겠다',
      '필요 없다 (LTE면 충분)',
      '가격이 저렴하면 상관없다',
    ],
  },
  {
    id: 4,
    question: '요금제의 가격은 얼마정도를 원하나요?',
    options: [
      '3만원대 (최대한 저렴하게)',
      '4~5만원대 (적당한 가격)',
      '6~8만원대 (조금 비싸도 괜찮음)',
      '8만원 이상 (프리미엄 원함)',
      '가격보다 혜택이 중요',
    ],
  },
  {
    id: 5,
    question: '평소에 OTT(넷플릭스, 디즈니+ 등)를 즐겨 보시나요?',
    options: [
      '매일 본다 (2시간 이상)',
      '자주 보는 편이다 (주 3~4회)',
      '가끔 본다 (주 1~2회)',
      '거의 안본다',
      '전혀 보지 않는다',
    ],
  },
  {
    id: 6,
    question: '어떤 OTT 서비스에 관심이 있으신가요?',
    options: [
      '넷플릭스, 디즈니+ (해외 콘텐츠)',
      '티빙, 웨이브 (국내 콘텐츠)',
      '유튜브 프리미엄 (광고 제거)',
      '여러 개 다 보고 싶다',
      '관심 없다',
    ],
  },
  {
    id: 7,
    question: '음악 스트리밍 서비스를 사용하시나요?',
    options: [
      '매일 듣는다',
      '자주 듣는 편이다',
      '가끔 듣는다',
      '거의 안듣는다',
      '전혀 사용 안함',
    ],
  },
  {
    id: 8,
    question: '이미 사용중인 구독 서비스가 있나요? (중복 선택 가능)',
    options: [
      '넷플릭스',
      '유튜브 프리미엄',
      '디즈니+',
      '티빙/웨이브',
      '사용중인 서비스가 없다',
    ],
  },
];

type RecommendationStage =
  | 'start'
  | 'question'
  | 'loading'
  | 'complete'
  | 'result';

export default function ServiceRecommendation() {
  const navigate = useNavigate();
  const [stage, setStage] = useState<RecommendationStage>('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [multipleSelections, setMultipleSelections] = useState<number[]>([]); // 다중 선택용
  const [recommendedPlans, setRecommendedPlans] = useState<Plan[]>([]);
  const [recommendedSubscribes, setRecommendedSubscribes] = useState<
    Subscribe[]
  >([]);

  const handleStartRecommendation = () => {
    setStage('question');
  };

  const handleSelectOption = (optionIndex: number) => {
    // 마지막 질문(8번)은 다중 선택 가능
    if (currentQuestion === questions.length - 1) {
      // "사용중인 서비스가 없다" 선택 시 다른 선택 초기화
      if (optionIndex === 4) {
        setMultipleSelections([4]);
      } else {
        // 다른 옵션 선택 시 "없다" 제거하고 토글
        const filtered = multipleSelections.filter((i) => i !== 4);
        if (filtered.includes(optionIndex)) {
          setMultipleSelections(filtered.filter((i) => i !== optionIndex));
        } else {
          setMultipleSelections([...filtered, optionIndex]);
        }
      }
    } else {
      setSelectedOption(optionIndex);
    }
  };

  const handleNext = () => {
    // 마지막 질문은 다중 선택이므로 체크
    if (currentQuestion === questions.length - 1) {
      if (multipleSelections.length === 0) return;
    } else {
      if (selectedOption === null) return;
    }

    const newAnswers = [...answers];

    // 마지막 질문은 배열로 저장
    if (currentQuestion === questions.length - 1) {
      newAnswers[currentQuestion] = multipleSelections.length > 0 ? -1 : 0; // 플래그로 저장
    } else {
      newAnswers[currentQuestion] = selectedOption!;
    }
    setAnswers(newAnswers);

    // 다음 질문으로 이동
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] ?? null);
    } else {
      // 마지막 질문 완료 시 로딩 단계로 전환
      setStage('loading');
    }
  };

  // 로딩 단계에서 3초 후 완료 단계로 전환
  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => {
        setStage('complete');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  // 결과 단계로 전환 시 추천 로직 실행
  useEffect(() => {
    if (stage === 'result') {
      // 답변 기반 추천 로직
      const voiceAnswer = answers[0]; // 통화 빈도
      const dataAnswer = answers[1]; // 데이터 사용량
      const networkAnswer = answers[2]; // 5G 필요성
      const priceAnswer = answers[3]; // 가격 선호도
      const ottAnswer = answers[4]; // OTT 시청 빈도
      const ottTypeAnswer = answers[5]; // OTT 종류 선호
      const musicAnswer = answers[6]; // 음악 스트리밍
      // 마지막 질문은 multipleSelections 사용

      // 요금제 추천
      let filteredPlans = [...MOCK_PLANS];

      // 1. 가격 필터링
      if (priceAnswer === 0) {
        // 3만원대
        filteredPlans = filteredPlans.filter(
          (p) => p.price >= 30000 && p.price <= 39999,
        );
      } else if (priceAnswer === 1) {
        // 4~5만원대
        filteredPlans = filteredPlans.filter(
          (p) => p.price >= 40000 && p.price <= 59999,
        );
      } else if (priceAnswer === 2) {
        // 6~8만원대
        filteredPlans = filteredPlans.filter(
          (p) => p.price >= 60000 && p.price <= 89999,
        );
      } else if (priceAnswer === 3) {
        // 8만원 이상
        filteredPlans = filteredPlans.filter((p) => p.price >= 80000);
      }

      // 2. 네트워크 타입 필터링
      if (networkAnswer === 0) {
        // 5G 꼭 필요
        filteredPlans = filteredPlans.filter((p) => p.networkType === '5G');
      } else if (networkAnswer === 3 || networkAnswer === 4) {
        // LTE면 충분 또는 가격 중요
        filteredPlans = filteredPlans.filter((p) => p.networkType === 'LTE');
      }

      // 3. 데이터 사용량 필터링
      if (dataAnswer === 0) {
        // 100GB 이상 - 무제한 우선
        filteredPlans = filteredPlans.filter(
          (p) => p.dataAmountMb === 0 || p.dataAmountMb >= 100000,
        );
      } else if (dataAnswer === 1) {
        // 50~100GB
        filteredPlans = filteredPlans.filter(
          (p) => p.dataAmountMb === 0 || p.dataAmountMb >= 50000,
        );
      } else if (dataAnswer === 2) {
        // 30~50GB
        filteredPlans = filteredPlans.filter(
          (p) => p.dataAmountMb === 0 || p.dataAmountMb >= 30000,
        );
      }

      // 4. 통화 빈도 고려
      if (voiceAnswer <= 1) {
        // 통화 많이 함 - 무제한 통화 우선
        filteredPlans.sort((a, b) => {
          const aUnlimited = a.voiceMinutes === -1 ? 1 : 0;
          const bUnlimited = b.voiceMinutes === -1 ? 1 : 0;
          return bUnlimited - aUnlimited;
        });
      }

      // 5. OTT 선호도에 따른 정렬
      if (ottAnswer <= 1) {
        // OTT 자주 봄
        filteredPlans.sort((a, b) => {
          const aOttCount = a.subscriptionServices.length;
          const bOttCount = b.subscriptionServices.length;
          if (aOttCount !== bOttCount) {
            return bOttCount - aOttCount;
          }
          return a.price - b.price;
        });
      } else {
        // OTT 안봄 - 가격순
        filteredPlans.sort((a, b) => a.price - b.price);
      }

      // 조건에 맞는 모든 요금제 표시 (최대 10개)
      setRecommendedPlans(filteredPlans.slice(0, 10));

      // 구독 서비스 추천
      let filteredSubscribes = [...MOCK_SUBSCRIBES];

      // 1. 이미 사용중인 구독 서비스 제외 (다중 선택)
      if (!multipleSelections.includes(4)) {
        // "사용중인 서비스가 없다"가 선택되지 않은 경우
        if (multipleSelections.includes(0)) {
          // 넷플릭스 사용중
          filteredSubscribes = filteredSubscribes.filter(
            (s) => !s.name.includes('넷플릭스'),
          );
        }
        if (multipleSelections.includes(1)) {
          // 유튜브 프리미엄 사용중
          filteredSubscribes = filteredSubscribes.filter(
            (s) => !s.name.includes('유튜브'),
          );
        }
        if (multipleSelections.includes(2)) {
          // 디즈니+ 사용중
          filteredSubscribes = filteredSubscribes.filter(
            (s) => !s.name.includes('디즈니'),
          );
        }
        if (multipleSelections.includes(3)) {
          // 티빙/웨이브 사용중
          filteredSubscribes = filteredSubscribes.filter(
            (s) => !s.name.includes('티빙') && !s.name.includes('웨이브'),
          );
        }
      }

      // 2. OTT 시청 빈도에 따른 필터링
      if (ottAnswer <= 1) {
        // OTT 자주 봄
        if (ottTypeAnswer === 0) {
          // 해외 콘텐츠 선호 - 넷플릭스, 디즈니+ 등
          filteredSubscribes = filteredSubscribes.filter(
            (s) =>
              s.category === 'OTT' &&
              (s.name.includes('넷플릭스') ||
                s.name.includes('디즈니') ||
                s.name.includes('유튜브')),
          );
        } else if (ottTypeAnswer === 1) {
          // 국내 콘텐츠 선호 - 티빙, 웨이브 등
          filteredSubscribes = filteredSubscribes.filter(
            (s) =>
              s.category === 'OTT' &&
              (s.name.includes('티빙') ||
                s.name.includes('웨이브') ||
                s.name.includes('쿠팡')),
          );
        } else if (ottTypeAnswer === 2) {
          // 유튜브 프리미엄 선호
          filteredSubscribes = filteredSubscribes.filter(
            (s) => s.category === 'OTT' && s.name.includes('유튜브'),
          );
        } else if (ottTypeAnswer === 3) {
          // 여러 개 다 보고 싶음
          filteredSubscribes = filteredSubscribes.filter(
            (s) => s.category === 'OTT',
          );
        }
      } else if (ottAnswer >= 3) {
        // OTT 거의 안봄 - OTT 제외
        filteredSubscribes = filteredSubscribes.filter(
          (s) => s.category !== 'OTT',
        );
      }

      // 3. 음악 스트리밍 선호도
      if (musicAnswer <= 1) {
        // 음악 자주 들음 - 음악 카테고리 추가
        const musicServices = MOCK_SUBSCRIBES.filter(
          (s) => s.category === 'MUSIC',
        );
        filteredSubscribes = [...filteredSubscribes, ...musicServices];
      }

      // 중복 제거
      filteredSubscribes = Array.from(
        new Map(filteredSubscribes.map((s) => [s.id, s])).values(),
      );

      // 가격순 정렬
      filteredSubscribes.sort((a, b) => a.monthlyPrice - b.monthlyPrice);

      // 조건에 맞는 모든 구독 서비스 표시 (최대 8개)
      setRecommendedSubscribes(filteredSubscribes.slice(0, 8));
    }
  }, [stage, answers, multipleSelections]);

  const handleShowResult = () => {
    setStage('result');
  };

  const handlePlanClick = (planId: number) => {
    navigate(PAGE_PATHS.PLAN_DETAIL.replace(':id', planId.toString()));
  };

  const handleSubscribeClick = (subscribeId: number) => {
    navigate(`/subscribe/${subscribeId}`);
  };

  // 시작 화면
  if (stage === 'start') {
    return (
      <Layout>
        <Header />

        <div className={styles.container}>
          <img src={mascot} alt="무너" className={styles.mascot} />

          <h1 className={styles.title}>
            나에게 <span className={styles.highlight}>어울리는 상품</span>은
            무엇일까?
          </h1>

          <p className={styles.description}>
            무너의 질문에 답변하여
            <br />
            맞춤형 서비스를 추천받아보세요!
          </p>

          <button
            type="button"
            className={styles.startButton}
            onClick={handleStartRecommendation}
          >
            맞춤 추천 시작하기
          </button>
        </div>
      </Layout>
    );
  }

  // 로딩 화면
  if (stage === 'loading') {
    return (
      <Layout>
        <Header />

        <div className={styles.container}>
          <img
            src={thinkingMascot}
            alt="분석 중"
            className={styles.loadingMascot}
          />

          <h1 className={styles.loadingTitle}>
            당신에게 맞는 서비스를
            <br />
            찾고 있어요...
          </h1>

          <div className={styles.loadingBarContainer}>
            <div className={styles.loadingBar} />
          </div>
        </div>
      </Layout>
    );
  }

  // 분석 완료 화면
  if (stage === 'complete') {
    return (
      <Layout>
        <Header />

        <div className={styles.container}>
          <img
            src={ideaMascot}
            alt="분석 완료"
            className={styles.completeMascot}
          />

          <h1 className={styles.completeTitle}>
            추천 서비스를 찾았어요!
            <br />
            <span className={styles.highlight}>맞춤 추천</span>을 확인해보세요
          </h1>

          <button
            type="button"
            className={styles.startButton}
            onClick={handleShowResult}
          >
            결과 보기
          </button>
        </div>
      </Layout>
    );
  }

  // 결과 화면
  if (stage === 'result') {
    return (
      <Layout>
        <Header />

        <div className={styles.resultContainer}>
          <h1 className={styles.resultTitle}>
            <span className={styles.highlight}>당신을 위한</span>
            <br />
            맞춤 추천 서비스
          </h1>

          {/* 요금제 추천 */}
          {recommendedPlans.length > 0 && (
            <div className={styles.resultSection}>
              <h2 className={styles.resultSectionTitle}>추천 요금제</h2>
              <div className={styles.resultCardList}>
                {recommendedPlans.map((plan) => (
                  <button
                    key={plan.id}
                    type="button"
                    onClick={() => handlePlanClick(plan.id)}
                    className={styles.resultCard}
                  >
                    <div className={styles.resultCardHeader}>
                      <span className={styles.resultCardProvider}>LG U+</span>
                      <span className={styles.resultCardPrice}>
                        월 {plan.price.toLocaleString()}원
                      </span>
                    </div>
                    <div className={styles.resultCardName} title={plan.name}>
                      {plan.name}
                    </div>

                    <div className={styles.resultBadgeContainer}>
                      <span
                        className={`${styles.resultBadge} ${styles.resultBadgeData}`}
                      >
                        {plan.dataAmountMb === 0
                          ? '무제한'
                          : `${(plan.dataAmountMb / 1024).toFixed(1)}GB`}
                      </span>
                      <span
                        className={`${styles.resultBadge} ${styles.resultBadgeVoice}`}
                      >
                        {plan.voiceMinutes === -1
                          ? '무제한'
                          : `${plan.voiceMinutes}분`}
                      </span>
                      <span
                        className={`${styles.resultBadge} ${styles.resultBadgeSpeed}`}
                      >
                        속도 {plan.overageSpeedMbps ?? 0}Mbps
                      </span>
                    </div>

                    {plan.subscriptionServices.length > 0 && (
                      <div className={styles.resultOttContainer}>
                        {plan.subscriptionServices.map((service, index) => (
                          <div
                            key={service}
                            className={`${styles.resultOttCircle} ${index !== 0 ? styles.resultOttCircleOverlap : ''}`}
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
                ))}
              </div>
            </div>
          )}

          {/* 구독 서비스 추천 */}
          {recommendedSubscribes.length > 0 && (
            <div className={styles.resultSection}>
              <h2 className={styles.resultSectionTitle}>추천 구독 서비스</h2>
              <div className={styles.resultCardList}>
                {recommendedSubscribes.map((subscribe) => {
                  return (
                    <button
                      key={subscribe.id}
                      type="button"
                      onClick={() => handleSubscribeClick(subscribe.id)}
                      className={styles.resultCard}
                    >
                      <div className={styles.resultCardHeader}>
                        <span className={styles.resultCardCategory}>
                          {CATEGORY_LABELS[subscribe.category]}
                        </span>
                        <span className={styles.resultCardPrice}>
                          월 {subscribe.monthlyPrice.toLocaleString()}원
                        </span>
                      </div>
                      <div
                        className={styles.resultCardName}
                        title={subscribe.name}
                      >
                        {subscribe.name}
                      </div>

                      <div className={styles.resultBadgeContainer}>
                        {subscribe.badges.length > 0 ? (
                          subscribe.badges.map((badge) => (
                            <span
                              key={badge}
                              className={`${styles.resultBadge} ${styles.resultBadgeHighlight}`}
                            >
                              {badge}
                            </span>
                          ))
                        ) : (
                          <span
                            className={`${styles.resultBadge} ${styles.resultBadgeCategory}`}
                          >
                            {CATEGORY_LABELS[subscribe.category]}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // 질문 화면
  const question = questions[currentQuestion];

  return (
    <Layout>
      <Header />

      <div className={styles.questionContainer}>
        <div className={styles.questionNumber}>Q{question.id}</div>

        <img src={mascot} alt="무너" className={styles.questionMascot} />

        <h2 className={styles.questionText}>{question.question}</h2>

        <div className={styles.optionsContainer}>
          {question.options.map((option, index) => {
            // 마지막 질문은 다중 선택
            const isLastQuestion = currentQuestion === questions.length - 1;
            const isSelected = isLastQuestion
              ? multipleSelections.includes(index)
              : selectedOption === index;

            return (
              <button
                key={option}
                type="button"
                className={
                  isSelected ? styles.optionButtonPrimary : styles.optionButton
                }
                onClick={() => handleSelectOption(index)}
              >
                {option}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          className={styles.nextButton}
          onClick={handleNext}
          disabled={
            currentQuestion === questions.length - 1
              ? multipleSelections.length === 0
              : selectedOption === null
          }
        >
          {currentQuestion === questions.length - 1 ? '완료' : '다음'}
        </button>
      </div>
    </Layout>
  );
}
