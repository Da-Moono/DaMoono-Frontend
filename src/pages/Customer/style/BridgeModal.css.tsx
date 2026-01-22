import { keyframes, style } from '@vanilla-extract/css';

//  둥둥 떠다니는(날아가는 듯한) 애니메이션 정의
const flyAnimation = keyframes({
  '0%': { transform: 'translateY(0) translateX(0)' },
  '25%': { transform: 'translateY(-10px) translateX(5px)' },
  '50%': { transform: 'translateY(0) translateX(10px)' },
  '75%': { transform: 'translateY(10px) translateX(5px)' },
  '100%': { transform: 'translateY(0) translateX(0)' },
});

//  레이아웃의 영향을 받는 전체 배경
export const overlay = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '480px',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2000,
});

//  피그마 Frame 52 규격 반영
export const modalFrame = style({
  width: 'calc(100% - 48px)',
  height: '580px',
  background: '#FFFFFF',
  borderRadius: '20px',
  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.25)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  boxSizing: 'border-box',
});

export const characterImage = style({
  width: '180px',
  height: '190px',
  backgroundImage: 'url("/src/assets/images/bridge.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  marginBottom: '20px',
  // 💡 애니메이션 적용: 3초 동안 무한히 부드럽게 움직임
  animation: `${flyAnimation} 3s ease-in-out infinite`,
});

export const title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '22px',
  textAlign: 'center',
  color: '#000000',
  lineHeight: '1.4',
  marginBottom: '30px',
});

export const progressContainer = style({
  width: '100%',
  height: '40px',
  background: '#FEFDFD',
  border: '1px solid #000000',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '15px',
});

export const percentText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '20px',
  zIndex: 2,
});

export const waitingText = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '20px',
  marginBottom: '40px',
});

export const buttonGroup = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',
  padding: '0 10px',
});

export const actionButton = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '22px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});
