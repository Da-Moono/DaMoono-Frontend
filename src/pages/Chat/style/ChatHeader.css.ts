import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  padding: '16px 20px',
  backgroundColor: '#fff',
});

export const headerLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flex: 1,
});

export const backButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '18px',
  padding: '4px 8px',
  marginRight: '4px',
  color: '#666',
  transition: 'color 0.3s',
  ':hover': {
    color: '#333',
  },
});

export const headerIcon = style({
  width: '20px',
  height: '20px',
  objectFit: 'contain',
});

export const headerTitle = style({
  fontFamily: 'S-Core Dream',
  fontSize: '16px',
  fontWeight: 400,
  color: '#333',
  margin: 0,
});

export const headerRight = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export const endButton = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 300,
  color: '#070707',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  padding: '6px 10px',
  transition: 'opacity 0.3s',
  ':hover': {
    opacity: 0.7,
  },
});

export const summaryButton = style({
  fontFamily: 'S-Core Dream',
  fontSize: '14px',
  fontWeight: 500,
  color: '#333',
  backgroundColor: '#FBE88A',
  border: 'none',
  borderRadius: '10px',
  padding: '6px 14px',
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s',
  ':hover': {
    backgroundColor: '#FFE253',
    boxShadow: '0 3px 6px rgba(0, 0, 0, 0.15)',
  },
});
