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
  marginBottom: '40px',
});

export const mascot = style({
  width: '80px',
  height: '80px',
  objectFit: 'contain',
  marginBottom: '12px',
});

export const speechBubble = style({
  position: 'relative',
  backgroundColor: '#fff',
  border: '2px solid #333',
  borderRadius: '30px',
  padding: '8px 20px',
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',

  '::after': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderBottom: '8px solid #333',
  },
});

export const formContainer = style({
  width: '100%',
  maxWidth: '540px',
  padding: '0 20px',
});

export const inputGroup = style({
  marginBottom: '20px',
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

export const inputWithButton = style({
  display: 'flex',
  gap: '8px',
});

export const inputFlex = style({
  flex: 1,
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

export const checkButton = style({
  padding: '16px 20px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#333',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
  },
});

export const signupButton = style({
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
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});
