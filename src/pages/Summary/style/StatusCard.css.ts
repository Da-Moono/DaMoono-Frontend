import { style } from '@vanilla-extract/css';

export const CardContainer = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  paddingBottom: 5,
  backgroundColor: '#FEFDFD',

  transition: 'all 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)', // 위로 5px 이동
      boxShadow: '0 0 10px rgba(255, 181, 76, 0.2)', // 은은한 발광 효과
      cursor: 'pointer', // 클릭 가능하다는 느낌을 줌
    },
  },
});

export const content = style({
  padding: '20px 16px',
  width: '100%',
});

export const titleSection = style({
  display: 'flex', // 가로로 나열
  alignItems: 'center',
  gap: '5px',
  paddingLeft: 10,
  paddingBottom: 5,
});

export const statusImg = style({
  alignItems: 'center',
  filter:
    'invert(85%) sepia(91%) saturate(1898%) hue-rotate(62deg) brightness(101%) contrast(101%)',
});

export const statusTitle = style({
  alignItems: 'center',
  fontFamily: 'SCDream',
  fontWeight: 600,
  fontSize: '15px',
});

export const statusList = style({
  paddingLeft: 10,
});
