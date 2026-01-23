import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  position: 'fixed',
  bottom: '70px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  padding: '12px 20px',
  backgroundColor: '#fff',
  borderTop: '1px solid #F0F0F0',
});

export const menuOverlay = style({
  position: 'absolute',
  bottom: '100%',
  left: 0,
  right: 0,
  backgroundColor: '#fff',
  borderRadius: '20px 20px 0 0',
  padding: '12px 20px 12px 20px',
  marginBottom: '0px',
  boxShadow: '0 -2px 16px rgba(0, 0, 0, 0.1)',
  borderTop: '1px solid #F0F0F0',
});

export const closeButton = style({
  position: 'absolute',
  top: '6px',
  right: '50%',
  transform: 'translateX(50%)',
  width: '20px',
  height: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
});

export const closeIcon = style({
  width: '20px',
  height: '20px',
  objectFit: 'contain',
});

export const menuGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '12px',
  marginTop: '20px',
});

export const menuButton = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '12px 8px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const menuIcon = style({
  width: '30px',
});

export const menuText = style({
  fontFamily: 'S-Core Dream',
  fontSize: '12px',
  fontWeight: 400,
  color: '#333',
  textAlign: 'center',
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const plusButton = style({
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: '1px solid #DADADA',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const plusIcon = style({
  width: '15px',
  height: '15px',
});

export const inputBox = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 16px',
  backgroundColor: '#fff',
  border: '1px solid #CDCDCD',
  borderRadius: '30px',
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',

  '::placeholder': {
    color: '#CDCDCD',
  },
});

export const iconButton = style({
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const icon = style({
  width: '100%',
  height: '100%',
});
