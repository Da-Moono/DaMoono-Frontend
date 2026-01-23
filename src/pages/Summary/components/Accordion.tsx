import { useState } from 'react';
import ChevronIcon from '@/pages/Summary/assets/chevron-down.svg';
import * as s from '@/pages/Summary/style/Accordion.css';

interface GuideData {
  guides: {
    title: string;
    steps: string[];
  };
}

export default function Accordion({ guides }: GuideData) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={s.accordionWrapper}>
      {/* 1. div를 button으로 바꿉니다. 
          2. type="button"은 폼 제출을 방지하기 위해 필수입니다.
      */}
      <button
        type="button"
        className={s.header}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div>
          <span className={s.title}>{guides.title}</span>
        </div>
        <img
          src={ChevronIcon}
          className={s.chevron({ open: isOpen })}
          alt={isOpen ? '닫기' : '펼치기'}
        />
      </button>

      <div className={s.content({ open: isOpen })}>
        <div className={s.contentInner}>
          {guides.steps.map((step) => (
            /* 문자열 자체가 고유하므로 key에 step을 넣어줍니다. 
               만약 중복된 문장이 있다면 `${step}-${index}` 식으로 조합하세요.
            */
            <div key={step} className={s.stepItem}>
              <span className={s.stepNumber}>
                {guides.steps.indexOf(step) + 1}
              </span>
              <p className={s.stepText}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
