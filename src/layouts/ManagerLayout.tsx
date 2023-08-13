import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

function ManagerLayout() {
  return (
    <div className="manager-layout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default ManagerLayout;
