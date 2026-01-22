import { style } from '@vanilla-extract/css';

export const container = style({
<<<<<<< HEAD
  padding: '20px',
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

export const slider = style({
  width: '100%',
  overflow: 'hidden',
});

export const sliderCard = style({
  width: '100%',
  height: '200px',
  background: 'linear-gradient(135deg, #FFB6D9 0%, #D5A5FF 100%)',
  borderRadius: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px',
});

export const sliderContent = style({
  padding: '16px 32px',
  backgroundColor: '#FFB6D9',
  borderRadius: '30px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#fff',
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
=======
  color: 'red',
>>>>>>> 3e2f934 (feat : 고객센터 페이지 구현)
});
