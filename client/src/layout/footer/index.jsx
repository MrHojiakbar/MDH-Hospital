import React from "react";
import "./index.scss";
import { NavLink } from "react-router";

const FooterLayout = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>Biz Haqimizda</h3>
          <p>
            Bizning kasalxonamizda sizga yuqori malakali shifokorlar va
            zamonaviy tibbiy asbob-uskunalar yordamida sifatli xizmat
            ko'rsatamiz. Sog'ligingiz biz uchun muhim.
          </p>
        </div>

        <div className="footer-section links">
          <h3>Tezkor Havolalar</h3>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={"/"}
              >
                Bosh Sahifa
              </NavLink>
            </li>
            <li>
              <NavLink>Xizmatlar</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={"/doctors"}
              >
                Shifokorlar
              </NavLink>
            </li>
            <li>
              <NavLink>Qabulga Yozilish</NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active" : "")}
                to={"/contact"}
              >
                Bog'lanish
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Bog'lanish</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Manzil: Toshkent sh.,
            Mustaqillik ko'chasi 10
          </p>
          <p>
            <i className="fas fa-phone"></i> Telefon: +998 71 123 45 67
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: info@kasalxona.uz
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Kasalxona Nomi. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default FooterLayout;
