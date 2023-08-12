import { useNavigate } from 'react-router-dom';
import { logout } from '../app/features/auth/authSlice';
import { useAppDispatch } from '../app/store';
import { toast } from 'react-toastify';

function LogoutButton() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    toast.success('User Logout successfully');
    navigate('/login');
  };

  return <button onClick={() => handleLogout()}>Logout</button>;
}

export default LogoutButton;
