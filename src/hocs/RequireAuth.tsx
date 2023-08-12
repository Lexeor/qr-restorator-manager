import { useAppSelector } from '../app/store';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const token = useAppSelector((state) => state.auth.token);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
