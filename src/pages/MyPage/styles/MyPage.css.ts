import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// MyPage.tsx 스타일
export const mypage = style({
  padding: '20px',
  paddingBottom: '80px',
  display: 'flex',
  flexDirection: 'column',
});

// 마이페이지 상담섹션 컨테이너 스타일
export const container = style({
  padding: '16px',
  background: '#FEFDFD',
});

// 마이페이지 메뉴/이용 꿀팁 컨테이너 스타일
export const section = style({
  background: '#FEFDFD',
  padding: '16px',
  margin: '16px 16px 32px 16px',
  borderRadius: '10px',
  boxShadow: '0px 2px 2px 0px rgba(0, 0, 0, 0.15)',
});

/*************************
  상담 조희 섹션 스타일 영역
 *************************/
export const counselTitle = style({
  minHeight: '24px',
  marginLeft: '10px',
  marginBottom: '8px',
});

export const counselCnt = style({
  color: '#E34698',
});

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

/********************
  메뉴 탭 스타일 영역
 ********************/
export const tabs = style({
  display: 'flex',
  gap: '5px',
  padding: '4px',
  background: 'rgba(228, 231, 243, 0.5)',
  borderRadius: '5px',
  marginTop: '15px',
});

export const tab = recipe({
  base: {
    flex: 1,
    padding: '12px 0px',
    background: '#fafafa',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  variants: {
    active: {
      true: {
        background: '#fff',
        borderColor: '#333',
        boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.3)',
      },
      false: {
        background: 'transparent',
        border: 'none',
        color: 'rgba(0, 0, 0, 0.5)',
      },
    },
  },
});

/********************
  메뉴리스트 스타일 영역
 ********************/
export const menuList = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: '#fff',
  overflow: 'hidden',
  margin: '15px 20px 0 20px',
  minHeight: '100px',
  fontSize: '16px',
});

export const menuItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '14px 12px',
});

export const menuLeft = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const icon = style({
  fontSize: '16px',
});

/********************
  이용 꿀팁 스타일 영역
 ********************/
export const cardList = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '40px 0px 20px',
  gap: '50px',
});

export const card = style({
  border: 'none',
  background: '#fff',
  cursor: 'pointer',
});

export const image = style({
  width: '100%',
  height: '80px',
  objectFit: 'contain',
  marginBottom: '8px',
});

export const textArea = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const cardTitle = style({
  fontSize: '13px',
  fontWeight: 600,
});

export const description = style({
  fontSize: '12px',
  color: '#666',
  whiteSpace: 'pre-line',
});

/*************
  로그아웃 버튼
 *************/
export const logout = style({
  width: '100px',
  margin: '24px auto 50px auto',
  padding: '12px 0',
  borderRadius: '8px',
  background: '#FFE07A',
  border: 'none',
  fontWeight: 600,
  textAlign: 'center',
  boxShadow: '0px 3px 4px 0px rgba(0, 0, 0, 0.25)',
  cursor: 'pointer',
});
