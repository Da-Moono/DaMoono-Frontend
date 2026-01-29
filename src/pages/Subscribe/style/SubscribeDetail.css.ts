import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '20px',
  paddingTop: '80px',
  paddingBottom: '80px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f9fafb',
});

export const header = style({
  width: '100%',
  maxWidth: '480px',
  marginBottom: '24px',
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

export const backButton = style({
  background: 'none',
  border: 'none',
  fontSize: '16px',
  color: '#666',
  cursor: 'pointer',
  padding: '8px',
  ':hover': {
    color: '#333',
  },
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
});

export const card = style({
  width: '100%',
  maxWidth: '480px',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

export const cardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e5e7eb',
});

export const category = style({
  fontSize: '14px',
  color: '#6b7280',
});

export const price = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#E91685',
});

export const subscribeName = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#111827',
  margin: 0,
  marginBottom: '16px',
});

export const badgeContainer = style({
  display: 'flex',
  gap: '8px',
  marginBottom: '24px',
  flexWrap: 'wrap',
});

export const badge = style({
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '6px',
  backgroundColor: '#fef3c7',
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '600',
});

export const section = style({
  marginBottom: '24px',
});

export const sectionTitle = style({
  fontSize: '14px',
  fontWeight: '600',
  color: '#6b7280',
  marginBottom: '8px',
});

export const description = style({
  fontSize: '16px',
  color: '#111827',
  lineHeight: '1.6',
});

export const value = style({
  fontSize: '18px',
  fontWeight: '600',
  color: '#111827',
});

export const subValue = style({
  fontSize: '14px',
  color: '#6b7280',
  marginTop: '4px',
});

export const benefitsList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const benefitItem = style({
  padding: '12px',
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  fontSize: '14px',
  color: '#111827',
});

export const applyButton = style({
  width: '100%',
  padding: '16px',
  backgroundColor: '#E91685',
  color: '#fff',
  border: 'none',
  borderRadius: '12px',
  fontSize: '18px',
  fontWeight: '700',
  cursor: 'pointer',
  marginTop: '24px',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#d11473',
  },
});

export const errorMessage = style({
  textAlign: 'center',
  fontSize: '18px',
  color: '#6b7280',
  marginBottom: '24px',
});

export const modalOverlay = style({
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

export const modalContent = style({
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  width: '90%',
  maxWidth: '320px',
  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
});

export const modalTitle = style({
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  marginBottom: '24px',
  textAlign: 'center',
});

export const modalButtons = style({
  display: 'flex',
  gap: '12px',
});

export const modalCancelButton = style({
  flex: 1,
  padding: '12px',
  backgroundColor: '#f3f4f6',
  color: '#333',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#e5e7eb',
  },
});

export const modalConfirmButton = style({
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
