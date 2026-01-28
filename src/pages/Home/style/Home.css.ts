import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  paddingTop: '80px',
  paddingBottom: '80px',
});

export const chatButton = style({
  width: '100%',
  padding: '20px',
  backgroundColor: '#F4E185',
  border: 'none',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
  marginBottom: '30px',
  transition: 'all 0.2s ease',

  ':hover': {
    backgroundColor: '#F0D96F',
  },
});

export const chatText = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#333',
});

export const chatBadge = style({
  padding: '8px 16px',
  backgroundColor: '#FFB84D',
  borderRadius: '20px',
  fontSize: '14px',
  fontWeight: '600',
  color: '#fff',
});

export const section = style({
  marginBottom: '30px',
});

export const sectionHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const sectionTitle = style({
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  marginBottom: '16px',
});

export const moreButton = style({
  background: 'none',
  border: 'none',
  fontSize: '14px',
  color: '#999',
  cursor: 'pointer',

  ':hover': {
    color: '#666',
  },
});

export const emptyState = style({
  padding: '40px 20px',
  textAlign: 'center',
  color: '#999',
  fontSize: '14px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
});

export const sliderWrapper = style({
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '16px',
});

export const sliderTrack = style({
  display: 'flex',
  transition: 'transform 0.3s ease-in-out',
});

export const sliderCard = style({
  minWidth: '100%',
  height: '240px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  flexShrink: 0,
  position: 'relative',
  border: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  backgroundColor: '#f5f5f5',

  ':disabled': {
    cursor: 'default',
  },
});

export const sliderImage = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center -10px',
});

export const sliderArrowLeft = style({
  position: 'absolute',
  left: '4px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '48px',
  fontWeight: '300',
  color: 'rgba(255, 255, 255, 0.7)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',

  ':hover': {
    color: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-50%) scale(1.2)',
  },

  ':active': {
    transform: 'translateY(-50%) scale(1)',
  },
});

export const sliderArrowRight = style({
  position: 'absolute',
  right: '4px',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  backgroundColor: 'transparent',
  border: 'none',
  fontSize: '48px',
  fontWeight: '300',
  color: 'rgba(255, 255, 255, 0.7)',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',

  ':hover': {
    color: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-50%) scale(1.2)',
  },

  ':active': {
    transform: 'translateY(-50%) scale(1)',
  },
});

export const sliderContent = style({
  padding: '16px 32px',
  backgroundColor: '#FFB6D9',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#fff',
  marginBottom: '40px',
});

export const sliderDots = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  position: 'absolute',
  bottom: '16px',
  left: '50%',
  transform: 'translateX(-50%)',
});

export const dot = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition: 'all 0.3s ease',

  ':hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export const dotActive = style({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#fff',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
});

export const tabs = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '16px',
});

export const tab = style({
  padding: '8px 24px',
  backgroundColor: '#f5f5f5',
  border: 'none',
  borderRadius: '20px',
  fontSize: '14px',
  color: '#999',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#e0e0e0',
  },
});

export const tabActive = style({
  padding: '8px 24px',
  backgroundColor: '#333',
  border: 'none',
  borderRadius: '20px',
  fontSize: '14px',
  color: '#fff',
  cursor: 'pointer',
  fontWeight: '600',
});

export const productList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const productItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '16px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  border: 'none',
  width: '100%',
  textAlign: 'left',

  ':hover': {
    backgroundColor: '#f0f0f0',
    transform: 'translateY(-2px)',
  },
});

export const productRank = style({
  width: '24px',
  height: '24px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: '700',
  flexShrink: 0,
});

export const productIcon = style({
  width: '48px',
  height: '48px',
  backgroundColor: '#fff',
  borderRadius: '50%',
  flexShrink: 0,
});

export const productInfo = style({
  flex: 1,
});

export const productName = style({
  fontSize: '14px',
  color: '#333',
  margin: 0,
  marginBottom: '4px',
  lineHeight: '1.4',
});

export const productPrice = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
});
