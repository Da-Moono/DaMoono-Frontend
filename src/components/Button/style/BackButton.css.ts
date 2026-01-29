import { style } from '@vanilla-extract/css';

export const buttonWrapper = style({
  padding: '20px 24px 40px', // 하단 여백 충분히
  display: 'flex',
  justifyContent: 'center',
});

export const button = style({
  width: '100%',
  padding: '16px',
  borderRadius: '12px',
  backgroundColor: '#FFF7D4',
  color: '#FFA629',
  fontSize: '16px',
  fontWeight: 700,
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'SCDream',
  transition: 'background-color 0.2s',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',

  selectors: {
    '&:hover': {
      transform: 'translateY(-3px) scale(1.02)', // 위로 5px 이동
      boxShadow: '0 0 10px rgba(255, 181, 76, 0.2)', // 은은한 발광 효과
      cursor: 'pointer', // 클릭 가능하다는 느낌을 줌
    },
    '&:active': {
      transform: 'scale(0.98)',
    },
  },
});
