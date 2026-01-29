import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  padding: '30px 20px',
  backgroundColor: '#FEFDFD',
  borderRadius: '15px',
  margin: '0 24px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  border: '0.7px solid #0000000f',
});

export const title = style({
  fontFamily: 'SCDream',
  fontSize: '18px',
  fontWeight: 700,
  marginBottom: '30px',
  paddingLeft: '10px',
});

export const timelineWrapper = style({
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 10px',
  marginTop: '20px', // 상단 타이틀과의 간격 확보
});

// 1. 기준이 되는 선의 위치를 고정합니다.
export const mainLine = style({
  position: 'absolute',
  top: '54px', // 아래 원의 중심점(46px + 8px)과 일치시킴
  left: '40px',
  right: '40px',
  height: '1px',
  backgroundColor: '#E5E5E5',
  zIndex: 0,
});

export const pointContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    zIndex: 1,
    width: '30%',
    transition: 'all 0.3s ease',
  },
  variants: {
    dimmed: {
      true: { opacity: 0.3, filter: 'grayscale(80%)' },
      false: { opacity: 1 },
    },
  },
});

export const moodBadge = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  // 2. 이모지 영역(36px) + 간격(10px) + 원 영역(16px) = 총 62px 확보
  height: '62px',
  justifyContent: 'flex-end',
});

export const emoji = recipe({
  base: {
    fontSize: '26px', // 시안에 맞춰 살짝 키움
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
  },
  variants: {
    focused: {
      true: {
        transform: 'translateY(-12px) scale(1.2)',
      },
    },
  },
});

export const circle = recipe({
  base: {
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    backgroundColor: '#fff',
    border: '2.5px solid',
    zIndex: 2,
    // 3. 원의 테두리까지 계산하여 선 정중앙에 위치하도록 보정
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease',
    transformOrigin: 'center',
  },
  variants: {
    group: {
      negative: { borderColor: '#E91685' },
      neutral: { borderColor: '#FF9500' },
      positive: { borderColor: '#00D179' },
    },
    focused: {
      true: {
        transform: 'scale(1.3)',
      },
    },
  },
});

export const textSection = recipe({
  base: {
    marginTop: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  variants: {
    focused: {
      true: { fontWeight: 600 },
    },
  },
});

export const moodLabel = recipe({
  base: {
    fontFamily: 'SCDream',
    fontSize: '14px',
    fontWeight: 700,
  },
  variants: {
    group: {
      negative: { color: '#E91685' },
      neutral: { color: '#FF9500' },
      positive: { color: '#00D179' },
    },
  },
});

export const reasonText = style({
  fontFamily: 'SCDream',
  fontSize: '10px', // 요청하신 대로 작게 설정
  color: '#555',
  lineHeight: '1.4',
  wordBreak: 'keep-all',
  overflowWrap: 'break-word',
  padding: '0 5px',
});
