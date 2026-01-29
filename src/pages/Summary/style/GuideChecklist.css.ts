import { style } from '@vanilla-extract/css';

export const container = style({
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
  width: '100%',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const headerSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const iconWrapper = style({
  width: 36,
  height: 36,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 10,
  backgroundColor: '#FFF7D4', // 기존 가이드 노란색 아이콘 배경
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
});

export const icon = style({
  width: '20px',
  height: '20px',
});

export const textWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
});

export const guideTitle = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 600,
  color: '#1A1A1A',
});

export const description = style({
  fontFamily: 'SCDream',
  fontSize: '10px',
  fontWeight: 400,
  color: '#888',
});

export const highlight = style({
  color: '#E91685',
  fontWeight: 600,
});

export const chevron = style({
  width: '20px',
  height: '20px',
  opacity: 0.4,
});

export const contentWrapper = style({
  overflow: 'hidden',
});

export const innerContent = style({
  padding: '10px 24px 32px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const mascotImg = style({
  width: '60px',
  height: 'auto',
});

export const contentTitle = style({
  fontFamily: 'SCDream',
  fontSize: '16px',
  fontWeight: 700,
  lineHeight: '1.4',
  color: '#1A1A1A',
  background: 'linear-gradient(to top, #e9168725 40%, transparent 40%)', // 형광펜 효과
});

export const listWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
});

export const checkItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
});

export const checkCircle = style({
  width: '22px',
  height: '22px',
  borderRadius: '50%',
  backgroundColor: '#E91685',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  color: 'white',
  fontSize: '12px',
});

export const stepText = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 500,
  color: '#4E5968',
  lineHeight: '1.5',
});
