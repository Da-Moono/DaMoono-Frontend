import { style } from '@vanilla-extract/css';

export const container = style({
  border: '0.7px solid #ffdeeb',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  paddingBottom: 5,
  backgroundColor: '#FFF0F6',

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
  backgroundColor: '#FFD6E7', // 아이콘 배경도 핑크톤으로
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
});

export const icon = style({
  width: '22px',
  height: '22px',
  filter:
    'invert(20%) sepia(78%) saturate(5655%) hue-rotate(317deg) brightness(94%) contrast(93%)',
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

export const tipList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '0 24px 24px 24px',
});

export const tipItem = style({
  display: 'flex',
  gap: '8px',
});

export const bullet = style({
  color: '#E91685',
  fontWeight: 'bold',
});

export const tipText = style({
  fontFamily: 'SCDream',
  fontSize: '13px',
  color: '#555',
  lineHeight: '1.6',
});
