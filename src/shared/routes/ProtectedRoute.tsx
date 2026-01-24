import type { ReactNode } from 'react';
import LoginRequiredModal from '@/components/modal/LoginRequiredModal';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  return <LoginRequiredModal />;
}
