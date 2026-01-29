import { style } from '@vanilla-extract/css';

export const bottomNav = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#fff',
  borderTop: '1px solid #e0e0e0',
  padding: '12px 0',
  paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
  zIndex: 1000,
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#999',

  ':hover': {
    color: '#333',
  },
});

export const navIcon = style({
  width: '28px',
  height: '28px',
  objectFit: 'contain',
});

export const navLabel = style({
  fontSize: '12px',
});
