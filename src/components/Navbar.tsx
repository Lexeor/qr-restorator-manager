import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/store";
import { logout } from "../app/features/user/userReducer";

type Props = {};

function Navbar({}: Props) {
  const isAuth = useAppSelector((state) => state.user.isAuthenticated);

  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      {isAuth && <NavLink to="/protected">Protected</NavLink>}
      {!isAuth && <NavLink to="/login">Login</NavLink>}
      {isAuth && <NavLink to="/logout">Logout</NavLink>}
    </nav>
  );
}

export default Navbar;
