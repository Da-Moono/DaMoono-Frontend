import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

export const scrollArea = style({
  width: '100%',
  minHeight: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 'clamp(30px, 6vw, 50px)',
  paddingBottom: '240px', // 하단 고정 요소(warningBox, Nav) 공간 확보
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
  WebkitOverflowScrolling: 'touch',
});

export const topLogo = style({
  width: 'clamp(80px, 25vw, 110px)',
  height: 'auto',
  aspectRatio: '110 / 70',
  margin: '0 auto',
  backgroundImage: 'url("../../../assets/images/logo.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexShrink: 0,
});

export const headerFrame = style({
  width: 'calc(100% - 32px)',
  minHeight: '50px',
  margin: '20px auto 0',
  background: '#FEFDFD',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const headerTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(14px, 4vw, 16px)',
  color: '#000000',
});

export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 'clamp(30px, 8vw, 50px) 24px 0',
  gap: '15px',
});

export const subTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: 'clamp(17px, 5vw, 22px)',
  lineHeight: '1.2',
  color: '#000000',
  flex: 1,
});

export const characterImage = style({
  width: 'clamp(65px, 22vw, 95px)',
  height: 'auto',
  aspectRatio: '1 / 1',
  backgroundImage: 'url("../../../assets/images/question.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexShrink: 0,
});

export const statusText = style({
  padding: 'clamp(40px, 10vw, 70px) 24px 0',
  fontFamily: SCOREDREAM,
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: 'clamp(15px, 4vw, 18px)',
});

export const progressWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 24px 0',
  gap: '12px',
});

export const progressBarContainer = style({
  flex: 1,
  height: '24px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
  borderRadius: '6px',
  overflow: 'hidden',
  position: 'relative',
});

export const progressGauge = style({
  height: '100%',
  background: '#FBE88A',
  transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const percentText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(15px, 4vw, 18px)',
  minWidth: '45px',
  textAlign: 'right',
});

export const documentCard = style({
  width: 'calc(100% - 48px)',
  marginTop: '80px', // 프로그레스 바와의 첫 여백
  marginBottom: '48px', // 카드 간 세로 여백
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: 'clamp(110px, 25vw, 130px)',
  background: '#FEFDFD',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.08)',
  borderRadius: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '24px 30px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  border: '1px solid #F0F0F0',
  transition: 'all 0.2s ease-in-out',
  selectors: {
    '& + &': {
      marginTop: '0px', // 인접 카드 간 마진 겹침 방지
    },
    '&:active': {
      transform: 'scale(0.97)',
      backgroundColor: '#F9F9F9',
    },
  },
});

export const docText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: 'clamp(15px, 4.5vw, 17px)',
  lineHeight: '1.4',
  textAlign: 'left',
});

export const docSubText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 400,
  fontSize: 'clamp(12px, 3.8vw, 14px)',
  color: '#666666',
  marginTop: '8px',
});

export const linkButton = style({
  width: 'auto',
  minWidth: '150px',
  padding: '10px 20px',
  background: '#FBE88A',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  border: 'none',
  borderRadius: '8px',
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: '12px',
  marginTop: '18px',
  alignSelf: 'center',
  cursor: 'pointer',
});

const fixedBase = style({
  position: 'fixed',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '480px',
  boxSizing: 'border-box',
  zIndex: 100,
});

export const warningBox = style([
  fixedBase,
  {
    bottom: '80px', // BottomNav 상단 위치
    height: 'auto',
    minHeight: '54px',
    padding: '10px 20px',
    background: '#FFA629',
    borderTop: '1px solid #000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);

export const warningText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '12px',
  color: '#000000',
  textAlign: 'center',
  lineHeight: '1.5',
});
