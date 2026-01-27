import { style } from '@vanilla-extract/css';

export const CardContainer = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  padding: '24px 20px',
  backgroundColor: '#FEFDFD',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const mascotImg = style({
  width: '65px',
  height: 'auto',
});

export const title = style({
  fontFamily: 'SCDream',
  fontSize: '20px',
  fontWeight: 700,
});

export const content = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const actionItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

// 이미지 두 개를 겹치기 위한 스타일
export const iconStack = style({
  position: 'relative',
  width: '45px', // 말풍선 배경 크기
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const bubbleBg = style({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  objectFit: 'contain',
});

export const innerIcon = style({
  position: 'relative',
  zIndex: 1,
  width: '20px',
  height: '20px',
  filter: 'invert(100%) sepia(0%) saturate(0%) brightness(200%) contrast(100%)',
  transform: 'translateY(-2px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
export const actionText = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#333',
  fontWeight: 500,
});
