import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const CardContainer = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  margin: '0 24px',
  overflow: 'hidden',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  position: 'relative',
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
  width: '100%',
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

export const infoSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const infoRow = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  lineHeight: '1.5',
  color: '#333',
});

export const label = style({
  color: '#FF9500', // 시안의 주황색 라벨 컬러
  fontWeight: 700,
  marginRight: '5px',
});

export const valueBold = style({
  fontWeight: 700,
});

export const reason = style({
  color: '#111',
  fontWeight: 500,
});

export const infoGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  paddingBottom: '16px',
});

export const labelWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

export const statusBadge = recipe({
  base: {
    padding: '2px 10px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 700,
  },
  variants: {
    type: {
      outcome: { backgroundColor: '#FFF0F6', color: '#E91685' }, // 결과는 핑크
      re_contact: { backgroundColor: '#FFF7D4', color: '#FF9500' }, // 가능성은 노랑
    },
  },
});

export const reasonBox = style({
  fontFamily: 'SCDream',
  fontSize: '12px', // 상세 내용은 한 단계 작게
  lineHeight: '1.6',
  color: '#666',
  padding: '10px 12px',
  backgroundColor: '#F9F9F9', // 배경색을 깔아 줄글 느낌 제거
  borderRadius: '8px',
  wordBreak: 'keep-all',
});
