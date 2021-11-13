import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const activeStyle = { color: "blue" };

function Navigation() {
  return (
    <div className="nav">
      <NavLink to="/" exact activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </div>
  );
}

export default Navigation;
