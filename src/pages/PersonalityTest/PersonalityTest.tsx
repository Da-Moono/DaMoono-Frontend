import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mascot from '@/assets/images/search-moono.png';
import Header from '@/components/Header';
import { PAGE_PATHS } from '@/shared/config/paths';
import Layout from '../layout/Layout';
import * as styles from './style/PersonalityTest.css';

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
      '자주 한다',
      '그런 편이다',
      '보통이다',
      '안하는 편이다',
      '잘 하지 않는다',
    ],
  },
  {
    id: 2,
    question: '요금제의 가격은 얼마정도를 원하나요?',
    options: [
      '저렴했으면 좋겠다(3~4만원대)',
      '적당한 요금제를 원한다(~5만원)',
      '조금 비싸도 상관없다(6~8만원)',
      '비싸도 괜찮다(8만원 이상)',
      '전혀 상관없다',
    ],
  },
  {
    id: 3,
    question: '평소에 OTT(넷플릭스, 디즈니 등)를 즐겨 보시나요?',
    options: [
      '매우 그렇다',
      '자주 보는 편이다',
      '보통이다',
      '자주 안본다',
      '보지 않는다',
    ],
  },
];

export default function PersonalityTest() {
  const navigate = useNavigate();
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleStartTest = () => {
    setIsStarted(true);
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
      // 테스트 완료 후 홈으로 이동
      console.log('테스트 완료', newAnswers);
      navigate(PAGE_PATHS.HOME);
    }
  };

  // 시작 화면
  if (!isStarted) {
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
            onClick={handleStartTest}
          >
            성향 테스트 하러가기
          </button>
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
          {question.options.map((option, index) => (
            <button
              key={option}
              type="button"
              className={
                selectedOption === index
                  ? styles.optionButtonPrimary
                  : styles.optionButton
              }
              onClick={() => handleSelectOption(index)}
            >
              {option}
            </button>
          ))}
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
