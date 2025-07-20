import React from "react";
import "./profile.scss";
import { NavLink } from "react-router";
import { baseUrl } from "../../../config/baseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const MePage = ({ user }) => {
  return (
    <div className="me">
      <div className="info">
        <div className="title">
          <span>Sizning profilingiz</span>
          <NavLink to={`${baseUrl}/auth/logout`}>Tizimdan chiqish</NavLink>
        </div>
        <div className="img">
          <div className="upload">
            <img src={user.imageUrl} alt="" />
            <div className="uploadButton">
              <label htmlFor="upload">
                <FontAwesomeIcon icon={faCloudArrowUp} />
              </label>
              <input type="file" id="upload" />
            </div>
          </div>
        </div>
        <div className="more">
          <div>
            <b>Ismi:</b>
            <span>{user.fullname}</span>
          </div>
          <div>
            <b>Email:</b>
            <span>{user.email}</span>
          </div>
          <div>
            <b>Role:</b>
            <span>{user.role}</span>
          </div>
          <div>
            <b>Gender:</b>
            <span>{user.gender}</span>
          </div>
          <div>
            <b>Telefon raqam:</b>
            <span>{user.phoneNumber}</span>
          </div>
          <div>
            <b>Ro'yxatdan o'tgan vaqt:</b>
            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="story">story</div>
    </div>
  );
};

export default MePage;
