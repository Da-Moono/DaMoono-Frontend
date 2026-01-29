import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '25px 20px',
  backgroundColor: '#FEFDFD',
  borderRadius: '15px',
  margin: '0 24px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  border: '0.7px solid #0000000f',
  position: 'relative',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '12px',
});

export const icon = style({
  fontSize: '18px',
});

export const title = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  marginBottom: '20px',
  color: '#333',
});

export const content = style({
  backgroundColor: '#FFFFFF',
  padding: '12px',
  borderRadius: '8px',
  borderLeft: '4px solid #FFA629', // 강조선
});

export const text = style({
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#212529',
  fontFamily: 'SCDream',
  wordBreak: 'keep-all',
});
