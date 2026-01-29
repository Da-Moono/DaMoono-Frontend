import { style, styleVariants } from '@vanilla-extract/css';

/**********************
  Tips 페이지 css 스타일
 **********************/
export const header = style({
  marginTop: '61.8px',
  background: '#FFDA94',
  padding: '40px 20px',
});

export const badge = style({
  display: 'inline-block',
  fontSize: '13px',
  fontWeight: 600,
  padding: '6px 12px',
  borderRadius: '9999px', // pill 핵심
  border: '1px solid #000',
  marginBottom: '12px',
  backgroundColor: 'transparent',
});

export const guide = style({
  marginTop: '10px',
  fontSize: '28px',
  fontWeight: 800,
  lineHeight: 1.3,
  textAlign: 'center',
});

export const featureSection = style({
  padding: '40px 20px',
  margin: '0 16px 0 16px',
});

export const featureTitle = style({
  fontSize: '24px',
  fontWeight: 700,
  marginBottom: '20px',
});

export const featureList = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  fontSize: '16px',
});

export const featureItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  fontSize: '16px',
});

export const checkBox = style({
  width: '20px',
  height: '20px',
  border: '2px solid #555',
  borderRadius: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: 1,
});

/*************************
  TipsGuide섹션 CSS 스타일
 *************************/
export const section = style({
  marginBottom: '100px',
});

/*************************
  Tips 인디케이터 CSS 스타일
 *************************/
export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '12px',
});

const baseDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  margin: '0 4px',
  cursor: 'pointer',
  background: '#D9D9D9',
  border: 'none',
  padding: 0,
});

export const dot = styleVariants({
  inactive: [baseDot],
  active: [
    baseDot,
    {
      background: '#FFC83D',
    },
  ],
});

/********************
  TipsCard CSS 스타일
 ********************/
export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '432px',
  background: '#fff',
  borderRadius: '12px',
  padding: '32px',
  margin: '0 auto',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
});

export const numberBadge = style({
  width: '32px',
  background: '#FBE88A',
  padding: '4px 10px',
  borderRadius: '10px',
  fontSize: '12px',
  color: '#fff',
});

export const title = style({
  marginTop: '4px',
});

export const description = style({
  fontSize: '14px',
  color: '#666',
  marginBottom: '16px',
});

export const image = style({
  width: '200px',
  margin: '0 auto',
  display: 'block',
});
