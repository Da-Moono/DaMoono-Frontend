import { style } from '@vanilla-extract/css';

export const header = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '3px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
  zIndex: 100,
});

export const logo = style({
  height: '55px',
  width: 'auto',
  objectFit: 'contain',
});
