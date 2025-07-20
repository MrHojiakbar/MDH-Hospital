import React from "react";
import NavBarLaout from "../navbar";
import { Outlet } from "react-router";
import FooterLaout from "../footer";
import "./index.scss";

const MainLayout = () => {
  return (
    <div className="main">
      <div>
        <NavBarLaout />
        <div className="outlet">
          <Outlet />
        </div>
      </div>
      <FooterLaout />
    </div>
  );
};

export default MainLayout;
