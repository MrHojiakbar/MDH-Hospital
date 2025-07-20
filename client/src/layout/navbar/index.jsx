import React from "react";
import "./index.scss";
import { NavLink } from "react-router";

const NavBarLayout = () => {
  return (
    <nav>
      <div className="img"></div>
      <div className="navigation">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Asosiy
        </NavLink>
        <NavLink
          to="/doctors"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Doktorlar
        </NavLink>
        <NavLink
          to="/statistics"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Statistika
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Biz haqimizda
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Aloqa uchun
        </NavLink>
      </div>
      <div className="register">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Profil
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBarLayout;
