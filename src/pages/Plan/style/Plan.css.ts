import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  paddingBottom: '80px',
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  marginBottom: '24px',
});

export const planList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const planItem = style({
  padding: '16px',
  backgroundColor: '#f9f9f9',
  borderRadius: '12px',
});

export const planInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const planName = style({
  fontSize: '14px',
  color: '#333',
  margin: 0,
  lineHeight: '1.4',
});

export const planPrice = style({
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
});
