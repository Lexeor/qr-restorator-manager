import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

function Navbar({}: Props) {
  return (
    <nav className="primary-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/protected">Protected</NavLink>
    </nav>
  );
}

export default Navbar;
