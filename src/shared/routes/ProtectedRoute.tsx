import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginRequiredModal from '@/components/modal/LoginRequiredModal';
import { getAuthStatus } from '@/services/authApi';

type Status = 'checking' | 'authenticated' | 'unauthenticated';

export default function ProtectedRoute() {
  const [status, setStatus] = useState<Status>('checking');

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await getAuthStatus();
        setStatus('authenticated');
      } catch {
        setStatus('unauthenticated');
      }
    };

    checkAuth();
  }, []);

  if (status === 'checking') {
    return null;
  }

  if (status === 'unauthenticated') {
    return <LoginRequiredModal />;
  }

  return <Outlet />;
}
