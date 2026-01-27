import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  marginTop: '16px',
  maxWidth: '100%',
});

export const cardWrapper = style({
  overflow: 'auto',
  border: '1px solid #E5E5E5',
  borderRadius: '20px',
  backgroundColor: '#fff',
  scrollSnapType: 'x mandatory',
  scrollbarWidth: 'none',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const cardTrack = style({
  display: 'flex',
});

export const card = style({
  minWidth: '100%',
  padding: '24px 20px',
  backgroundColor: '#fff',
  scrollSnapAlign: 'start',
  display: 'flex',
  flexDirection: 'column',
});

export const cardTitle = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  color: '#1A1A1A',
  margin: 0,
  marginBottom: '16px',
  lineHeight: '1.4',
});

export const cardOriginalPrice = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#999',
  margin: 0,
  marginBottom: '6px',
  textDecoration: 'line-through',
});

export const cardDiscountPrice = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 600,
  color: '#E91685',
  margin: 0,
  marginBottom: '16px',
});

export const cardPrice = style({
  fontFamily: 'SCDream',
  fontSize: '20px',
  fontWeight: 700,
  color: '#E91685',
  margin: 0,
  marginBottom: '16px',
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#E9E9E9',
  margin: '16px 0',
});

export const mainFeature = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  color: '#451D95',
  margin: 0,
  marginTop: '12px',
  marginBottom: '16px',
  textAlign: 'left',
  padding: '8px 0',
});

export const mainFeatureLabel = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#767676',
  marginRight: '8px',
});

export const descriptionRow = style({
  marginTop: '12px',
  marginBottom: '8px',
  padding: '12px',
  backgroundColor: '#F8F9FA',
  borderRadius: '8px',
});

export const descriptionText = style({
  fontFamily: 'SCDream',
  fontSize: '13px',
  fontWeight: 400,
  color: '#666',
  lineHeight: '1.5',
  margin: 0,
  display: 'block',
  whiteSpace: 'normal',
  wordBreak: 'keep-all',
});

export const cardDetails = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  marginTop: '8px',
});

export const detailRow = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '4px 0',
});

export const detailLabel = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#767676',
});

export const detailValue = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 600,
  color: '#1A1A1A',
});

export const crewImage = style({
  width: '60%',
  maxWidth: '200px',
  height: 'auto',
  margin: 'auto',
  display: 'block',
  borderRadius: '12px',
  flex: 1,
  objectFit: 'contain',
});

export const moreButton = style({
  width: '100%',
  padding: '14px 20px',
  backgroundColor: '#ECE7FF',
  border: 'none',
  borderRadius: '12px',
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 600,
  color: '#451D95',
  cursor: 'pointer',
  transition: 'all 0.2s',
  display: 'block',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: '20px',

  '@media': {
    '(max-width: 400px)': {
      fontSize: '13px',
      padding: '12px 16px',
    },
    '(max-width: 350px)': {
      fontSize: '12px',
      padding: '10px 12px',
    },
  },

  ':hover': {
    backgroundColor: '#DDD5FF',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(69, 29, 149, 0.15)',
  },

  ':active': {
    transform: 'translateY(0)',
  },
});

export const navigation = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  marginTop: '16px',
  padding: '8px 0',
});

export const navButton = style({
  width: '36px',
  height: '36px',
  backgroundColor: '#fff',
  border: '1.5px solid #E0E0E0',
  borderRadius: '50%',
  fontSize: '16px',
  fontWeight: 600,
  color: '#666',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s',

  ':hover': {
    backgroundColor: '#F8F8F8',
    borderColor: '#451D95',
    color: '#451D95',
  },

  ':disabled': {
    opacity: 0.3,
    cursor: 'not-allowed',
    backgroundColor: '#fff',
    borderColor: '#E0E0E0',
    color: '#666',
  },
});

export const pageIndicator = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#666',
  minWidth: '60px',
  textAlign: 'center',
});
