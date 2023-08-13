import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './hocs/PrivateRoutes';
import { useAppDispatch } from './app/store';
import { useEffect } from 'react';
import { logout, setUser } from './app/features/auth/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Restaurant from './pages/Restaurant';
import ManagerLayout from './layouts/ManagerLayout';
import MainLayout from './layouts/MainLayout';
import Tables from './pages/Tables';
import Menu from './pages/Menu';
import Dishes from './pages/Dishes';
import Reports from './pages/Reports';
import { getUserInfo } from './services/user.service';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const getMe = async () => {
    const res = await getUserInfo();

    if (res.status === 200) {
      dispatch(setUser(user));
    } else {
      dispatch(logout());
    }
  };

  useEffect(() => {
    // ask server is token valid
    // Request user info only if token is in localStorage
    if (user && user.token) {
      getMe();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        {/* Protected routes */}
        <Route path="manager" element={<PrivateRoutes />}>
          <Route element={<ManagerLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tables" element={<Tables />} />
            <Route path="menu" element={<Menu />} />
            <Route path="dishes" element={<Dishes />} />
            <Route path="reports" element={<Reports />} />
            <Route path="restaurant" element={<Restaurant />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
