import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = localStorage.getItem('user');

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
