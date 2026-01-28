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

// 로딩 화면 스타일
const pulseAnimation = keyframes({
  '0%, 100%': {
    opacity: 1,
  },
  '50%': {
    opacity: 0.5,
  },
});

const loadingBarAnimation = keyframes({
  '0%': {
    width: '0%',
  },
  '100%': {
    width: '100%',
  },
});

export const loadingMascot = style({
  width: '280px',
  height: '280px',
  objectFit: 'contain',
  marginBottom: '60px',
  animation: `${pulseAnimation} 2s ease-in-out infinite`,
});

export const loadingTitle = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',
  lineHeight: '1.6',
  margin: 0,
  marginBottom: '40px',
});

export const loadingBarContainer = style({
  width: '100%',
  maxWidth: '340px',
  height: '8px',
  backgroundColor: '#E8E8E8',
  borderRadius: '4px',
  overflow: 'hidden',
});

export const loadingBar = style({
  height: '100%',
  backgroundColor: '#F4E185',
  borderRadius: '4px',
  animation: `${loadingBarAnimation} 3s ease-in-out forwards`,
});

// 분석 완료 화면 스타일
export const completeMascot = style({
  width: '200px',
  height: '200px',
  objectFit: 'contain',
  marginBottom: '60px',
  animation: `${floatAnimation} 2s ease-in-out infinite`,
});

export const completeTitle = style({
  fontSize: '24px',
  fontWeight: '400',
  color: '#666',
  textAlign: 'center',
  lineHeight: '1.6',
  margin: 0,
  marginBottom: '60px',
});

// 결과 화면 스타일
export const resultContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px 20px',
  paddingTop: '100px',
  paddingBottom: '100px',
  minHeight: 'calc(100vh - 80px)',
});

export const resultTitle = style({
  fontSize: '28px',
  fontWeight: '700',
  color: '#333',
  textAlign: 'center',
  lineHeight: '1.5',
  margin: 0,
  marginBottom: '60px',
});

export const resultSection = style({
  width: '100%',
  maxWidth: '800px',
  marginBottom: '60px',
});

export const resultSectionTitle = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#333',
  marginBottom: '24px',
  textAlign: 'center',
});

export const resultCardList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '100%',
});

export const resultCard = style({
  width: '100%',
  padding: '24px',
  backgroundColor: '#fff',
  border: '2px solid #E8E8E8',
  borderRadius: '16px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  textAlign: 'left',

  ':hover': {
    backgroundColor: '#F9F9F9',
    transform: 'translateY(-4px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
});

export const resultCardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '12px',
});

export const resultCardProvider = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#666',
});

export const resultCardCategory = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#666',
});

export const resultCardPrice = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#FF6B9D',
});

export const resultCardName = style({
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  marginBottom: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const resultBadgeContainer = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '16px',
});

export const resultBadge = style({
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '12px',
  fontWeight: '600',
});

export const resultBadgeData = style({
  backgroundColor: '#E3F2FD',
  color: '#1976D2',
});

export const resultBadgeVoice = style({
  backgroundColor: '#F3E5F5',
  color: '#7B1FA2',
});

export const resultBadgeSpeed = style({
  backgroundColor: '#FFF3E0',
  color: '#F57C00',
});

export const resultBadgeHighlight = style({
  backgroundColor: '#F4E185',
  color: '#333',
});

export const resultBadgeCategory = style({
  backgroundColor: '#E8E8E8',
  color: '#666',
});

export const resultOttContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

export const resultOttCircle = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  border: '2px solid #fff',
});

export const resultOttCircleOverlap = style({
  marginLeft: '-8px',
});

export const resultSubscribeContainer = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const resultSubscribeCircle = style({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  fontSize: '20px',
  fontWeight: '700',
  color: '#666',
});

export const resultSubscribeImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});
