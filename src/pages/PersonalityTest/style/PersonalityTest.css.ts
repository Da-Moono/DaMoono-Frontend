import { keyframes, style } from '@vanilla-extract/css';

const floatAnimation = keyframes({
  '0%, 100%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-10px)',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 80px)',
  padding: '40px 20px',
  textAlign: 'center',
});

export const mascot = style({
  width: '200px',
  height: '200px',
  objectFit: 'contain',
  marginBottom: '60px',
  animation: `${floatAnimation} 2s ease-in-out infinite`,
});

export const title = style({
  fontSize: '24px',
  fontWeight: '400',
  color: '#666',
  margin: 0,
  marginBottom: '20px',
  lineHeight: '1.5',
});

export const highlight = style({
  color: '#FF6B9D',
  fontWeight: '700',
});

export const description = style({
  fontSize: '16px',
  color: '#999',
  lineHeight: '1.6',
  margin: 0,
  marginBottom: '60px',
});

export const startButton = style({
  width: '340px',
  maxWidth: '100%',
  padding: '18px 32px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

// 질문 화면 스타일
export const questionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  paddingTop: '100px',
  paddingBottom: '100px',
  minHeight: 'calc(100vh - 80px)',
});

export const questionNumber = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
  backgroundColor: '#fff',
  border: '2px solid #333',
  borderRadius: '20px',
  padding: '8px 20px',
  marginBottom: '30px',
});

export const questionMascot = style({
  width: '180px',
  height: '180px',
  objectFit: 'contain',
  marginBottom: '30px',
});

export const questionText = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',
  margin: 0,
  marginBottom: '40px',
  lineHeight: '1.5',
});

export const optionsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  maxWidth: '340px',
});

export const optionButton = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: '#E8E8E8',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '500',
  color: '#666',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#D8D8D8',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const optionButtonPrimary = style({
  width: '100%',
  padding: '16px 24px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '12px',
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
  cursor: 'pointer',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const nextButton = style({
  width: '100%',
  maxWidth: '340px',
  padding: '18px 32px',
  backgroundColor: '#333',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  color: '#fff',
  cursor: 'pointer',
  marginTop: '40px',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#444',
    transform: 'translateY(-2px)',
  },

  ':active': {
    transform: 'translateY(0)',
  },

  ':disabled': {
    backgroundColor: '#ccc',
    color: '#999',
    cursor: 'not-allowed',
    transform: 'none',
  },
});
