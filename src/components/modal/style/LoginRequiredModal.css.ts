import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.45)',
  backdropFilter: 'blur(4px)',
  zIndex: 1000,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const modal = style({
  position: 'relative',
  width: '432px',
  padding: '24px',
  borderRadius: '12px',
  background: '#fff',
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  textAlign: 'center',
});

export const header = style({
  position: 'relative',
});

export const image = style({
  width: '220px',
  margin: '0 auto',
  display: 'block',
});

export const closeButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  background: 'transparent',
  border: 'none',
  fontSize: '18px',
  cursor: 'pointer',
});

export const title = style({
  fontSize: '20px',
  fontWeight: 600,
  marginBottom: '20px',
});

export const description = style({
  fontSize: '14px',
  color: '#555',
  lineHeight: 1.4,
  marginBottom: '30px',
});

export const loginButton = style({
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: 'none',
  background: '#FBE88A',
  color: '#111',
  fontSize: '16px',
  fontWeight: 600,
  cursor: 'pointer',
  marginBottom: '10px',
  boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.25)',

  ':hover': {
    opacity: 0.9,
  },
});
