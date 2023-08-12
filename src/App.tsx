import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './hocs/RequireAuth';
import { useAppDispatch } from './app/store';
import { useEffect } from 'react';
import { setUser } from './app/features/auth/authSlice';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

function App() {
  const dispatch = useAppDispatch();
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  useEffect(() => {
    dispatch(setUser(user));
    // eslint-disable-next-line
  }, []);

  return (
    <>
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
