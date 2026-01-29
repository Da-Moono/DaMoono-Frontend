import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

export const scrollArea = style({
  width: '100%',
  minHeight: '100vh',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  // 중앙 쪽으로 내리기 위한 상단 여백 및 하단 네비 공간 확보
  paddingTop: 'clamp(40px, 8vw, 60px)',
  paddingBottom: '240px',
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
  WebkitOverflowScrolling: 'touch',
});

// 상단 중앙 로고
export const topLogo = style({
  width: 'clamp(80px, 20vw, 110px)',
  height: 'auto',
  aspectRatio: '80 / 50',
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
  margin: '25px auto 0',
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

// 타이틀과 캐릭터를 감싸는 컨테이너 (가로 배치용)
export const titleContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 'clamp(30px, 10vw, 50px) 24px 0',
  gap: '15px',
});

export const subTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '1.2',
  color: '#000000',
  flex: 1,
});

// 우측 상단 캐릭터
export const characterImage = style({
  width: 'clamp(75px, 20vw, 95px)',
  height: 'auto',
  aspectRatio: '1 / 1',
  backgroundImage: 'url("../../../assets/images/question.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  flexShrink: 0,
});

// 진행 현황 텍스트
export const statusText = style({
  padding: 'clamp(40px, 12vw, 70px) 24px 0', // 카드를 아래로 밀어주는 핵심 여백
  fontFamily: SCOREDREAM,
  fontStyle: 'italic',
  fontWeight: 700,
  fontSize: '18px',
});

// 프로그레스 바 영역
export const progressWrapper = style({
  display: 'flex',
  alignItems: 'center',
  padding: '15px 24px 0',
  gap: '12px',
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
  background: '#FBC02D', // 노란색 게이지
  transition: 'width 0.4s ease',
});

export const percentText = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '18px',
  minWidth: '45px',
  textAlign: 'right',
});

// 문서 카드 (간격 띄우기 적용)
export const documentCard = style({
  width: 'calc(100% - 48px)',
  // 첫 번째 카드와 프로그레스 바 사이 간격은 80px, 카드끼리는 48px 적용
  marginTop: '80px',
  marginBottom: '48px',
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
    // 연속된 카드 사이의 중첩 마진 방지
    '& + &': {
      marginTop: '0px',
    },
    '&:active': {
      transform: 'scale(0.97)',
      backgroundColor: '#F9F9F9',
    },
  },
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
  marginTop: '15px',
  alignSelf: 'center',
  cursor: 'pointer',
});

// 하단 고정 요소
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
    height: 'auto',
    minHeight: '46px',
    padding: '10px 0',
    background: '#FFA629',
    borderTop: '1px solid #000000',
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
