import { style } from '@vanilla-extract/css';

// 상단 영역
export const headerSection = style({
  position: 'relative',
  width: '100%',
  height: '280px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '15px',
  zIndex: 5,
});

export const topLogo = style({
  width: '110px',
  height: '70px',
  backgroundImage: 'url("/src/assets/images/logo.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
});

export const faqCharacter = style({
  position: 'absolute',
  width: '100px',
  height: '90px',
  right: '16px',
  top: '40px',
  backgroundImage: 'url("/src/assets/images/FAQ.png")',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  zIndex: 6,
});

export const title = style({
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '24px',
  marginTop: '10px',
  textAlign: 'center',
});

export const searchContainer = style({
  width: 'calc(100% - 32px)',
  marginTop: '12px',
});

export const searchInput = style({
  width: '100%',
  padding: '10px 20px',
  borderRadius: '30px',
  border: '2px solid #FBC02D',
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: '15px',
  boxSizing: 'border-box',
  outline: 'none',
});

export const tabContainer = style({
  display: 'flex',

  justifyContent: 'center',
  gap: '8px',
  marginTop: '12px',
  padding: '0 16px',
  width: '100%',
  boxSizing: 'border-box',
  overflowX: 'auto',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
});

export const categoryTab = style({
  padding: '5px 12px',
  borderRadius: '20px',
  background: '#FFFFFF',
  border: '1px solid #EFEFEF',
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: '13px',
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
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
  paddingBottom: '100px',
});

export const faqListWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '0 24px',
  width: '100%',
  boxSizing: 'border-box',
});

export const faqItemBox = style({
  width: '100%',
  background: '#FEFDFD',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.08)',
  borderRadius: '15px',
  overflow: 'hidden',
});

export const faqHeader = style({
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: '15px',
  fontWeight: 700,
  background: 'none',
  border: 'none',
  cursor: 'pointer',
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
  marginTop: '4px',
});

export const faqAnswer = style({
  padding: '12px 20px 15px',
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: '14px',
  fontWeight: 400,
  background: '#F9F9F9',
  borderTop: '1px solid #EFEFEF',
});

// 하단 가이드 프레임
export const guideFrame = style({
  width: 'calc(100% - 48px)',
  height: '320px',
  margin: '20px 24px',
  background: '#FFF7D4',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const categoryBox = style({
  width: '120px',
  height: '36px',
  background: '#FEFDFD',
  border: '1px solid #EFEFEF',
  borderRadius: '8px',
  fontFamily: "'S-Core Dream', sans-serif",
  fontSize: '11px',
  fontWeight: 700,
  cursor: 'pointer',
});

export const guideButton = style({
  width: 'calc(100% - 48px)',
  maxWidth: '240px',
  height: '48px',
  border: 'none',
  borderRadius: '12px',
  fontFamily: "'S-Core Dream', sans-serif",
  fontWeight: 700,
  fontSize: '16px',
  marginTop: 'auto',
  marginBottom: '40px',
  cursor: 'pointer',
});

export const buttonDisabled = style({
  background: 'rgba(251, 232, 138, 0.44)',
  color: 'rgba(0, 0, 0, 0.4)',
});

export const buttonActive = style({
  background: '#FBC02D',
  color: '#000',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: '#F9A825',
    },
  },
});
