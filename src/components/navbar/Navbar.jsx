import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <NavLink to={"/"} className={"header__logo"}>
          Home
        </NavLink>
        <ul className="header__list">
          <li>
            <NavLink to={"/create"} className={"header__link"}>
              Create Product
            </NavLink>
          </li>
          <li>
            <NavLink to={"/manage"} className={"header__link"}>
              Manage Product
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default memo(Navbar);
