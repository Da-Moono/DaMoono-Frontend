import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ChevronIcon from '@/pages/Summary/assets/chevron-down.svg';
import TipIcon from '@/pages/Summary/assets/present.svg';
import * as s from '@/pages/Summary/style/CompactTipBox.css';

interface TipAccordionProps {
  data: {
    title: string;
    items: string[];
  };
}

export default function TipAccordion({ data }: TipAccordionProps) {
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
      {/* 기존 아코디언 스타일의 헤더 */}
      <button className={s.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.headerSection}>
          <div className={s.iconWrapper}>
            <img src={TipIcon} alt="tip" className={s.icon} />
          </div>
          <div className={s.textWrapper}>
            <p className={s.guideTitle}>{data.title}</p>
            <p className={s.description}>
              <span className={s.highlight}>AI</span>가 자동으로{' '}
              <span className={s.highlight}>매칭</span>했어요
            </p>
          </div>
        </div>
        <motion.img
          src={ChevronIcon}
          className={s.chevron}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>

      {/* 펼쳐졌을 때 차라락 애니메이션 */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={s.contentWrapper}
          >
            <div className={s.tipList}>
              {data.items.map((tip, index) => (
                <motion.div
                  key={tip}
                  className={s.tipItem}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className={s.bullet}>•</span>
                  <p className={s.tipText}>{tip}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
