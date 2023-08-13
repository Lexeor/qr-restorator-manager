import LogoutButton from '../LogoutButton';
import Logo from '../Logo';
import { items } from '../../data/sidebar-items';
import { IconNames, IconComponent } from '../Icon/MUIIcon';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const renderItems = items.map((item) => {
    return (
      <NavLink className="aside-navlink" to={item.path}>
        <IconComponent iconName={item.icon as IconNames} />
        {item.title}
      </NavLink>
    );
  });

  return (
    <aside>
      <Logo />
      <div className="sidebar-body">
        <nav>{renderItems}</nav>
      </div>
      <LogoutButton />
    </aside>
  );
}

export default Sidebar;
