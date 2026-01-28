import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ChevronIcon from '@/pages/Summary/assets/chevron-down.svg';
import detectiveMuna from '@/pages/Summary/assets/detective.png';
import * as s from '@/pages/Summary/style/ProposalHighlight.css';

interface ProposalAccordionProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function ProposalAccordion({ data }: ProposalAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const accordionRef = useRef<HTMLDivElement>(null); // 스크롤 타겟 지정

  // 아코디언이 열릴 때 자동 스크롤 실행
  useEffect(() => {
    if (isOpen && accordionRef.current) {
      setTimeout(() => {
        accordionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start', // 화면의 가장 위쪽으로 맞춤
        });
      }, 300); // 아코디언 애니메이션 속도에 맞춰 지연 실행
    }
  }, [isOpen]);

  // 데이터가 없을 경우 렌더링하지 않음
  if (!data.title || !data.items || data.items.length === 0) return null;

  return (
    <div className={s.container} ref={accordionRef}>
      {/* 헤더 영역: 탐정 무너와 메인 타이틀 */}
      <button
        className={s.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={s.headerLeft}>
          <img src={detectiveMuna} alt="detective muna" className={s.mascot} />
          <div className={s.titleGroup}>
            <p className={s.subTitle}>해결책</p>
            <h4 className={s.mainTitle}>{data.title}</h4>
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

      {/* 아코디언 내용 영역 */}
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
              <div className={s.itemBox}>
                {data.items.map((item) => (
                  <div key={item} className={s.itemRow}>
                    <span className={s.bullet}>•</span>
                    <p className={s.itemText}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
