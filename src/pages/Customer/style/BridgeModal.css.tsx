import { keyframes, style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

const flyAnimation = keyframes({
  '0%': { transform: 'perspective(500px) translateZ(0) rotate(0deg)' },
  '25%': { transform: 'perspective(500px) translateZ(30px) rotate(2deg)' },
  '50%': { transform: 'perspective(500px) translateZ(60px) rotate(0deg)' },
  '75%': { transform: 'perspective(500px) translateZ(30px) rotate(-2deg)' },
  '100%': { transform: 'perspective(500px) translateZ(0) rotate(0deg)' },
});

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '480px',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
});

export const modalFrame = style({
  width: 'calc(100% - 60px)',
  maxWidth: '400px',
  height: 'auto',
  maxHeight: '90vh',
  background: '#FFFFFF',
  borderRadius: '24px',
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.3)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 'clamp(30px, 8vw, 50px) 24px',
  boxSizing: 'border-box',
  overflowY: 'auto',
});

export const characterImage = style({
  width: 'clamp(120px, 40vw, 180px)', // 화면 폭에 따른 유동적 크기 조절
  height: 'auto',
  aspectRatio: '180 / 190',
  backgroundImage: 'url("/src/assets/images/bridge.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  marginBottom: '25px',
  animation: `${flyAnimation} 3s ease-in-out infinite`,
  flexShrink: 0,
});

export const title = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(18px, 5vw, 22px)',
  textAlign: 'center',
  color: '#000000',
  lineHeight: '1.5',
  marginBottom: '25px',
  wordBreak: 'keep-all',
});

export const progressContainer = style({
  width: '100%',
  height: 'clamp(35px, 10vw, 45px)',
  background: '#FEFDFD',
  border: '1.5px solid #000000',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px',
  borderRadius: '4px',
  overflow: 'hidden',
});

export const percentText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(16px, 4.5vw, 20px)',
  zIndex: 2,
});

export const waitingText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(16px, 4.5vw, 20px)',
  marginBottom: '30px',
  color: '#333333',
});

export const buttonGroup = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  marginTop: '20px',
  padding: '0 5px',
});

export const actionButton = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(18px, 4.5vw, 20px)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '10px',
  transition: 'color 0.2s ease, opacity 0.2s ease',
  selectors: {
    '&:active': {
      opacity: 0.5,
    },
  },
});
