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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username && password) {
      await loginUser({ username, password });
    }
  };

  useEffect(() => {
    if (isLoginSuccess) {
      dispatch(setUser({ token: loginData.token }));
      navigate('/manager/dashboard');
    }
    // eslint-disable-next-line
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isLoginError) {
      toast.error((loginError as any).data.non_field_errors[0]);
    }
    // eslint-disable-next-line
  }, [isLoginError]);

  return (
    <div className="login-wrapper">
      <section className="login">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              className="large"
              autoComplete="off"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              className="large"
              autoComplete="off"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn-primary large w-100">Sign In</button>
        </form>
      </section>
    </div>
  );
}

export default Login;
