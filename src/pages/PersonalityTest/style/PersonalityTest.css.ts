import { style } from '@vanilla-extract/css';

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
