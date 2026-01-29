import { style } from '@vanilla-extract/css';

const SCOREDREAM = "'S-Core Dream', sans-serif";

// 1. 상단 영역
export const headerSection = style({
  position: 'relative',
  width: '100%',
  padding: '6% 16px 20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
  zIndex: 5,
});

export const topLogo = style({
  width: 'clamp(80px, 20vw, 110px)',
  aspectRatio: '110 / 70',
  backgroundImage: 'url("/src/assets/images/logo.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

export const customerCharacter = style({
  position: 'absolute',
  width: 'clamp(50px, 15vw, 100px)',
  aspectRatio: '100 / 90',
  right: '16px',
  top: '20px',
  backgroundImage: 'url("/src/assets/images/FAQ.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  zIndex: 6,
});

export const title = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: 'clamp(20px, 6vw, 24px)',
  marginTop: '15px',
  textAlign: 'center',
  padding: '0 40px',
});

export const searchContainer = style({
  width: '100%',
  maxWidth: '400px',
  marginTop: '15px',
  padding: '0 16px',
  boxSizing: 'border-box',
});

export const searchInput = style({
  width: '100%',
  padding: '12px 20px',
  borderRadius: '30px',
  border: '2px solid #FBC02D',
  fontFamily: SCOREDREAM,
  fontSize: '16px',
  boxSizing: 'border-box',
  outline: 'none',
});

export const tabContainer = style({
  display: 'flex',
  gap: '8px',
  marginTop: '15px',
  padding: '0 16px',
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
  padding: '8px 16px',
  borderRadius: '20px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  fontFamily: SCOREDREAM,
  fontSize: '13px',
  fontWeight: 600,
  flexShrink: 0,
});

export const activeTab = style({
  background: '#FBC02D',
  borderColor: '#FBC02D',
});

// 2. 중앙 스크롤 영역
export const scrollArea = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
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
  boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.08)',
  borderRadius: '15px',
  overflow: 'hidden',
});

export const faqHeader = style({
  width: '100%',
  minHeight: '56px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
});

// ⭐ TSX에서 에러 났던 속성 추가
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
  flexShrink: 0,
});

export const arrowIconOpen = style({
  transform: 'rotate(-135deg)',
});

export const faqAnswer = style({
  padding: '15px 20px',
  fontFamily: SCOREDREAM,
  fontSize: '14px',
  lineHeight: '1.5',
  background: '#F9F9F9',
  borderTop: '1px solid #EFEFEF',
});

// 3. 하단 가이드 프레임
export const guideFrame = style({
  width: 'calc(100% - 32px)',
  minHeight: '260px',
  margin: '20px auto',
  padding: '24px 16px',
  background: '#FFF7D4',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  boxSizing: 'border-box',
});

// ⭐ TSX에서 에러 났던 속성 추가
export const cardTitle = style({
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '16px',
  textAlign: 'center',
  paddingTop: '20px',
});

// ⭐ TSX에서 에러 났던 속성 추가
export const categoryGroup = style({
  display: 'flex',
  width: '100%',
  gap: '8px',
  marginTop: '20px',
});

export const categoryBox = style({
  flex: 1,
  height: '40px',
  background: '#FEFDFD',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  fontFamily: SCOREDREAM,
  fontSize: 'clamp(10px, 2.8vw, 12px)',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const guideButton = style({
  width: '100%',
  maxWidth: '280px',
  height: '52px',
  border: 'none',
  borderRadius: '12px',
  fontFamily: SCOREDREAM,
  fontWeight: 700,
  fontSize: '16px',
  marginTop: 'auto',
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
