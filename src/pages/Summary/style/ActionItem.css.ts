import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const itemContainer = style({
  paddingLeft: 10,
  display: 'flex',
  margin: '10px 0',
  alignItems: 'center',
});

export const iconBox = recipe({
  base: {
    width: 40,
    height: 40,
    aspectRatio: '1 / 1', // 정사각형 비율 유지
    flexShrink: 0, // 부모 컨테이너가 좁아져도 박스가 줄어들지 않게 함
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // 은은한 그림자 추가
  },
  variants: {
    color: {
      orange: { background: 'linear-gradient(135deg, #FFB54C, #FF7700)' },
      blue: { background: 'linear-gradient(135deg, #9CD1FF, #0089FF)' },
      pink: { background: 'linear-gradient(135deg, #ffc2e1, #fe42a0)' }, // 알람용 핑크
    },
  },
});

export const iconImage = style({
  width: '50%',
  height: '50%',
  filter:
    'invert(100%) sepia(0%) saturate(6796%) hue-rotate(231deg) brightness(102%) contrast(101%)',
});

export const textBox = style({
  paddingLeft: 20,
});

export const title = style({
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: 13,
});

export const description = style({
  fontFamily: 'SCDream',
  fontWeight: 400,
  fontSize: 11,
  color: '#767676',
});
