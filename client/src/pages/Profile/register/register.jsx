import React, { useState } from "react";
import "./register.scss";
import { customAxios } from "../../../api";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, fullname, phoneNumber, gender, password } = e.target;

    const newUser = {
      email: email.value,
      fullname: fullname.value,
      phoneNumber: phoneNumber.value,
      gender: gender.value,
      password: password.value,
    };

    customAxios
      .post("auth/register", newUser)
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
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Emailingizni kiriging..."
        required
        name="email"
      />
      <input
        type="text"
        placeholder="Ism-Familiyangizni kiriting..."
        required
        name="fullname"
      />
      <input
        type="password"
        placeholder="Parolni kiriting..."
        required
        name="password"
        autoComplete="false"
      />
      <input
        type="phone"
        placeholder="Telefon raqamingiz"
        required
        name="phoneNumber"
      />
      <div className="gender">
        <label>
          <input type="radio" name="gender" value="male" />
          Male
        </label>

        <label>
          <input type="radio" name="gender" value="female" />
          Female
        </label>
      </div>

      <NavLink to={"/login"} className={"navlink"}>
        Sizda account bormi?___
      </NavLink>

      <button className="button" type="submit">
        {loading ? "Loading" : " Register"}
      </button>
    </form>
  );
};

export default RegisterPage;
