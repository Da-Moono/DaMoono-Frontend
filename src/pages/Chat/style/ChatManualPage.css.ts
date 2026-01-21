import { style } from '@vanilla-extract/css';

export const container = style({
  minHeight: '100vh',
  backgroundColor: '#FEFDFD',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '16px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
});

export const backButton = style({
  backgroundColor: 'transparent',
  border: 'none',
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',
  cursor: 'pointer',
});

export const title = style({
  fontFamily: 'S-Core Dream',
  fontSize: '20px',
  fontWeight: 500,
  color: '#333',
  margin: 0,
});

export const content = style({
  padding: '40px 20px',
  textAlign: 'center',
});

export const text = style({
  fontFamily: 'S-Core Dream',
  fontSize: '18px',
  fontWeight: 400,
  color: '#666',
  margin: '12px 0',
});
