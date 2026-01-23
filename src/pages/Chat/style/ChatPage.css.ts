import { keyframes, style } from '@vanilla-extract/css';

// 로딩 애니메이션
const dotFlashing = keyframes({
  '0%, 80%, 100%': {
    opacity: 0.3,
  },
  '40%': {
    opacity: 1,
  },
});

// Container
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#FEFDFD',
  position: 'relative',
  maxWidth: '480px',
  margin: '0 auto',
});

// Chat Header (채팅 페이지 내부 헤더)
export const chatHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
});

export const headerIcon = style({
  width: '20px',
  height: '20px',
});

export const headerTitle = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',
});

// Content
export const content = style({
  flex: 1,
  overflowY: 'auto',
  padding: '20px',
  paddingBottom: '180px',
});

// Welcome Section
export const welcomeSection = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '24px',
});

export const welcomeIcon = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
});

export const welcomeText = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 500,
  color: '#333',
  lineHeight: '1.5',
  margin: 0,
});

// Recommended Questions
export const recommendedSection = style({
  marginBottom: '20px',
});

export const recommendedTitle = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 600,
  color: '#727272',
  margin: 0,
  marginBottom: '16px',
});

export const questionList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'flex-start',
});

export const questionButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  padding: '10px 16px',
  backgroundColor: '#fff',
  border: 'none',
  borderRadius: '40px',
  fontFamily: 'S-Core Dream',
  fontSize: '13px',
  fontWeight: 400,
  color: '#000',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'nowrap',

  ':hover': {
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-2px)',
  },
});

export const infoIcon = style({
  width: '18px',
  height: '18px',
});

// Messages
export const messagesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const messageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
});

export const userMessageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  gap: '4px',
});

export const userMessage = style({
  backgroundColor: '#FFFFB5',
  borderRadius: '15px',
  borderTopRightRadius: '0',
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
});

export const assistantMessageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
});

export const assistantHeader = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '4px',
});

export const botIcon = style({
  width: '30px',
  height: '30px',
  borderRadius: '50%',
});

export const botName = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#333',
});

export const assistantMessage = style({
  backgroundColor: '#FFFFFF',
  borderRadius: '15px',
  borderTopLeftRadius: '0',
  padding: '12px 16px',
  maxWidth: '70%',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
});

export const assistantText = style({
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

// 로딩 애니메이션
export const loadingDots = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  padding: '8px 0',
});

export const loadingDot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#999',
  animation: `${dotFlashing} 1.4s infinite ease-in-out`,
  selectors: {
    '&:nth-child(1)': {
      animationDelay: '0s',
    },
    '&:nth-child(2)': {
      animationDelay: '0.2s',
    },
    '&:nth-child(3)': {
      animationDelay: '0.4s',
    },
  },
});
