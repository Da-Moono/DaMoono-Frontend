import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '40px 20px',
  gap: '40px',
});

export const logo = style({
  width: '300px',
  height: 'auto',
  objectFit: 'contain',
});

export const loginButton = style({
  width: '340px',
  maxWidth: '100%',
  padding: '16px 32px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#333',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const guestText = style({
  fontSize: '14px',
  color: '#999',
  cursor: 'pointer',
  margin: 0,

  ':hover': {
    color: '#666',
    textDecoration: 'underline',
  },
});
