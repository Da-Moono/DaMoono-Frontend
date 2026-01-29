import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const itemContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    margin: 10,
    paddingRight: 10,
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.1)',
  },
  variants: {
    color: {
      blue: { background: 'linear-gradient(to right, #bedafc, #EFF6FF)' },
      purple: { background: 'linear-gradient(to right, #ecd8ff, #EFF6FF)' },
      yellow: { background: 'linear-gradient(to right, #FFF7EE, #fff7eebb)' },
      green: { background: 'linear-gradient(to right, #DBFCE7, #f3fff7)' },
    },
  },
});

export const headerSection = style({
  display: 'flex',
  gap: '5px',
});

export const imgWrapper = style({
  width: 40,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const iconImage = recipe({
  base: {
    width: '50%',
    height: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    color: {
      blue: {
        filter:
          'invert(76%) sepia(58%) saturate(4960%) hue-rotate(192deg) brightness(100%) contrast(104%)',
      },
      purple: {
        filter:
          'invert(55%) sepia(70%) saturate(7442%) hue-rotate(255deg) brightness(101%) contrast(101%)',
      },
      yellow: {
        filter:
          'invert(47%) sepia(26%) saturate(6098%) hue-rotate(1deg) brightness(103%) contrast(102%)',
      },
      green: {
        filter:
          'invert(33%) sepia(78%) saturate(3815%) hue-rotate(133deg) brightness(103%) contrast(101%)',
      },
    },
  },
});

export const textBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const title = style({
  fontFamily: 'SCDream',
  fontWeight: 500,
  fontSize: 12,
});

export const detail = style({
  fontFamily: 'SCDream',
  fontWeight: 400,
  fontSize: 9,
  color: '#777777',
});

export const value = recipe({
  base: { fontFamily: 'SCDream', fontWeight: 500, fontSize: 11 },
  variants: {
    color: {
      blue: { color: 'rgb(70, 127, 252)' },
      purple: { color: 'rgb(173, 70, 255)' },
      yellow: { color: 'rgb(255, 105, 0)' },
      green: { color: 'rgb(0, 166, 62)' },
    },
  },
});

export const valueSection = recipe({
  base: {
    borderRadius: 15,
    padding: '5px 10px',
  },
  variants: {
    color: {
      blue: { background: 'rgb(70, 127, 252, 0.15)' },
      purple: { background: 'rgb(173, 70, 255, 0.15)' },
      yellow: { background: 'rgb(255, 105, 0, 0.15)' },
      green: { background: 'rgb(0, 166, 62, 0.15)' },
    },
  },
});
