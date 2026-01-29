import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ChevronIcon from '@/pages/Summary/assets/chevron-down.svg';
import GuideIcon from '@/pages/Summary/assets/guide.svg';
import holeMan from '@/pages/Summary/assets/holeman.png';
import * as s from '@/pages/Summary/style/GuideChecklist.css';

interface GuideAccordionProps {
  data: {
    title: string;
    steps: string[];
  };
}

export default function GuideAccordion({ data }: GuideAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null);

  // 아코디언 열릴 때 자동 스크롤
  useEffect(() => {
    if (isOpen && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 300);
    }
  }, [isOpen]);

  // 데이터가 없으면 렌더링 안 함
  if (!data.steps || data.steps.length === 0) return null;

  return (
    <div className={s.container} ref={accordionRef}>
      {/* 헤더: 기존 아코디언 스타일 (제목 고정) */}
      <button className={s.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.headerSection}>
          <div className={s.iconWrapper}>
            <img src={GuideIcon} alt="guide" className={s.icon} />
          </div>
          <div className={s.textWrapper}>
            <p className={s.guideTitle}>이용 가이드</p>
            <p className={s.description}>
              <span className={s.highlight}>AI</span>가 자동으로{' '}
              <span className={s.highlight}>매칭</span>했어요
            </p>
          </div>
        </div>
        <motion.img
          src={ChevronIcon}
          alt="toggle"
          className={s.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* 본문: data.title이 이 안으로 들어감 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={s.contentWrapper}
          >
            <div className={s.innerContent}>
              {/* 본문 내부 타이틀 */}
              <div className={s.titleWrapper}>
                <img src={holeMan} alt="mascot" className={s.mascotImg} />
                <span className={s.contentTitle}>{data.title}</span>
              </div>

              {/* 차라락 리스트 */}
              <div className={s.listWrapper}>
                {data.steps.map((text, index) => (
                  <motion.div
                    key={text}
                    className={s.checkItem}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <div className={s.checkCircle}>✓</div>
                    <p className={s.stepText}>{text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
