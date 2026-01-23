import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: '40px 20px',
});

export const logoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '60px',
});

export const mascot = style({
  width: '120px',
  height: '120px',
  objectFit: 'contain',
  marginBottom: '20px',
});

export const speechBubble = style({
  position: 'relative',
  backgroundColor: '#fff',
  border: '2px solid #333',
  borderRadius: '30px',
  padding: '12px 30px',
  fontSize: '20px',
  fontWeight: '700',
  color: '#333',

  '::after': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '10px solid #333',
  },
});

export const formContainer = style({
  width: '100%',
  maxWidth: '340px',
});

export const inputGroup = style({
  marginBottom: '24px',
});

export const label = style({
  display: 'block',
  fontSize: '16px',
  fontWeight: '600',
  color: '#333',
  marginBottom: '8px',
});

export const input = style({
  width: '100%',
  padding: '16px',
  fontSize: '16px',
  border: '1px solid #E0E0E0',
  borderRadius: '8px',
  backgroundColor: '#F8F8F8',
  outline: 'none',

  ':focus': {
    borderColor: '#F4E185',
    backgroundColor: '#fff',
  },
});

export const loginButton = style({
  width: '100%',
  padding: '18px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  cursor: 'pointer',
  marginTop: '40px',
  marginBottom: '20px',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const signupText = style({
  width: '100%',
  padding: '12px',
  background: 'none',
  border: 'none',
  fontSize: '14px',
  fontWeight: '500',
  color: '#999',
  cursor: 'pointer',
  textAlign: 'center',

  ':hover': {
    color: '#666',
  },
});
