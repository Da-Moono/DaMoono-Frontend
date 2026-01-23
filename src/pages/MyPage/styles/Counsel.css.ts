import { style } from '@vanilla-extract/css';

export const container = style({
  margin: '50px 8px 0px 8px',
  padding: '16px',
});

export const header = style({
  marginTop: '30px',
  marginBottom: '16px',
});

export const headerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '20px 2px 30px 2px',
});

export const title = style({
  marginBottom: '4px',
});

export const count = style({
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#666',
});

export const strong = style({
  color: '#E34698',
  fontWeight: 'bold',
});

export const select = style({
  fontSize: '13px',
  padding: '6px 10px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  cursor: 'pointer',

  selectors: {
    '&:focus': {
      outline: 'none',
      borderColor: '#999',
    },
  },
});

export const list = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  margin: '0px 3px 100px 3px',
});

export const section = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const date = style({
  fontSize: '13px',
  fontWeight: 600,
  color: '#444',
});

export const card = style({
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: '12px',
  padding: '14px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  position: 'relative',

  minHeight: '60px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const cardHeader = style({});

export const done = style({
  fontSize: '12px',
  fontWeight: 600,
  color: '#1E7F43',
  backgroundColor: '#E6F4EA',
  padding: '4px 12px',
  borderRadius: '25px',
  display: 'inline-block',
});

export const pending = style({
  fontSize: '12px',
  fontWeight: 600,
  color: '#C0267C',
  backgroundColor: '#FCE7F3',
  padding: '4px 12px',
  borderRadius: '25px',
  display: 'inline-block',
});

export const content = style({
  fontSize: '14px',
  lineHeight: '20px',
  color: '#222',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  paddingRight: '80px',
  marginBottom: '12px',
});

export const summaryBtn = style({
  position: 'absolute',
  right: '12px',
  bottom: '30px',

  fontSize: '13px',
  fontWeight: '500',
  padding: '8px 12px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#FFF4CC',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',

  selectors: {
    '&:hover': {
      backgroundColor: '#FFE082',
    },
  },
});
