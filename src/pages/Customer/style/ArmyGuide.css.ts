import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

export const scrollArea = style({
  width: '100%',
  minHeight: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '160px',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
});

// 상단 로고: 로고도 화면 폭에 따라 쫀득하게 작아지도록 수정
export const topLogo = style({
  width: 'min(80px, 18vw)',
  height: 'auto',
  aspectRatio: '80 / 50',
  margin: '10px auto 0',
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
  fontSize: '16px',
  color: '#000000',
});

// ⭐ 타이틀 컨테이너: 캐릭터를 absolute로 배치하기 위한 기준점
export const titleContainer = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 24px 0',
  minHeight: '100px', // 캐릭터가 위치할 최소 높이 확보
  boxSizing: 'border-box',
});

export const subTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: 'clamp(16px, 4.5vw, 20px)',
  lineHeight: '1.2',
  color: '#000000',
  paddingRight: '22%', // 캐릭터와 겹치지 않도록 오른쪽 여백 확보
  zIndex: 1,
});

// ⭐ 캐릭터 이미지: FAQ 이미지처럼 absolute 방식으로 아주 작게까지 조절
export const characterImage = style({
  position: 'absolute',
  // 화면 폭의 20%까지 줄어들며, 최솟값(35px)을 낮춰서 극단적인 화면에도 대응
  width: 'clamp(35px, 20vw, 95px)',
  height: 'auto',
  aspectRatio: '1 / 1',
  right: '24px',
  top: '20px',
  backgroundImage: 'url("../../../assets/images/question.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 2,

  // 아주 작은 모바일 기기 대응
  '@media': {
    'screen and (max-width: 360px)': {
      width: '45px',
      right: '16px',
      top: '15px',
    },
  },
});

export const statusText = style({
  padding: '15px 24px 0',
  fontFamily: SCOREDREAM,
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: 'clamp(14px, 4vw, 18px)',
});

export const progressWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 24px 0',
  gap: '10px',
});

export const progressBarContainer = style({
  flex: 1,
  height: '25px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
  position: 'relative',
});

export const progressGauge = style({
  height: '100%',
  background: '#FBC02D',
  transition: 'width 0.3s ease',
});

export const percentText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(14px, 4vw, 18px)',
  whiteSpace: 'nowrap',
});

export const documentCard = style({
  width: 'calc(100% - 48px)',
  margin: '24px auto 0',
  minHeight: '110px',
  background: '#FEFDFD',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: '20px 30px',
  boxSizing: 'border-box',
  cursor: 'pointer',
});

export const docText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '1.4',
  textAlign: 'left',
});

export const docSubText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 300,
  fontSize: '13px',
  color: '#000000',
  marginTop: '4px',
});

export const linkButton = style({
  width: 'min(200px, 100%)',
  height: '32px',
  background: '#FBE88A',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  border: 'none',
  borderRadius: '6px',
  fontFamily: SCOREDREAM,
  fontWeight: 500,
  fontSize: '12px',
  marginTop: '12px',
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
    bottom: '80px',
    height: '46px',
    background: '#FFA629',
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
]);

export const warningText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: '13px',
  color: '#000000',
  padding: '0 10px',
  textAlign: 'center',
});

export const navBar = style([
  fixedBase,
  {
    bottom: 0,
    height: '80px',
    background: '#FFFFFF',
    borderTop: '1px solid #EFEFEF',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 1000,
  },
]);

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const navIcon = style({
  width: '26px',
  height: '26px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const navText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 400,
  fontSize: '11px',
  marginTop: '4px',
  color: '#000000',
});
