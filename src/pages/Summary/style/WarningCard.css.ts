import { style } from '@vanilla-extract/css';

export const CardContainer = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  backgroundColor: '#FEFBE8',

  transition: 'all 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)', // 위로 5px 이동
      boxShadow: '0 0 10px rgba(255, 181, 76, 0.2)', // 은은한 발광 효과
      cursor: 'pointer', // 클릭 가능하다는 느낌을 줌
    },
  },
});

export const header = style({
  display: 'flex', // 가로로 나열
  alignItems: 'center',
  gap: '5px',
  backgroundColor: '#FFDA94',
  padding: '10px 12px',
  borderBottom: '1px solid #00000005',
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: '15px',
});

export const content = style({
  width: '100%',
});

export const imgItem = style({
  width: 20,
  height: 20,
  marginTop: 5,
  marginLeft: 5,
});

export const warningItem = style({
  backgroundColor: '#FFFDF6',
  margin: 10,
  padding: 10,
  borderRadius: 15,

  display: 'flex',
  alignItems: 'flex-start', // 아이콘이 텍스트 첫 줄에 맞게 정렬
  gap: '8px', // 아이콘과 텍스트 사이 간격
});

export const textWrapper = style({});

export const warningTitle = style({
  display: 'inline',
  alignItems: 'center',
  color: '#F54A00',
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: '13px',
});

export const warningText = style({
  display: 'inline',

  alignItems: 'center',
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: '13px',
  lineHeight: '1.4',
});
