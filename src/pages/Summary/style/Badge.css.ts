import { style } from '@vanilla-extract/css';

export const badgeContainer = style({
  display: 'flex', // 가로로 나열
  alignItems: 'center',
  gap: '3px',
  backgroundColor: '#ffffff',
  padding: '2px 8px',
  borderRadius: '30px',
  width: 'fit-content', // 콘텐츠 크기에 맞게 너비 조절
});

export const icon = style({
  width: '18px',
  height: '18px',
});

export const text = style({
  fontSize: '10px',
  fontFamily: 'SCDream',
  fontWeight: 300,
});
