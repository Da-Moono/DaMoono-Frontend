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
  maxWidth: '960px',
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
  ':hover': {
    color: '#333',
  },
});

export const title = style({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
});

export const cardsContainer = style({
  width: '100%',
  maxWidth: '960px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: '24px',
  marginBottom: '32px',
});

export const planCard = style({
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
  marginBottom: '16px',
});

export const badge = style({
  display: 'inline-block',
  padding: '6px 12px',
  borderRadius: '6px',
  backgroundColor: '#fef3c7',
  color: '#92400e',
  fontSize: '14px',
  fontWeight: '600',
  marginBottom: '16px',
});

export const details = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const detailItem = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const detailLabel = style({
  fontSize: '14px',
  color: '#6b7280',
  fontWeight: '600',
});

export const detailValue = style({
  fontSize: '16px',
  color: '#111827',
  fontWeight: '600',
});

export const chartContainer = style({
  width: '100%',
  maxWidth: '960px',
  backgroundColor: '#fff',
  borderRadius: '16px',
  padding: '24px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
});

export const chartTitle = style({
  fontSize: '20px',
  fontWeight: '700',
  color: '#333',
  margin: 0,
  marginBottom: '24px',
  textAlign: 'center',
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
