import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '25px 20px',
  backgroundColor: '#FEFDFD',
  borderRadius: '15px',
  margin: '0 24px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  border: '0.7px solid #0000000f',
  position: 'relative',
});

export const title = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  marginBottom: '20px',
  color: '#333',
});

export const tagWrapper = style({
  display: 'flex',
  flexDirection: 'column', // 옆으로 말풍선이 나오므로 세로 배치가 안정적임
  gap: '15px',
  alignItems: 'flex-start',
});

export const tagItemContainer = style({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  // 버튼 기본 스타일 초기화
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  textAlign: 'left',
  fontFamily: 'inherit',
  outline: 'none', // 필요시 :focus-visible로 별도 처리
});

export const dnaTag = style({
  display: 'inline-block',
  padding: '8px 16px',
  borderRadius: '20px',
  backgroundColor: '#F3F4F6',
  color: '#4B5563',
  fontFamily: 'SCDream',
  fontSize: '13px',
  fontWeight: 500,
  cursor: 'pointer',
  border: '1px solid #E5E7EB',
  whiteSpace: 'nowrap',

  selectors: {
    '&:hover': {
      backgroundColor: '#fff0f6',
      color: '#E91685', // 호버 시 유플러스 핑크
      borderColor: '#ffdeeb',
    },
  },
});

export const tooltip = style({
  position: 'absolute',
  left: '100%', // 태그의 오른쪽 끝에서 시작
  marginLeft: '5px', // 태그와 말풍선 사이 간격
  width: '220px',
  padding: '10px 14px',
  backgroundColor: '#E91685', // 유플러스 메인 핑크
  color: '#fff',
  borderRadius: '12px',
  fontSize: '11px',
  lineHeight: '1.5',
  zIndex: 20,
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
  boxShadow: '0 4px 12px rgba(233, 22, 133, 0.2)',

  // 왼쪽 방향 화살표 (태그를 가리킴)
  selectors: {
    '&:after': {
      content: '""',
      position: 'absolute',
      right: '100%',
      top: '50%',
      marginTop: '-6px',
      borderWidth: '6px',
      borderStyle: 'solid',
      borderColor: 'transparent #E91685 transparent transparent',
    },
  },
});
