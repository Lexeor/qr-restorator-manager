import { useNavigate } from 'react-router-dom';
import { logout } from '../app/features/auth/authSlice';
import { useAppDispatch } from '../app/store';

function LogoutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return <button onClick={() => handleLogout()}>Logout</button>;
}

export default LogoutButton;
