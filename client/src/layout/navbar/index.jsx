import React, { useState } from "react";
import "./index.scss";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import mainLogo from '../../assets/images/mainLogo.png'
import { customAxios } from "../../api";
import { toast } from 'react-hot-toast';

const NavBarLayout = () => {
  const showToastWithButton = (timeoutId) => {
    toast(
      (t) => (

        <button
          onClick={() => {
            clearTimeout(timeoutId)
            toast.dismiss(t.id);
          }}
          style={{ width: "100%", height: "100%", backgroundColor: 'white', border: 'none', color: 'red', cursor: "pointer" }}
        >
          Bekor qilish! ×
        </button>
      ),
      {
        duration: 3000,
      }
    );
  };
  const sos = async () => {
    const iSetd = setTimeout(() => {
      try {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const yandexLink = `https://yandex.uz/maps/?ll=${longitude},${latitude}&z=24`;
            await customAxios.post('/patient', { location: yandexLink })
            toast.success('Tez yordam chaqirildi!')
          },
          (error) => {
            console.error("Geolocation error:", error);
          }
        );
      } catch (err) {
        console.log(`Xatolik: ${err}`);
      }
    }, 3000)
    showToastWithButton(iSetd)

  }
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
            <div className="sos">
              <button onClick={sos}>Tez Yordam</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBarLayout;
