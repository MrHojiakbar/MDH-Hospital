import React, { useState } from "react";
import "./login.scss";
import { customAxios } from "../../../api";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = e.target;

    const founded = {
      email: email.value,
      password: password.value,
    };
    console.log(password.value);

    customAxios
      .post("auth/login", founded)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/me");
        e.target.reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <input
        type="email"
        placeholder="Emailingizni kiriging..."
        required
        name="email"
      />

      <input
        type="password"
        placeholder="Parolni kiriting..."
        required
        name="password"
        autoComplete="false"
      />
      <NavLink to={"/register"} className={"navlink"}>
        Sizda account yo'qmi?___
      </NavLink>

      <button className="button" type="submit">
        {loading ? "Loading" : " Login"}
      </button>
    </form>
  );
};

export default LoginPage;
