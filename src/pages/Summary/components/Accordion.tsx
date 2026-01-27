import { useState } from 'react';
import ProposalIcon from '@/pages/Summary/assets/bulb.svg';
import ChevronIcon from '@/pages/Summary/assets/chevron-down.svg';
import GuideIcon from '@/pages/Summary/assets/guide.svg';
import holeMan from '@/pages/Summary/assets/holeman.png';
import TipIcon from '@/pages/Summary/assets/present.svg';
import * as s from '@/pages/Summary/style/Accordion.css';

interface AccordionProps {
  type: 'guide' | 'proposal' | 'tip'; // 어떤 타입인지 구분
  data: {
    title: string;
    steps?: string[]; // 가이드와 꿀팁에서 사용
    items?: string[]; // 제시안에서 사용 (데이터 구조에 따라 선택)
  };
}

const ACCORDION_CONFIG = {
  guide: { title: '이용 가이드', icon: GuideIcon },
  proposal: { title: '제시안', icon: ProposalIcon }, // 제시안 아이콘 추가 필요
  tip: { title: '꿀팁', icon: TipIcon }, // 꿀팁 아이콘 추가 필요
};

export default function Accordion({ type, data }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const config = ACCORDION_CONFIG[type];

  // steps와 items 중 데이터가 있는 것을 리스트로 사용합니다.
  const contents = data.steps || data.items || [];

  return (
    <div className={s.accordionWrapper}>
      <button className={s.header} onClick={() => setIsOpen(!isOpen)}>
        <div className={s.headerSection}>
          <div className={s.iconWrapper}>
            <img src={config.icon} alt={type} className={s.guideIcon} />
          </div>
          <div className={s.textWrapper}>
            <p className={s.guideTitle}>{config.title}</p>
            <p className={s.description}>
              <span className={s.highlight}>AI</span>가 자동으로{' '}
              <span className={s.highlight}>매칭</span>했어요
            </p>
          </div>
        </div>
        <img
          src={ChevronIcon}
          className={s.chevron({ open: isOpen })}
          alt="toggle"
        />
      </button>

      <div className={s.content({ open: isOpen })}>
        <div className={s.contentInner}>
          <div className={s.titleWrapper}>
            <img src={holeMan} alt="mascot" className={s.mascotImg} />
            <span className={s.contentTitle}>{data.title}</span>
          </div>

          {contents.map((text, index) => (
            <div key={text} className={s.stepItem}>
              <span className={s.stepNumber}>{index + 1}</span>
              <p className={s.stepText}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
