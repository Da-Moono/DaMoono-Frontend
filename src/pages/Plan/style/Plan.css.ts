import { keyframes, style } from '@vanilla-extract/css';

const skeletonShimmer = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
    opacity: 0,
  },
  '10%': {
    opacity: 1,
  },
  '90%': {
    opacity: 1,
  },
  '100%': {
    transform: 'translateX(100%)',
    opacity: 0,
    visibility: 'hidden',
  },
});

export const container = style({
  padding: '20px 16px',
  paddingTop: '80px', // 헤더 높이(약 61px) + 여유 공간
  paddingBottom: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',

  backgroundColor: '#ffffff', //  배경
  position: 'relative',
});

export const gradientBg = style({
  position: 'absolute',
  top: '61px', // 헤더 높이만큼 아래에서 시작
  left: 0,
  right: 0,
  height: '256px',
  background: 'linear-gradient(to bottom, #fef3c7, transparent)',
  pointerEvents: 'none',
  zIndex: 0,
});

export const content = style({
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  padding: '0',
});

export const headerSection = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: '20px',
  gap: '16px',
});

export const titleWrapper = style({
  flex: '0 0 60%',
  display: 'flex',
  flexDirection: 'column',
});

export const characterWrapper = style({
  flex: '0 0 40%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  lineHeight: '1.3',
});

export const titleLine1 = style({
  display: 'block',
});

export const titleLine2 = style({
  display: 'block',
});

export const headerCharacter = style({
  width: '100%',
  maxWidth: '200px',
  height: 'auto',
  objectFit: 'contain',
});

export const currentPlanSection = style({
  width: '100%',
  marginBottom: '20px',
});

export const currentPlanTitle = style({
  fontSize: '16px',
  fontWeight: '600',
  color: '#333',
  margin: 0,
  marginBottom: '12px',
  textAlign: 'left',
});

export const allPlansTitle = style({
  fontSize: '16px',
  fontWeight: '600',
  color: '#333',
  margin: 0,
  marginBottom: '12px',
  marginTop: '24px',
  textAlign: 'left',
  width: '100%',
});

export const compareButton = style({
  padding: '12px 20px',
  backgroundColor: '#fef2f2', // 상콤한 연한 분홍색
  color: '#333',
  border: '1px solid #fce7f3',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: '600',
  cursor: 'pointer',
  marginBottom: '20px',
  width: '100%',
  transition: 'background-color 0.2s, border-color 0.2s',
  ':hover': {
    backgroundColor: '#fce7f3',
    borderColor: '#E91685',
  },
});

export const compareButtonActive = style({
  backgroundColor: '#E91685',
  color: '#fff',
  ':hover': {
    backgroundColor: '#d11473',
  },
});

export const compareActions = style({
  position: 'fixed',
  bottom: '80px',
  left: '50%',
  transform: 'translateX(-50%)',
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  gap: '12px',
  padding: '16px',
  backgroundColor: '#fff',
  boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)',
  zIndex: 999,
});

export const compareConfirmButton = style({
  flex: 1,
  padding: '16px',
  backgroundColor: '#E91685',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'background-color 0.2s, opacity 0.2s',
  ':hover': {
    backgroundColor: '#d11473',
  },
  ':disabled': {
    backgroundColor: '#e5e7eb',
    color: '#9ca3af',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
});

export const compareCancelButton = style({
  flex: 1,
  padding: '16px',
  backgroundColor: '#E91685',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#d11473',
  },
});

export const filterPanel = style({
  position: 'sticky',
  top: 0,
  zIndex: 10,
  width: '100%',
  marginBottom: '16px',
  display: 'flex',
  justifyContent: 'flex-start',
});

export const filterControls = style({
  display: 'inline-flex',
  gap: '8px',
  width: '100%',
});

export const selectBase = style({
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  padding: '8px 12px',
  backgroundColor: '#fff',
  fontSize: '13px',
  color: '#333',
  width: '100%',
  appearance: 'none',
  textAlign: 'left',
  cursor: 'pointer',
  fontWeight: '500',
});

export const selectWrapper = style({
  position: 'relative',
});

export const selectIcon = style({
  position: 'absolute',
  top: '10px',
  right: '12px',
  width: '16px',
  height: '16px',
  pointerEvents: 'none',
  color: '#6b7280',
});

export const sortMenu = style({
  position: 'absolute',
  top: '100%',
  left: 0,
  marginTop: '4px',
  width: '100%',
  minWidth: '120px',
  backgroundColor: '#fff',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  overflow: 'hidden',
  zIndex: 20,
});

export const sortMenuItem = style({
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#fff',
  border: 'none',
  borderBottom: '1px solid #f3f4f6',
  textAlign: 'left',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '14px',
  color: '#333',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#f9fafb',
  },
  ':last-child': {
    borderBottom: 'none',
  },
});

export const sortMenuItemSelected = style({
  backgroundColor: '#fef3c7', // 연한 노란색
  color: '#d97706', // 찐 노란색/주황색
  fontWeight: '600',
});

export const checkIcon = style({
  width: '18px',
  height: '18px',
  color: '#f59e0b', // 찐 노란색
  flexShrink: 0,
});

export const filterMenu = style({
  position: 'absolute',
  right: 0,
  top: '100%',
  zIndex: 20,
  marginTop: '4px',
  width: '288px',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  boxShadow:
    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
});

export const filterSectionTitle = style({
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: '700',
});

export const filterButtons = style({
  display: 'flex',
  gap: '8px',
  flexWrap: 'wrap',
});

export const filterButton = style({
  borderRadius: '6px',
  border: '1px solid #d1d5db',
  padding: '4px 8px',
  fontSize: '14px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  transition: 'all 0.2s',
});

export const filterButtonActive = style({
  backgroundColor: '#fef08a',
});

export const planList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  gap: '12px',
  width: '100%',
});

export const planCard = style({
  width: '100%',
  maxWidth: '100%',
  cursor: 'pointer',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  padding: '16px 20px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.2s, border-color 0.2s',
  textAlign: 'left',
  ':hover': {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
});

export const planCardHeader = style({
  marginBottom: '4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const planProvider = style({
  fontSize: '14px',
  color: '#1f2937',
});

export const planPrice = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#E91685',
});

export const planName = style({
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: '18px',
  fontWeight: '700',
  margin: 0,
  marginBottom: '8px',
});

export const badgeContainer = style({
  marginTop: '8px',
  display: 'flex',
  width: '100%',
  flexWrap: 'nowrap',
  gap: '8px',
  overflowX: 'auto',
  scrollbarWidth: 'none',
  '::-webkit-scrollbar': {
    display: 'none',
  },
});

export const badge = style({
  borderRadius: '9999px',
  border: 'none',
  padding: '4px 8px',
  fontSize: '12px',
  whiteSpace: 'nowrap',
});

export const badgeData = style({
  backgroundColor: '#eef2ff',
  color: '#4f46e5',
});

export const badgeVoice = style({
  backgroundColor: '#ecfdf5',
  color: '#059669',
});

export const badgeSpeed = style({
  backgroundColor: '#fffbeb',
  color: '#d97706',
});

export const badgeSms = style({
  backgroundColor: '#fef2f2',
  color: '#dc2626',
});

export const ottContainer = style({
  marginTop: '12px',
  display: 'flex',
  alignItems: 'center',
});

export const ottCircle = style({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#d1d5db',
  border: '2px solid #fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '12px',
});

export const ottCircleOverlap = style({
  marginLeft: '-12px',
});

export const loadingMessage = style({
  textAlign: 'center',
  color: '#6b7280',
  padding: '32px 0',
  fontSize: '16px',
});

export const errorMessage = style({
  textAlign: 'center',
  color: '#ef4444',
  padding: '32px 0',
  fontSize: '16px',
});

export const emptyState = style({
  textAlign: 'center',
  color: '#6b7280',
  padding: '32px 0',
});

export const successModalOverlay = style({
  border: 'none',
  background: 'none',
  padding: 0,
  margin: 0,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2000, // BottomNav의 zIndex(1000)보다 높게 설정
  outline: 'none',
});

export const successModalContent = style({
  position: 'relative',
  width: '380px',
  padding: '24px',
  borderRadius: '12px',
  background: '#fff',
  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
  textAlign: 'center',
});

export const successModalTitle = style({
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  marginBottom: '24px',
  textAlign: 'center',
});

export const successModalButtons = style({
  display: 'flex',
  gap: '12px',
  marginTop: '24px',
});

export const successModalConfirmButton = style({
  flex: 1,
  padding: '12px',
  backgroundColor: '#E91685',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#d11473',
  },
});

export const skeleton = style({
  width: '100%',
  maxWidth: '320px',
  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  borderRadius: '16px',
  backgroundColor: '#fff',
  padding: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

export const currentPlanCard = style({
  width: '100%',
  maxWidth: '100%',
  cursor: 'pointer',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#fff',
  padding: '16px 20px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  transition: 'box-shadow 0.2s, border-color 0.2s',
  textAlign: 'left',
  ':hover': {
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
});

export const planCardSelected = style({
  border: '2px solid #E91685',
});

export const planCardCompareSelected = style({
  border: '2px solid #E91685',
  backgroundColor: '#fef2f2',
});

export const currentPlanCardUpdating = style({
  position: 'relative',
  overflow: 'hidden',
  '::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50%',
    height: '100%',
    background:
      'linear-gradient(90deg, transparent, rgba(243, 244, 246, 0.6), transparent)',
    animation: `${skeletonShimmer} 0.6s ease-in-out forwards`,
    pointerEvents: 'none',
    zIndex: 1,
  },
});

export const currentPlanCardDisabled = style({
  position: 'relative',
  cursor: 'default',
  backgroundColor: '#fafafa',
  borderColor: '#e5e7eb',
  ':hover': {
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  },
});

export const disabledContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  width: '100%',
  padding: '8px 0',
});

export const disabledImage = style({
  width: '120px',
  height: '80px',
  objectFit: 'contain',
  flexShrink: 0,
});

export const disabledText = style({
  fontSize: '14px',
  fontWeight: '500',
  color: '#6b7280',
  lineHeight: '1.5',
  flex: 1,
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});
