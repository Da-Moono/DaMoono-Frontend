import { Navigate } from 'react-router-dom';

interface AdminRouteProps {
  children: React.ReactNode;
}

export default function AdminRoute({ children }: AdminRouteProps) {
  const role = localStorage.getItem('userRole');

  if (role === 'ADMIN') {
    return <>{children}</>;
  }

  if (role === 'USER') {
    return <Navigate to="/home" replace />;
  }

  // role이 없거나, 알 수 없는 경우
  return <Navigate to="/" replace />;
}
