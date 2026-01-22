import { useEffect, useState } from 'react';
import mascot from '@/assets/images/moono-idea-removebg.png';
import * as styles from './style/Guide.css';

interface GuideStep {
  target: string;
  message: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface GuideProps {
  steps: GuideStep[];
  onComplete: () => void;
}

export default function Guide({ steps, onComplete }: GuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const updateTargetRect = () => {
      const element = document.querySelector(steps[currentStep].target);
      if (element) {
        const rect = element.getBoundingClientRect();
        setTargetRect(rect);

        // 요소가 화면에 보이도록 스크롤
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'center',
        });
      }
    };

    updateTargetRect();
    window.addEventListener('resize', updateTargetRect);
    window.addEventListener('scroll', updateTargetRect);

    return () => {
      window.removeEventListener('resize', updateTargetRect);
      window.removeEventListener('scroll', updateTargetRect);
    };
  }, [currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  if (!targetRect) return null;

  const step = steps[currentStep];

  // 말풍선 위치 계산 (화면 상단에 가까우면 아래에, 아니면 위에)
  const shouldShowBelow = targetRect.top < 200;
  const tooltipTop = shouldShowBelow
    ? targetRect.bottom + 20
    : targetRect.top - 140;

  return (
    <>
      {/* 블러 배경 (구멍 뚫린 오버레이) */}
      <button
        type="button"
        className={styles.overlay}
        onClick={handleSkip}
        aria-label="가이드 건너뛰기"
      >
        <div
          style={{
            position: 'absolute',
            top: `${targetRect.top}px`,
            left: `${targetRect.left}px`,
            width: `${targetRect.width}px`,
            height: `${targetRect.height}px`,
            backgroundColor: 'transparent',
            boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.7)',
            borderRadius: '12px',
          }}
        />
      </button>

      {/* 하이라이트 테두리 */}
      <div
        className={styles.highlight}
        style={{
          top: `${targetRect.top}px`,
          left: `${targetRect.left}px`,
          width: `${targetRect.width}px`,
          height: `${targetRect.height}px`,
        }}
      />

      {/* 말풍선과 마스코트 */}
      <div
        className={styles.tooltip}
        style={{
          top: `${tooltipTop}px`,
          left: `${targetRect.left}px`,
        }}
      >
        <img src={mascot} alt="무너" className={styles.mascot} />
        <div className={styles.bubble}>
          <p className={styles.message}>{step.message}</p>
          <div className={styles.buttons}>
            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={handleSkip}
                className={styles.skipButton}
              >
                건너뛰기
              </button>
            )}
            <button
              type="button"
              onClick={handleNext}
              className={styles.nextButton}
            >
              {currentStep < steps.length - 1 ? '다음' : '시작하기'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
