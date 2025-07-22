import React, { useState } from "react";
import "./profile.scss";
import { NavLink } from "react-router";
import { baseUrl } from "../../../config/baseUrl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudArrowUp,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const MePage = ({ user }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="me">
      <div className="info">
        <div className="title">
          <span>Sizning profilingiz</span>
          <NavLink to={`${baseUrl}/auth/logout`}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </NavLink>
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

        <div className="userInfo">
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
        <div className="more" onClick={() => setMore(!more)}>
          more...
        </div>
        <div className="permittion">
          {user.role === "user" ? (
            more ? (
              <p>Sizda hozircha qo'shimcha huquqlar yo'q!</p>
            ) : null
          ) : more ? (
            <div className="addUser">
              <span>Sizda yangi shifokor qo'shish imkoniyati mavjud!</span>
              <NavLink to={"/add-doctor"}>
                <button>Qo'shish</button>
              </NavLink>
            </div>
          ) : null}
        </div>
      </div>
      <div className="story">story</div>
    </div>
  );
};

export default MePage;
