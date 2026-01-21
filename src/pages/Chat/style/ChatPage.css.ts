import { style } from '@vanilla-extract/css';

// Container
export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  backgroundColor: '#FEFDFD',
});

// Header
export const header = style({
  position: 'fixed',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 20px',
  backgroundColor: '#fff',
  borderBottom: '1px solid #f0f0f0',
  zIndex: 100,
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
  paddingTop: '80px',
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
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  whiteSpace: 'nowrap',

  ':hover': {
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
    transform: 'translateY(-2px)',
  },
});

export const infoIcon = style({
  width: '12px',
  height: '12px',
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

// Input
export const inputContainer = style({
  position: 'fixed',
  bottom: '70px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  padding: '16px 20px',
  backgroundColor: '#fff',
  borderTop: '1px solid #f0f0f0',
});

export const menu = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '12px',
});

export const menuItem = style({
  padding: '8px 16px',
  backgroundColor: '#f5f5f5',
  border: 'none',
  borderRadius: '20px',
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 400,
  color: '#333',
  cursor: 'pointer',
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#e0e0e0',
  },
});

export const inputWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const plusButton = style({
  width: '40px',
  height: '40px',
  backgroundColor: 'transparent',
  border: '1px solid #666666',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'background-color 0.2s',

  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const plusIcon = style({
  width: '20px',
  height: '20px',
});

export const inputBox = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 16px',
  backgroundColor: '#fff',
  border: '1px solid #CDCDCD',
  borderRadius: '30px',
});

export const input = style({
  flex: 1,
  border: 'none',
  outline: 'none',
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',

  '::placeholder': {
    color: '#CDCDCD',
  },
});

export const iconButton = style({
  width: '24px',
  height: '24px',
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
});

export const icon = style({
  width: '100%',
  height: '100%',
});

// Bottom Nav
export const bottomNav = style({
  position: 'fixed',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '480px',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: '#fff',
  borderTop: '1px solid #e0e0e0',
  padding: '12px 0',
  paddingBottom: 'calc(12px + env(safe-area-inset-bottom))',
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4px',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  color: '#999',
  transition: 'color 0.2s',

  ':hover': {
    color: '#333',
  },
});

export const navIcon = style({
  fontSize: '24px',
});

export const navLabel = style({
  fontFamily: 'S-Core Dream',
  fontSize: '12px',
  fontWeight: 400,
});
