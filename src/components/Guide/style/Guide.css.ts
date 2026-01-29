import { style } from '@vanilla-extract/css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  zIndex: 9998,
});

export const highlight = style({
  position: 'fixed',
  border: '3px solid #FF6B6B',
  borderRadius: '12px',
  backgroundColor: 'transparent',
  zIndex: 9999,
  pointerEvents: 'none',
});

export const tooltip = style({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  zIndex: 10000,
});

export const mascot = style({
  width: '120px',
  height: '120px',
  objectFit: 'contain',
  flexShrink: 0,
});

export const bubble = style({
  backgroundColor: '#FFF9E6',
  padding: '16px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  maxWidth: '280px',
  position: 'relative',

  '::before': {
    content: '""',
    position: 'absolute',
    left: '-10px',
    top: '20px',
    width: 0,
    height: 0,
    borderTop: '10px solid transparent',
    borderBottom: '10px solid transparent',
    borderRight: '10px solid #FFF9E6',
  },
});

export const message = style({
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#333',
  margin: 0,
  marginBottom: '12px',
});

export const buttons = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'flex-end',
});

export const skipButton = style({
  padding: '6px 12px',
  backgroundColor: 'transparent',
  border: '1px solid #ddd',
  borderRadius: '6px',
  fontSize: '13px',
  color: '#666',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#f5f5f5',
  },
});

export const nextButton = style({
  padding: '6px 12px',
  backgroundColor: '#FFB84D',
  border: 'none',
  borderRadius: '6px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#fff',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#FF9F2E',
  },
});
