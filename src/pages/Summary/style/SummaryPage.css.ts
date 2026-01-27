import { style } from '@vanilla-extract/css';

export const pageContainer = style({
  padding: '100px 20px 100px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minHeight: '100vh',
});

export const characterSection = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontFamily: 'SCDream',
  padding: '30px 10px',
  fontWeight: 700,
  fontSize: 30,
});

export const contentSection = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const cardDummy = style({
  width: '100%',
  height: '100px',
  backgroundColor: 'white',
  borderRadius: '16px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#888',
  border: '1px solid #EEE',
});
