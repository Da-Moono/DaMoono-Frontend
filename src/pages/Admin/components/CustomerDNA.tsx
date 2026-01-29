import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import * as s from '@/pages/Admin/style/CustomerDNA.css';

interface DNATag {
  tag: string;
  reason: string;
}

interface CustomerDNAProps {
  dnaList: DNATag[];
  title?: string;
}

export default function CustomerDNA({ dnaList, title }: CustomerDNAProps) {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);

  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>

      <div className={s.tagWrapper}>
        {dnaList.map((item, index) => (
          <button
            key={item.tag}
            className={s.tagItemContainer}
            // 마우스/키보드 이벤트
            onMouseEnter={() => setActiveTagIndex(index)}
            onMouseLeave={() => setActiveTagIndex(null)}
            onFocus={() => setActiveTagIndex(index)}
            onBlur={() => setActiveTagIndex(null)}
            type="button" // 폼 제출 방지
          >
            <motion.span className={s.dnaTag} whileHover={{ scale: 1.05 }}>
              #{item.tag}
            </motion.span>

            <AnimatePresence>
              {activeTagIndex === index && (
                <motion.div
                  className={s.tooltip}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 10 }}
                  exit={{ opacity: 0, x: -10 }}
                >
                  {item.reason}
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </div>
  );
}
