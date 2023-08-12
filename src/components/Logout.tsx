import { useAppDispatch, useAppSelector } from "../app/store";
import { logout } from "../app/features/user/userReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    navigate("/", { replace: true });
  }, []);

  return <div>Logging out</div>;
}

export default Logout;
