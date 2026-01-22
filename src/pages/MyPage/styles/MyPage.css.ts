import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '16px',
  paddingBottom: '80px',
  background: '#fff',
});

export const counselCard = style({
  background: '#333',
  color: '#fff',
  borderRadius: '12px',
  padding: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const logout = style({
  width: '100%',
  marginTop: '24px',
  padding: '12px',
  borderRadius: '8px',
  background: '#FFE07A',
  border: 'none',
  fontWeight: 600,
});
