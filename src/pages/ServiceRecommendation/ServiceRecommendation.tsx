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

// 기본 질문 (네트워크 타입)
const networkQuestion: Question = {
  id: 1,
  question: '5G 네트워크가 필요하신가요?',
  options: ['네, 5G가 필요해요', '아니요, LTE면 충분해요', '잘 모르겠어요'],
};

// LTE 선택 시 질문
const lteQuestions: Question[] = [
  {
    id: 2,
    question: '요금제의 가격은 얼마정도를 원하나요?',
    options: [
      '3~4만원대 (저렴하게)',
      '4~5만원대 (적당한 가격)',
      '5~6만원대 (조금 비싸도 괜찮음)',
    ],
  },
  {
    id: 3,
    question: '통화를 자주 하시는 편인가요?',
    options: [
      '매일 1시간 이상 통화한다',
      '자주 하는 편이다',
      '보통이다',
      '거의 안한다',
    ],
  },
  {
    id: 4,
    question: 'OTT 서비스가 포함된 요금제를 원하시나요?',
    options: ['있으면 좋겠다', '상관없다', '없으면 좋겠다'],
  },
];

// 5G 선택 시 질문
const fiveGQuestions: Question[] = [
  {
    id: 2,
    question: '요금제의 가격은 얼마정도를 원하나요?',
    options: [
      '5~6만원대 (저렴하게)',
      '7~9만원대 (적당한 가격)',
      '10~12만원대 (조금 비싸도 괜찮음)',
      '13만원 이상 (프리미엄)',
    ],
  },
  {
    id: 3,
    question: '통화를 자주 하시는 편인가요?',
    options: [
      '매일 1시간 이상 통화한다',
      '자주 하는 편이다',
      '보통이다',
      '거의 안한다',
    ],
  },
  {
    id: 4,
    question: 'OTT 서비스가 포함된 요금제를 원하시나요?',
    options: ['있으면 좋겠다', '상관없다', '없으면 좋겠다'],
  },
];

// 잘 모르겠어요 선택 시 질문 (전체 범위)
const generalQuestions: Question[] = [
  {
    id: 2,
    question: '요금제의 가격은 얼마정도를 원하나요?',
    options: [
      '3~5만원대 (저렴하게)',
      '5~7만원대 (적당한 가격)',
      '7~10만원대 (조금 비싸도 괜찮음)',
      '10만원 이상 (프리미엄)',
    ],
  },
  {
    id: 3,
    question: '통화를 자주 하시는 편인가요?',
    options: [
      '매일 1시간 이상 통화한다',
      '자주 하는 편이다',
      '보통이다',
      '거의 안한다',
    ],
  },
  {
    id: 4,
    question: 'OTT 서비스가 포함된 요금제를 원하시나요?',
    options: ['있으면 좋겠다', '상관없다', '없으면 좋겠다'],
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
  const [questionSet, setQuestionSet] = useState<Question[]>([networkQuestion]);

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

    // 첫 번째 질문(네트워크 타입)에서 답변에 따라 질문 세트 결정
    if (currentQuestion === 0) {
      let newQuestionSet: Question[];
      if (selectedOption === 0) {
        // 5G 선택
        newQuestionSet = [networkQuestion, ...fiveGQuestions];
      } else if (selectedOption === 1) {
        // LTE 선택
        newQuestionSet = [networkQuestion, ...lteQuestions];
      } else {
        // 잘 모르겠어요
        newQuestionSet = [networkQuestion, ...generalQuestions];
      }
      setQuestionSet(newQuestionSet);
      // 첫 번째 질문 후에는 항상 다음 질문으로
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(answers[currentQuestion + 1] ?? null);
    } else {
      // 다음 질문으로 이동
      if (currentQuestion < questionSet.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(answers[currentQuestion + 1] ?? null);
      } else {
        // 마지막 질문 완료 시 로딩 단계로 전환
        setStage('loading');
      }
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
      const networkAnswer = answers[0]; // 5G 필요성 (0: 5G 필요, 1: LTE 충분, 2: 잘 모름)
      const priceAnswer = answers[1]; // 가격 선호도
      const voiceAnswer = answers[2]; // 통화 빈도
      const ottAnswer = answers[3]; // OTT 선호도

      // 요금제 추천
      let filteredPlans = [...MOCK_PLANS];

      // 1. 네트워크 타입 필터링
      if (networkAnswer === 0) {
        // 5G 필요 - 5G만
        filteredPlans = filteredPlans.filter((p) => p.networkType === '5G');

        // 5G 가격 필터링
        if (priceAnswer === 0) {
          // 5~6만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 50000 && p.price <= 69999,
          );
        } else if (priceAnswer === 1) {
          // 7~9만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 70000 && p.price <= 99999,
          );
        } else if (priceAnswer === 2) {
          // 10~12만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 100000 && p.price <= 129999,
          );
        } else if (priceAnswer === 3) {
          // 13만원 이상
          filteredPlans = filteredPlans.filter((p) => p.price >= 130000);
        }
      } else if (networkAnswer === 1) {
        // LTE 충분 - LTE만
        filteredPlans = filteredPlans.filter((p) => p.networkType === 'LTE');

        // LTE 가격 필터링
        if (priceAnswer === 0) {
          // 3~4만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 30000 && p.price <= 49999,
          );
        } else if (priceAnswer === 1) {
          // 4~5만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 40000 && p.price <= 59999,
          );
        } else if (priceAnswer === 2) {
          // 5~6만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 50000 && p.price <= 69999,
          );
        }
      } else {
        // 잘 모르겠어요 - 필터링 안함

        // 전체 가격 필터링
        if (priceAnswer === 0) {
          // 3~5만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 30000 && p.price <= 59999,
          );
        } else if (priceAnswer === 1) {
          // 5~7만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 50000 && p.price <= 79999,
          );
        } else if (priceAnswer === 2) {
          // 7~10만원대
          filteredPlans = filteredPlans.filter(
            (p) => p.price >= 70000 && p.price <= 109999,
          );
        } else if (priceAnswer === 3) {
          // 10만원 이상
          filteredPlans = filteredPlans.filter((p) => p.price >= 100000);
        }
      }

      // 통화 빈도에 따른 정렬
      if (voiceAnswer <= 1) {
        // 통화 많이 함 - 무제한 통화 우선
        filteredPlans.sort((a, b) => {
          const aUnlimited = a.voiceMinutes === -1 ? 1 : 0;
          const bUnlimited = b.voiceMinutes === -1 ? 1 : 0;
          return bUnlimited - aUnlimited;
        });
      }

      // OTT 선호도에 따른 필터링 및 정렬
      if (ottAnswer === 0) {
        // 있으면 좋겠다 - OTT 있는 것만 + OTT 많은 순
        filteredPlans = filteredPlans.filter(
          (p) => p.subscriptionServices.length > 0,
        );
        filteredPlans.sort((a, b) => {
          const aOttCount = a.subscriptionServices.length;
          const bOttCount = b.subscriptionServices.length;
          if (aOttCount !== bOttCount) {
            return bOttCount - aOttCount;
          }
          return a.price - b.price;
        });
      } else if (ottAnswer === 1) {
        // 상관없다 - 가격순
        filteredPlans.sort((a, b) => a.price - b.price);
      } else if (ottAnswer === 2) {
        // 없으면 좋겠다 - OTT 없는 것만 + 가격순
        filteredPlans = filteredPlans.filter(
          (p) => p.subscriptionServices.length === 0,
        );
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
          <button
            type="button"
            className={styles.backButton}
            onClick={() => navigate(PAGE_PATHS.HOME)}
          >
            ‹ 홈으로
          </button>

          <h1 className={styles.resultTitle}>
            <span className={styles.highlight}>당신을 위한</span>
            <br />
            맞춤 추천 서비스
          </h1>

          {/* 요금제 추천 */}
          {recommendedPlans.length > 0 ? (
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
          ) : (
            <div className={styles.emptyResult}>
              <p>조건에 맞는 요금제를 찾지 못했습니다.</p>
              <p>다른 조건으로 다시 시도해보세요.</p>
            </div>
          )}
        </div>
      </Layout>
    );
  }

  // 질문 화면
  const question = questionSet[currentQuestion];

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
          {currentQuestion === questionSet.length - 1 ? '완료' : '다음'}
        </button>
      </div>
    </Layout>
  );
}
