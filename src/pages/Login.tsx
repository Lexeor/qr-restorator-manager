import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLoginUserMutation } from '../services/authApi';
import { useAppDispatch } from '../app/store';
import { setUser } from '../app/features/auth/authSlice';
import { toast } from 'react-toastify';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      error: loginError,
    },
  ] = useLoginUserMutation();

  const handleLogin = async () => {
    if (username && password) {
      await loginUser({ username, password });
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('User Login successfully');
      dispatch(setUser({ token: loginData.token }));
      navigate('/');
    }
    // eslint-disable-next-line
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isLoginError) {
      console.log(loginError);
      // toast.error((loginError as any).data.non_field_errors);
      toast.error((loginError as any).data.non_field_errors[0]);
    }
    // eslint-disable-next-line
  }, [isLoginError]);

  return (
    <div>
      <label htmlFor="">
        UserName:{' '}
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label htmlFor="">
        Password:{' '}
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
