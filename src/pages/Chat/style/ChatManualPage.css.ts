import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 140px)',
  backgroundColor: '#FEFDFD',
  position: 'relative',
  padding: '0 60px',
});

export const content = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px 20px 120px',
  gap: '16px',
  overflow: 'hidden',
});

export const title = style({
  fontFamily: 'S-Core Dream',
  fontSize: '24px',
  fontWeight: 700,
  color: '#333',
  margin: '0 0 4px',
  textAlign: 'center',
});

export const subtitle = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#666',
  margin: '0 0 8px',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  lineHeight: 1.5,
});

export const indicators = style({
  display: 'flex',
  gap: '10px',
  justifyContent: 'center',
  margin: '2px 0 4px',
});

export const indicator = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#D9D9D9',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'background-color 0.3s',
});

export const indicatorActive = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  backgroundColor: '#FFE253',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const imageContainer = style({
  width: '100%',
  maxWidth: '180px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '12px 0',
  flex: '0 0 auto',
});

export const manualImageContainer = style({
  width: '100%',
  maxWidth: '200px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  margin: '12px 0',
  flex: '0 0 auto',
  maxHeight: 'calc(100vh - 450px)',
});

export const image = style({
  width: '100%',
  height: '90%',
  maxHeight: '100%',
  objectFit: 'contain',
});

export const description = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 400,
  color: '#999',
  margin: '16px 0 0 0',
  textAlign: 'center',
  whiteSpace: 'pre-line',
  lineHeight: 1.6,
});

export const navButtonLeft = style({
  position: 'absolute',
  left: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '1px solid #E0E0E0',
  fontSize: '18px',
  color: '#666',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  zIndex: 10,
  ':hover': {
    backgroundColor: '#f8f8f8',
    borderColor: '#ccc',
    transform: 'translateY(-50%) scale(1.05)',
  },
  ':active': {
    transform: 'translateY(-50%) scale(0.95)',
  },
});

export const navButtonRight = style({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: '1px solid #E0E0E0',
  fontSize: '18px',
  color: '#666',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
  zIndex: 10,
  ':hover': {
    backgroundColor: '#f8f8f8',
    borderColor: '#ccc',
    transform: 'translateY(-50%) scale(1.05)',
  },
  ':active': {
    transform: 'translateY(-50%) scale(0.95)',
  },
});

export const startButton = style({
  position: 'fixed',
  bottom: '90px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: 'calc(100% - 40px)',
  maxWidth: '420px',
  padding: '10px',
  backgroundColor: '#FBE88A',
  border: 'none',
  borderRadius: '12px',
  fontFamily: 'S-Core Dream',
  fontSize: '18px',
  fontWeight: 500,
  color: '#333',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: '#FFE253',
  },
});
