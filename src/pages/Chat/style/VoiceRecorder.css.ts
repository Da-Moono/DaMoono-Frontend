import { keyframes, style } from '@vanilla-extract/css';

const pulseRingAnimation = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(2)',
    opacity: 0,
  },
});

const pulseRing2Animation = keyframes({
  '0%': {
    transform: 'scale(1)',
    opacity: 1,
  },
  '100%': {
    transform: 'scale(2.5)',
    opacity: 0,
  },
});

export const recordingOverlay = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '480px',
  height: 'calc(100vh - 70px)',
  backgroundColor: 'rgba(0, 0, 0, 0.85)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000,
});

export const recordingContent = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
});

export const micIconWrapper = style({
  position: 'relative',
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const recordingMicIcon = style({
  width: '60px',
  height: '60px',
  zIndex: 2,
  filter: 'brightness(0) invert(1)',
});

export const pulseRing = style({
  position: 'absolute',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#FFE253',
  animation: `${pulseRingAnimation} 2s ease-out infinite`,
  zIndex: 1,
});

export const pulseRing2 = style({
  position: 'absolute',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#FFE253',
  animation: `${pulseRing2Animation} 2s ease-out infinite 0.5s`,
  zIndex: 1,
});

export const recordingText = style({
  fontFamily: 'SCDream',
  fontSize: '24px',
  fontWeight: 600,
  color: '#fff',
  margin: 0,
});

export const recordingSubText = style({
  fontFamily: 'SCDream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#FFE253',
  margin: 0,
  minHeight: '24px',
  textAlign: 'center',
  maxWidth: '80%',
  wordBreak: 'keep-all',
});

export const stopButton = style({
  marginTop: '20px',
  padding: '12px 40px',
  backgroundColor: '#FF4444',
  border: 'none',
  borderRadius: '30px',
  fontFamily: 'SCDream',
  fontSize: '16px',
  fontWeight: 500,
  color: '#fff',
  cursor: 'pointer',
  transition: 'all 0.3s',

  ':hover': {
    backgroundColor: '#FF6666',
    transform: 'scale(1.05)',
  },

  ':active': {
    transform: 'scale(0.95)',
  },
});
