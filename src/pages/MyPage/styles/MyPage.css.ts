import { style } from '@vanilla-extract/css';

// 마이페이지 기본 컨테이너 스타일
export const container = style({
  padding: '16px',
  background: '#FEFDFD',
});

/*************************
  상담 조희 섹션 스타일 영역
 *************************/
export const counselCard = style({
  background: '#333',
  height: '70px',
  color: '#fff',
  borderRadius: '12px',
  padding: '14px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const counselCnt = style({
  color: '#E34698',
});

export const counselTitle = style({
  minHeight: '24px',
  marginLeft: '10px',
  marginBottom: '8px',
});

export const counselText = style({
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  fontSize: '16px',
  fontWeight: 'bold',
  marginLeft: '20px',
  transition: 'transform 0.2s ease',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      transform: 'translateX(2px)',
    },
  },
});

export const arrow = style({
  fontSize: '20px',
  fontWeight: 400,
  marginLeft: '10px',
});

export const counselBtn = style({
  minHeight: '30px',
  padding: '10px',
  marginRight: '10px',
  borderRadius: '12px',
  fontWeight: 'bold',
  border: 'none',
  color: 'rgba(0, 0, 0, 0.7)',
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  willChange: 'transform',

  selectors: {
    '&:hover': {
      transform: 'translateY(-2px)',
    },

    '&:active': {
      transform: 'translateY(0)',
    },
  },
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
