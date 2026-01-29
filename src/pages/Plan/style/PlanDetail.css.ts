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
  position: 'relative',
});

export const backButton = style({
  background: 'none',
  border: 'none',
  fontSize: '16px',
  color: '#666',
  cursor: 'pointer',
  padding: '8px',
  position: 'absolute',
  left: 0,
  zIndex: 1,
  ':hover': {
    color: '#333',
  },
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  textAlign: 'center',
  width: '100%',
});

export const cardContainer = style({
  width: '100%',
  maxWidth: '480px',
  height: '600px',
  perspective: '1000px',
  cursor: 'pointer',
  marginBottom: '24px',
  position: 'relative',
  border: 'none',
  background: 'transparent',
  padding: 0,
});

export const card = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  top: 0,
  left: 0,
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  textAlign: 'left',
});

export const cardBack = style({
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  position: 'absolute',
  top: 0,
  left: 0,
  backfaceVisibility: 'hidden',
  transformStyle: 'preserve-3d',
  transition: 'transform 0.6s',
  textAlign: 'left',
});

export const chartContainer = style({
  width: '100%',
  height: '400px',
  marginTop: '24px',
});

export const flipHint = style({
  textAlign: 'center',
  fontSize: '14px',
  color: '#6b7280',
  marginTop: '16px',
});

export const cardHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
  paddingBottom: '16px',
  borderBottom: '1px solid #e5e7eb',
});

export const provider = style({
  fontSize: '14px',
  color: '#6b7280',
});

export const price = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#E91685',
});

export const planName = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#111827',
  margin: 0,
  marginBottom: '24px',
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

export const badge = style({
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '6px',
  backgroundColor: '#fef3c7',
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '600',
});

export const ottList = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '4px',
  fontSize: '18px',
  fontWeight: '600',
  color: '#111827',
});

export const ottItem = style({
  display: 'inline',
});

export const applyButton = style({
  width: '100%',
  maxWidth: '480px',
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

export const loadingMessage = style({
  textAlign: 'center',
  color: '#6b7280',
  padding: '32px 0',
  fontSize: '16px',
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
