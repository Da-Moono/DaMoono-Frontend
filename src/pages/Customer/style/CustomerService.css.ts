import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

// 상단 영역 (Header)
export const headerSection = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '15px 16px 20px',
  boxSizing: 'border-box',
  zIndex: 5,
});

export const topLogo = style({
  // 로고 너비를 화면 너비의 최대 20%로 제한하여 좁은 화면 대응
  width: 'min(110px, 18vw)',
  height: 'auto',
  aspectRatio: '110 / 70',
  backgroundImage: 'url("/src/assets/images/logo.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

// ⭐ FAQ 캐릭터: 겹침 방지 및 반응형 강화
export const faqCharacter = style({
  position: 'absolute',
  // 화면 너비가 작아지면 캐릭터도 최소 40px까지 아주 작아지도록 설정
  width: 'clamp(40px, 12vw, 100px)',
  height: 'auto',
  aspectRatio: '100 / 90',
  right: '12px',
  top: '12px', // 여백을 살짝 줄여 겹침 최소화
  backgroundImage: 'url("/src/assets/images/FAQ.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  zIndex: 6,
  // 아주 작은 화면에서는 캐릭터가 가려지거나 방해되지 않도록 미세 조정
  '@media': {
    'screen and (max-width: 320px)': {
      width: '35px',
      top: '10px',
    },
  },
});

export const title = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(18px, 5vw, 24px)',
  marginTop: '10px',
  textAlign: 'center',
  padding: '0 40px', // 캐릭터와 글자가 겹치지 않도록 좌우 여백 확보
});

export const searchContainer = style({
  width: '100%',
  maxWidth: '400px',
  marginTop: '12px',
});

export const searchInput = style({
  width: '100%',
  padding: '10px 20px',
  borderRadius: '30px',
  border: '2px solid #FBC02D',
  fontFamily: SCOREDREAM,
  fontSize: '15px',
  boxSizing: 'border-box',
  outline: 'none',
});

export const tabContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '12px',
  padding: '0 8px',
  width: '100%',
  boxSizing: 'border-box',
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  selectors: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

export const categoryTab = style({
  padding: '6px 14px',
  borderRadius: '20px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  fontFamily: SCOREDREAM,
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  flexShrink: 0,
});

export const activeTab = style({
  background: '#FBC02D',
  borderColor: '#FBC02D',
});

// 중앙 스크롤 영역
export const scrollArea = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 2,
  paddingBottom: '120px',
});

export const faqListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '0 20px',
  width: '100%',
  boxSizing: 'border-box',
});

export const faqItemBox = style({
  width: '100%',
  background: '#FEFDFD',
  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.08)',
  borderRadius: '15px',
  overflow: 'hidden',
});

export const faqHeader = style({
  width: '100%',
  minHeight: '50px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

export const faqHeaderText = style({
  textAlign: 'left',
  flex: 1,
  fontFamily: SCOREDREAM,
  fontSize: '15px',
  fontWeight: 700,
});

export const arrowIcon = style({
  width: '8px',
  height: '8px',
  borderRight: '2px solid #000',
  borderBottom: '2px solid #000',
  transform: 'rotate(45deg)',
  marginLeft: 'auto',
});

export const arrowIconOpen = style({
  transform: 'rotate(-135deg)',
});

export const faqAnswer = style({
  padding: '12px 20px 15px',
  fontFamily: SCOREDREAM,
  fontSize: '14px',
  fontWeight: 400,
  background: '#F9F9F9',
  borderTop: '1px solid #EFEFEF',
});

// 하단 가이드 프레임 (노란색 박스)
export const guideFrame = style({
  width: 'calc(100% - 32px)',
  minHeight: '260px',
  margin: '20px auto',
  background: '#FFF7D4',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '24px 12px',
  boxSizing: 'border-box',
});

export const cardTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '18px',
  textAlign: 'center',
});

export const categoryGroup = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  width: '100%',
  gap: '6px',
  marginTop: '20px',
  boxSizing: 'border-box',
});

export const categoryBox = style({
  flex: 1,
  minWidth: 0,
  height: '40px',
  background: '#FEFDFD',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  fontFamily: SCOREDREAM,
  fontSize: 'clamp(9px, 2.5vw, 12px)',
  fontWeight: 700,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const guideButton = style({
  width: '100%',
  maxWidth: '240px',
  height: '48px',
  border: 'none',
  borderRadius: '12px',
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '16px',
  marginTop: '30px',
  marginBottom: '10px',
  cursor: 'pointer',
});

export const buttonDisabled = style({
  background: 'rgba(251, 232, 138, 0.44)',
  color: 'rgba(0, 0, 0, 0.4)',
});

export const buttonActive = style({
  background: '#FBC02D',
  color: '#000',
});
