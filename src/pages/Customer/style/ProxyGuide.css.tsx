import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

export const scrollArea = style({
  width: '100%',
  minHeight: '100vh',
  overflowY: 'auto', // ✅ 스크롤 활성화
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '160px', // 하단 고정 요소 공간 확보
  boxSizing: 'border-box',
  backgroundColor: '#FFFFFF',
});

// 상단 중앙 로고 (반응형)
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

// ✅ 타이틀과 캐릭터를 가로로 배치하기 위한 기준 컨테이너
export const titleContainer = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  padding: '25px 24px 0',
  gap: '12px',
  boxSizing: 'border-box',
});

export const subTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 600,
  fontSize: 'clamp(16px, 4.5vw, 20px)',
  lineHeight: '1.2',
  color: '#000000',
  flex: 1,
  paddingRight: '22%', // 캐릭터와 겹치지 않게 여백 확보
});

// ✅ FAQ 이미지처럼 공격적으로 작아지는 캐릭터 이미지
export const characterImage = style({
  position: 'absolute',
  width: 'clamp(35px, 20vw, 95px)', // 최솟값을 낮춰서 반응형 강화
  height: 'auto',
  aspectRatio: '1 / 1',
  right: '24px',
  top: '20px',
  backgroundImage: 'url("../../../assets/images/question.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  zIndex: 2,

  // 초소형 기기 대응
  '@media': {
    'screen and (max-width: 360px)': {
      width: '45px',
      right: '16px',
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

// 프로그레스 바 영역 (가로 배치)
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

// 게이지 스타일
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

// 문서 카드 (스크롤이 생기도록 아래로 자연스럽게 쌓임)
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
  width: 'min(180px, 100%)',
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

// 하단 고정 레이아웃 중앙 정렬
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
