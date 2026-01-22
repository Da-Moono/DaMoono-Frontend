import { style } from '@vanilla-extract/css';

export const tabs = style({
  display: 'flex',
  gap: '8px',
  marginTop: '16px',
});

export const tab = style({
  flex: 1,
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #eee',
  background: '#fafafa',
});

export const menuSection = style({
  marginTop: '20px',
});

export const menuTitle = style({
  fontSize: '14px',
  fontWeight: 600,
  marginBottom: '8px',
});

export const menuList = style({
  background: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #eee',
});

export const menuItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 12px',
  borderBottom: '1px solid #f2f2f2',
  selectors: {
    '&:last-child': { borderBottom: 'none' },
  },
});

export const menuLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const icon = style({
  fontSize: '16px',
});

export const arrow = style({
  color: '#bbb',
});
