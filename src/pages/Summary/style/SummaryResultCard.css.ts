import { style } from '@vanilla-extract/css';

export const CardContainer = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  paddingBottom: 20,
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

export const header = style({
  display: 'flex', // 가로로 나열
  alignItems: 'center',
  gap: '5px',
  backgroundColor: '#FFF7D4',
  padding: '10px 12px',
  borderBottom: '1px solid #00000005',
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: '15px',
});

export const content = style({
  padding: '20px 16px',
  width: '85%',
});

export const summaryWrapper = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  lineHeight: '1.6',
  marginBottom: '25px',
  wordBreak: 'keep-all', // 띄어쓰기 단위로 줄바꿈 될 수 있도록 설정
  overflowWrap: 'break-word',
});

export const summaryTitle = style({
  // inline 속성을 사용하면 텍스트 흐름으로 취급됨. 형광펜 효과를 위함
  display: 'inline',
  background: 'linear-gradient(to top, #FFF7D4 40%, transparent 40%)',
});

export const actionTitle = style({
  fontFamily: 'SCDream',
  fontWeight: 600,
  fontSize: '15px',
  paddingLeft: 10,
  paddingBottom: 5,
});

export const actionList = style({
  position: 'relative',
  zIndex: 10,
});

export const imgWrapper = style({
  position: 'absolute', // 부모를 기준으로 위치 고정
  bottom: 0, // 하단에 딱 붙임
  right: 0, // 우측에 딱 붙임
  width: '120px', // 시안에 맞는 적절한 크기
  zIndex: 1, // 다른 텍스트보다 뒤로 보내려면 조절 (보통 이미지는 1)
  pointerEvents: 'none', // 이미지가 텍스트 클릭을 방해하지 않도록 설정
});

export const bottomImg = style({
  width: '100%',
  height: 'auto',
  display: 'block',
});
