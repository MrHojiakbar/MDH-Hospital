import React, { useEffect, useState } from "react";
import { customAxios } from "../../api";
import MePage from "./profile/profile";
import RegisterPage from "./register/register";

const ProfilePage = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    customAxios
      .get("auth/me")
      .then((data) => data.data)
      .then((json) => setUser(json.data.user));
  }, []);
  return user ? <MePage user={user} /> : <RegisterPage />;
};

export default ProfilePage;
