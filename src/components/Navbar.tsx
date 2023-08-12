import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../app/store';

function Navbar() {
  const isAuth = useAppSelector((state) => state.auth.token);

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      {isAuth && <NavLink to="/protected">Protected</NavLink>}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
    </nav>
  );
}

export default Navbar;
