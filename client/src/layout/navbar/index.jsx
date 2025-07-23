import React from "react";
import "./index.scss";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import mainLogo from '../../assets/images/mainLogo.png'

const NavBarLayout = () => {
  return (
    <nav>
      <div className="container">
        <div className="img">
          <img src={mainLogo} alt="Logo" />
        </div>

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
            Shifokorlar
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

        <div className="right">
          <div className="register">
            <NavLink
              to="/me"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              <FontAwesomeIcon icon={faUser} />
              <span> Profil</span>
            </NavLink>
          </div>
          <div>
            <button>Tez Yordam</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLayout;
