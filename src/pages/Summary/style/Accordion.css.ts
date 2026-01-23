import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const accordionWrapper = style({
  border: '0.7px solid #0000000f',
  borderRadius: '15px',
  backgroundColor: 'white',
  marginBottom: '12px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
});

export const header = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '18px 20px',
  cursor: 'pointer',

  // 1. 버튼 기본 스타일 초기화 (핵심!)
  width: '100%',
  background: 'none',
  border: 'none',
  outline: 'none',
  textAlign: 'left', // 버튼은 기본적으로 중앙 정렬이라 왼쪽으로 맞춰야 합니다.
});

export const title = style({
  fontFamily: 'SCDream',
  fontSize: '15px',
  fontWeight: 600,
  color: '#333',
});

export const chevron = recipe({
  base: {
    transition: 'transform 0.3s ease',
  },
  variants: {
    open: {
      true: { transform: 'rotate(180deg)' },
      false: { transform: 'rotate(0deg)' },
    },
  },
});

export const content = recipe({
  base: {
    maxHeight: 0,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
    backgroundColor: '#FAFAFA', // 펼쳐졌을 때 배경색 차별화
  },
  variants: {
    open: {
      true: { maxHeight: '500px' },
      false: { maxHeight: 0 },
    },
  },
});

export const contentInner = style({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const stepItem = style({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
});

export const stepNumber = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#FFDA94', // 헤더와 톤을 맞춘 노란색
  fontSize: '11px',
  fontWeight: 700,
  color: '#F54A00',
});

export const stepText = style({
  fontFamily: 'SCDream',
  fontSize: '14px',
  lineHeight: '1.5',
  color: '#444',
});
