import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/store";
import { useNavigate } from "react-router-dom";
import { login } from "../app/features/user/userReducer";

type Props = {};

function Login({}: Props) {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login({ name: username, isAuthenticated: true }));
    navigate("/", { replace: true });
  };

  return (
    <div>
      <label htmlFor="">
        UserName:{" "}
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label htmlFor="">
        Password:{" "}
        <input type="password" onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
