import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('user');

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
