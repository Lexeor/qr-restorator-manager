import { useAppSelector } from '../app/store';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const user = useAppSelector((state) => state.auth.token);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
