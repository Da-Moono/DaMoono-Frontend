import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ideaMascot from '@/assets/images/moono-idea-removebg.png';
import mascot from '@/assets/images/search-moono.png';
import thinkingMascot from '@/assets/images/thinking-moono.png';
import Header from '@/components/Header';
import { MOCK_PLANS, OTT_IMAGES, OTT_LABELS } from '@/pages/Plan/constants';
import type { Plan } from '@/pages/Plan/types';
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
  const [recommendedPlans, setRecommendedPlans] = useState<Plan[]>([]);

  const handleStartRecommendation = () => {
    setStage('question');
  };

  const handleSelectOption = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedOption;
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
    }
  }, [stage, answers]);

  const handleShowResult = () => {
    setStage('result');
  };

  const handlePlanClick = (planId: number) => {
    navigate(PAGE_PATHS.PLAN_DETAIL.replace(':id', planId.toString()));
  };

  // 시작 화면
  if (stage === 'start') {
    return (
      <Layout>
        <Header />

        <div className={styles.container}>
          <img src={mascot} alt="무너" className={styles.mascot} />

          <h1 className={styles.title}>
            나에게 <span className={styles.highlight}>어울리는 요금제</span>는
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
            질문에 답하고 서비스 추천받기
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
            찾는 중입니다...
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
            const isSelected = selectedOption === index;

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
          disabled={selectedOption === null}
        >
          {currentQuestion === questions.length - 1 ? '완료' : '다음'}
        </button>
      </div>
    </Layout>
  );
}
