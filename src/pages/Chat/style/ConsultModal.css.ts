import { keyframes, style } from '@vanilla-extract/css';

export const modalOverlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000,
});

export const modalContainer = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '20px',
  padding: '40px 30px',
  maxWidth: '400px',
  width: '90%',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
  position: 'relative',
});

export const closeButton = style({
  position: 'absolute',
  top: '20px',
  right: '20px',
  width: '32px',
  height: '32px',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '24px',
  color: '#999999',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#F5F5F5',
    color: '#666666',
  },
  ':active': {
    transform: 'scale(0.95)',
  },
});

export const modalContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const modalImage = style({
  width: '160px',
  height: '160px',
  objectFit: 'contain',
  marginBottom: '10px',
});

export const modalTitle = style({
  fontSize: '18px',
  fontWeight: '500',
  color: '#000000',
  textAlign: 'center',
  lineHeight: '1',
  margin: 0,
});

export const modalDescription = style({
  fontSize: '13px',
  fontWeight: '300',
  color: '#666666',
  textAlign: 'center',
  lineHeight: '1.5',
  margin: 0,
});

export const modalSubtext = style({
  fontSize: '13px',
  fontWeight: '300',
  color: '#999999',
  textAlign: 'center',
  margin: 0,
});

export const buttonGroup = style({
  display: 'flex',
  gap: '12px',
  width: '100%',
  marginTop: '10px',
});

export const confirmButton = style({
  flex: 1,
  padding: '12px 16px',
  backgroundColor: '#FBE88A',
  color: '#000000',
  fontSize: '15px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#F9E06B',
  },
  ':active': {
    transform: 'scale(0.98)',
  },
});

export const backButton = style({
  flex: 1,
  padding: '12px 16px',
  backgroundColor: '#BDBDBD',
  color: '#FFFFFF',
  fontSize: '15px',
  fontWeight: '600',
  border: 'none',
  borderRadius: '10px',
  cursor: 'pointer',
  transition: 'all 0.2s',
  ':hover': {
    backgroundColor: '#A0A0A0',
  },
  ':active': {
    transform: 'scale(0.98)',
  },
});

const spin = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  width: '60px',
  height: '60px',
  border: '6px solid #F3F3F3',
  borderTop: '6px solid #FBE88A',
  borderRadius: '50%',
  animation: `${spin} 1s linear infinite`,
  marginBottom: '10px',
});
