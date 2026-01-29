import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '0 24px',
  backgroundColor: '#FFFDF0', // 연노랑 배경
  borderRadius: '15px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  border: '1px solid #FFDA94',
  overflow: 'hidden',

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
  backgroundColor: '#FFDA94', // 노란색 아이콘 박스
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
  color: '#855E00', // 노란 테마에 맞춘 어두운 골드
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
  gap: '20px',
});

export const titleGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const mascot = style({
  width: '64px',
  height: 'auto',
});

export const textGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

export const subLabel = style({
  fontSize: '11px',
  fontWeight: 800,
  color: '#FF9500',
});

export const mainTitle = style({
  fontFamily: 'SCDream',
  fontSize: '17px',
  fontWeight: 700,
  color: '#1A1A1A',
  lineHeight: '1.4',
  background: 'linear-gradient(to top, #FFDA94 45%, transparent 45%)', // 형광펜 효과
});

export const itemBox = style({
  backgroundColor: 'rgba(255, 255, 255, 0.6)', // 내부 반투명 박스
  borderRadius: '16px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const itemRow = style({
  display: 'flex',
  gap: '8px',
});

export const bullet = style({
  color: '#FF9500',
  fontWeight: 'bold',
});

export const itemText = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  color: '#444',
  lineHeight: '1.5',
});
