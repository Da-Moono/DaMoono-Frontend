import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ProposalIcon from '@/pages/Summary/assets/bulb.svg';
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
  const accordionRef = useRef<HTMLDivElement>(null);

  // 아코디언이 열릴 때 자동 스크롤
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
  if (!data.items || data.items.length === 0) return null;

  return (
    <div className={s.container} ref={accordionRef}>
      {/* 헤더: 기존 아코디언 스타일 (노란색 테마) */}
      <button className={s.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.headerSection}>
          <div className={s.iconWrapper}>
            <img src={ProposalIcon} alt="proposal" className={s.icon} />
          </div>
          <div className={s.textWrapper}>
            <p className={s.guideTitle}>제시안</p>
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

      {/* 본문: 탐정 무너와 하이라이트 타이틀, 차라락 리스트 */}
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
              {/* 탐정 무너 해결책 타이틀 영역 */}
              <div className={s.titleGroup}>
                <img src={detectiveMuna} alt="detective" className={s.mascot} />
                <div className={s.textGroup}>
                  <p className={s.subLabel}>AI 탐정의 해결책</p>
                  <h4 className={s.mainTitle}>{data.title}</h4>
                </div>
              </div>

              {/* 해결책 상세 항목 (차라락 효과) */}
              <div className={s.itemBox}>
                {data.items.map((item, index) => (
                  <motion.div
                    key={item}
                    className={s.itemRow}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                  >
                    <span className={s.bullet}>•</span>
                    <p className={s.itemText}>{item}</p>
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
