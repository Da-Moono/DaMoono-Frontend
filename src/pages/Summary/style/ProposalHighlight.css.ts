import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '0 24px',
  backgroundColor: '#FFFDF0', // 연노랑 배경
  borderRadius: '24px',
  boxShadow: '0 12px 30px rgba(255, 218, 148, 0.25)',
  border: '1px solid #FFDA94',
  overflow: 'hidden',
});

export const header = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const mascot = style({
  width: '70px',
  height: 'auto',
  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.05))',
});

export const titleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const subTitle = style({
  fontSize: '11px',
  fontWeight: 800,
  color: '#FF9500',
  letterSpacing: '0.5px',
});

export const mainTitle = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  color: '#1A1A1A',
  lineHeight: '1.4',
  background: 'linear-gradient(to top, #FFDA94 45%, transparent 45%)', // 형광펜 효과
  display: 'inline',
});

export const chevron = style({
  width: '18px',
  height: '18px',
  opacity: 0.4,
  filter:
    'invert(58%) sepia(81%) saturate(1905%) hue-rotate(1deg) brightness(105%) contrast(105%)', // 노란색 톤 조절
});

export const contentWrapper = style({
  overflow: 'hidden',
});

export const innerContent = style({
  padding: '0 24px 24px 24px',
});

export const itemBox = style({
  backgroundColor: 'rgba(255, 255, 255, 0.7)', // 내부 흰색 반투명 박스
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
  wordBreak: 'keep-all',
});
