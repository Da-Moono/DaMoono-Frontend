import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

export const scrollArea = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflowY: 'auto',
  paddingBottom: '140px',
  boxSizing: 'border-box',
});

// 상단 중앙 로고 이미지
export const topLogo = style({
  position: 'absolute',
  width: '80px',
  height: '50px',
  left: '50%',
  transform: 'translateX(-50%)',
  top: '0px',
  backgroundImage: 'url("../../../assets/images/logo.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const headerFrame = style({
  position: 'absolute',
  width: 'calc(100% - 32px)',
  height: '50px',
  left: '16px',
  top: '45px',
  background: '#FEFDFD',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const headerTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '16px',
  color: '#000000',
});

export const subTitle = style({
  position: 'absolute',
  width: 'calc(100% - 48px)',
  left: '24px',
  top: '115px',
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '1.2',
  color: '#000000',
});

// 우측 상단 캐릭터 이미지
export const characterImage = style({
  position: 'absolute',
  width: '95px',
  height: '95px',
  right: '12px',
  top: '105px',
  backgroundImage: 'url("../../../assets/images/question.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const statusText = style({
  position: 'absolute',
  left: '24px',
  top: '185px',
  fontFamily: SCOREDREAM,
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: '18px',
});

export const progressBarContainer = style({
  position: 'absolute',
  width: 'calc(100% - 100px)',
  height: '25px',
  left: '24px',
  top: '225px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden',
});

export const percentText = style({
  position: 'absolute',
  right: '15px',
  top: '225px',
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '18px',
  lineHeight: '25px',
});

export const documentCard = style({
  position: 'absolute',
  width: 'calc(100% - 48px)',
  height: '110px',
  left: '24px',
  background: '#FEFDFD',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingLeft: '30px',
  border: 'none',
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
  width: '180px',
  height: '28px',
  background: '#FBE88A',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  border: 'none',
  borderRadius: '6px',
  fontFamily: SCOREDREAM,
  fontWeight: 500,
  fontSize: '12px',
  marginTop: '12px',
  alignSelf: 'center',
  marginLeft: '-30px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, transform 0.1s ease',
  selectors: {
    '&:hover': { backgroundColor: '#F9D84A' },
    '&:active': { transform: 'scale(0.98)' },
  },
});

// 하단 주의사항 주황색 박스
export const warningBox = style({
  position: 'fixed',
  bottom: '80px',
  width: 'inherit',
  maxWidth: '480px',
  height: '46px',
  background: '#FFA629',
  border: '1px solid #000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 90,
});

export const warningText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: '13px',
  color: '#000000',
  textAlign: 'center',
});

export const navBar = style({
  position: 'fixed',
  bottom: 0,
  width: 'inherit',
  maxWidth: '480px',
  height: '80px',
  background: '#FFFFFF',
  borderTop: '1px solid #EFEFEF',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  zIndex: 1000,
});

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
