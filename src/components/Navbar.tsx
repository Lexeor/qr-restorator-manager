import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app/store';
import LogoutButton from './LogoutButton';

function Navbar() {
  const isAuth = useAppSelector((state) => state.auth.token);

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      {/* {isAuth && <NavLink to="/protected">Protected</NavLink>} */}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
      <div className="nav-buttons-right">{isAuth && <LogoutButton />}</div>
    </nav>
  );
}

export default Navbar;
