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

export const headerWrapper = style({
  position: 'sticky',
  paddingTop: '60px',
  top: 0,
  zIndex: 10,
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
  backgroundColor: '#FF1F1F',
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
  paddingBottom: '180px',
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

export const inputWrapper = style({
  position: 'fixed',
  bottom: '80px',
  left: 0,
  right: 0,
  width: '100%',
  zIndex: 8,
});
