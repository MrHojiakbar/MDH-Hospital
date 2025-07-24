import React, { useState } from "react";
import { customAxios } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import "./addUser.scss";

const AddUserPage = () => {
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
      role: "doctor",
    };

    customAxios
      .post("auth/add", newUser)
      .then((res) => {
        toast.success(res.data.message);
        navigator.clipboard.writeText(res.data.data.user.id)
        e.target.reset();
        setTimeout(() => {
          navigate("/add-doctor");
        }, 1000);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Foydalanuvchi yaratish</h1>
      <input
        type="email"
        placeholder="Email kiriging..."
        required
        name="email"
      />
      <input
        type="text"
        placeholder="Ism-Familiya kiriting..."
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
        placeholder="Telefon raqamingi"
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

      <button className="button" type="submit">
        {loading ? "Loading" : " Yaratish"}
      </button>
    </form>
  );
};

export default AddUserPage;
