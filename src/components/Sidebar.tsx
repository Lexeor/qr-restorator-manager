import { NavLink } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Logo from './Logo';

function Sidebar() {
  return (
    <aside>
      <Logo />
      <div className="sidebar-body">
        <nav>
          <NavLink to="/manager/dashboard">Dashboard</NavLink>
          <NavLink to="/manager/restaurant">Restaurant</NavLink>
        </nav>
      </div>
      <LogoutButton />
    </aside>
  );
}

export default Sidebar;
