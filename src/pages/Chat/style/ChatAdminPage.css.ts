import { keyframes, style } from '@vanilla-extract/css';

const bounce = keyframes({
  '0%, 80%, 100%': {
    transform: 'scale(0)',
  },
  '40%': {
    transform: 'scale(1)',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: '#FEFDFD',
  position: 'relative',
});

/*********************
 상담사 페이지 헤더 부분
**********************/
export const header = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '40px',
  padding: '16px 20px',
  marginTop: '60px',
  backgroundColor: '#fff',
  '@media': {
    'screen and (max-width: 768px)': {
      gap: '20px',
      padding: '12px 16px',
    },
    'screen and (max-width: 480px)': {
      gap: '12px',
      padding: '10px 12px',
    },
  },
});

/***********************
 상담사 페이지 요청상담섹션
************************/
export const chatBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  border: '0.5px solid #0000000f',
  borderRadius: '15px',
  margin: '0 14px',
  padding: '30px 0',
  boxShadow: '0 3px 4px rgba(0, 0, 0, 0.1)',
});

export const chatState = style({
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'flex-start',
  gap: '10px',
  fontWeight: 'bold',
  marginLeft: '20px',
  marginBottom: '5px',
});

export const noChatDot = style({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#FF1F1F',
});

export const chatStateIcon = style({
  width: '150px',
  height: '110px',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '120px',
      height: '90px',
    },
    'screen and (max-width: 480px)': {
      width: '100px',
      height: '75px',
    },
  },
});

export const chatCard = style({
  padding: '12px',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: '1px solid #FFDA94',
  width: '90%',
  textAlign: 'left',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
});

export const headerIcon = style({
  width: '150px',
  height: '150px',
  objectFit: 'contain',
  '@media': {
    'screen and (max-width: 768px)': {
      width: '120px',
      height: '120px',
    },
    'screen and (max-width: 480px)': {
      width: '100px',
      height: '100px',
    },
  },
});

export const chatIcon = style({
  width: '20px',
  height: '20px',
  objectFit: 'contain',
});

export const headerTitle = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',
  margin: 0,
});

/******************
 요청상담 카드 스타일
*******************/
export const counselingWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const counselingIdBox = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const counselingId = style({
  fontSize: '16px',
  fontWeight: '500',
  margin: 0,
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '14px',
    },
  },
});

export const sessionIdSmall = style({
  fontSize: '11px',
  fontWeight: '300',
  color: '#999',
  margin: 0,
  marginTop: '2px',
  wordBreak: 'break-all',
  maxWidth: '200px',
});

export const counselingBtn = style({
  padding: '5px 16px',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
  background: `linear-gradient(
    90deg,
    rgba(255, 166, 41, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 36%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 66%,
    rgba(255, 166, 41, 0.2) 100%
  )`,
  color: '#FFA629',
  fontWeight: '500',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '12px',
      padding: '4px 12px',
    },
  },
});

export const endButton = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 300,
  color: '#070707',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '6px 10px',
  transition: 'opacity 0.3s',
  ':hover': {
    opacity: 0.7,
  },
});

export const statusContainer = style({
  padding: '4px 20px 8px',
  backgroundColor: '#fff',
});

export const statusHeader = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '6px',
});

export const statusIndicator = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const statusDot = style({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#1FFF6A',
});

export const statusText = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 500,
  color: '#333',
});

export const statusSubtext = style({
  fontFamily: 'S-Core Dream',
  fontSize: '10px',
  fontWeight: 300,
  color: '#999',
  margin: 0,
});

export const content = style({
  flex: 1,
  overflowY: 'auto',
  padding: '20px',
  backgroundColor: '#FEFDFD',
});

export const messagesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const messageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

// 상담사 메시지 (오른쪽)
export const consultantMessageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '4px',
});

export const consultantMessage = style({
  backgroundColor: '#FFFFB5',
  borderRadius: '15px',
  borderTopRightRadius: '0',
  padding: '12px 16px',
  maxWidth: '70%',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const consultantText = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#000',
  margin: 0,
  wordBreak: 'break-word',
});

// 사용자 메시지 (왼쪽)
export const userMessageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

export const userHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
});

export const userName = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#333',
});

export const userMessage = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  borderTopLeftRadius: '0',
  padding: '12px 16px',
  maxWidth: '70%',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const userText = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#000',
  margin: 0,
  wordBreak: 'break-word',
  lineHeight: '1.5',
});

export const timestamp = style({
  fontFamily: 'S-Core Dream',
  fontSize: '12px',
  fontWeight: 300,
  color: '#878787',
  marginLeft: '8px',
});

export const loadingDots = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  padding: '4px 0',
});

export const loadingDot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#999',
  animation: `${bounce} 1.4s infinite ease-in-out both`,
  selectors: {
    '&:nth-child(1)': {
      animationDelay: '-0.32s',
    },
    '&:nth-child(2)': {
      animationDelay: '-0.16s',
    },
  },
});

export const logoutContainer = style({
  padding: '16px 20px',
  margin: '30px 0',
  backgroundColor: '#fff',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 100,
});

export const logoutButton = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 500,
  color: '#FF4444',
  backgroundColor: '#fff',
  border: '1px solid #FF4444',
  borderRadius: '8px',
  padding: '12px 40px',
  cursor: 'pointer',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: '#FF4444',
    color: '#fff',
  },
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '14px',
      padding: '10px 32px',
    },
  },
});

export const endChatCard = style({
  padding: '12px',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'all 0.2s',
  border: '1px solid #220404',
  width: '90%',
  textAlign: 'left',
});

export const endCounselingBtn = style({
  padding: '5px 16px',
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  borderRadius: '20px',
  background: `linear-gradient(
    90deg,
    rgba(255, 166, 41, 0.2) 0%,
    rgba(255, 255, 255, 0.2) 36%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.2) 66%,
    rgba(255, 166, 41, 0.2) 100%
  )`,
  color: '#030000',
  fontWeight: '500',
  fontSize: '14px',
  whiteSpace: 'nowrap',
  '@media': {
    'screen and (max-width: 480px)': {
      fontSize: '12px',
      padding: '4px 12px',
    },
  },
});
