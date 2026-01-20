import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: '#f5f5f5',
});

export const content = style({
  width: '700px',
  maxWidth: '100%',
  minHeight: '100vh',
  backgroundColor: '#ffffff',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
});
