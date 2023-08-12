import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './hocs/RequireAuth';
import { useAppDispatch } from './app/store';
import { useEffect } from 'react';
import { logout, setUser } from './app/features/auth/authSlice';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import axios from 'axios';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    // ask server is token valid
    const getMe = async (token: string) => {
      const res = await axios.get('http://62.84.125.174:81/api/manager/me/', {
        headers: { Authorization: `token ${token}` },
      });

      if (res.status === 200) {
        dispatch(setUser(user));
      } else {
        dispatch(logout());
      }
    };

    // Request user info only if token is in localStorage
    if (user && user.token) {
      getMe(user.token);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
