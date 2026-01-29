import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const accordionWrapper = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  paddingBottom: 5,
  backgroundColor: '#FEFDFD',

  transition: 'all 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)', // 위로 5px 이동
      boxShadow: '0 0 10px rgba(255, 181, 76, 0.2)', // 은은한 발광 효과
      cursor: 'pointer', // 클릭 가능하다는 느낌을 줌
    },
  },
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px 15px',
  cursor: 'pointer',

  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  textAlign: 'left',
});

export const headerSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const iconWrapper = style({
  width: 35,
  height: 35,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFF7D4',
});

export const guideIcon = style({
  width: '40%',
  height: '40%',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const guideTitle = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 600,
});

export const description = style({
  fontFamily: 'SCDream',
  fontSize: '10px',
  fontWeight: 400,
  color: '777777',
});

export const highlight = style({
  color: '#E91685', // 유플러스 메인 핑크 컬러
  fontWeight: 500,
});

export const chevron = recipe({
  base: {
    transition: 'transform 0.3s ease',
  },
  variants: {
    open: {
      true: { transform: 'rotate(180deg)' },
      false: { transform: 'rotate(0deg)' },
    },
  },
});

export const content = recipe({
  base: {
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  },
  variants: {
    open: {
      true: { maxHeight: '500px' },
      false: { maxHeight: 0 },
    },
  },
});

export const contentInner = style({
  padding: '10px 30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

export const mascotImg = style({
  width: 70,
});

export const contentTitle = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '1.5',
  display: 'inline',
  paddingRight: '5px',
  background: 'linear-gradient(to top, #e916873a 40%, transparent 40%)',
});

export const stepItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
});

export const stepNumber = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#e916873a', // 헤더와 톤을 맞춘 노란색
  fontSize: '11px',
  fontWeight: 700,
  color: '#E91685',
});

export const stepText = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#444',
});
