import React, { useState } from "react";
import "./doctor.scss";
import { customAxios } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { MenuItem, Select } from "@mui/material";

const AddDoctorPage = () => {
  const [loading, setLoading] = useState(false);
  const doctors = [
    "THERAPIST",
    "SURGEON",
    "PEDIATRICIAN",
    "CARDIOLOGIST",
    "NEUROLOGIST",
    "DERMATOLOGIST",
    "ONCOLOGIST",
    "GYNECOLOGIST",
    "UROLOGIST",
    "PSYCHIATRIST",
    "RADIOLOGIST",
    "DENTIST",
    "ENDOCRINOLOGIST",
    "OPHTHALMOLOGIST",
    "ENT",
    "PULMONOLOGIST",
    "NEPHROLOGIST",
  ];
  const status = [
    "ACTIVE",
    "INACTIVE",
    "BUSY",
    "ON_VOCATION",
    "PENDING",
    "SUSPENDED",
    "RESIGNED",
  ];
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const {
      userId,
      bio,
      experienceYears,
      workType,
      stars,
      roomNumber,
      status,
    } = e.target;

    const newDoctor = {
      userId: userId.value,
      bio: bio.value,
      experienceYears: experienceYears.value,
      workType: workType.value,
      roomNumber: roomNumber.value,
      stars: stars.value,
      status: status.value,
    };

    customAxios
      .post("doctors", newDoctor)
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
      <h1>Shifokor qo'shish</h1>
      <input
        type="text"
        placeholder="User ID kiriging..."
        required
        name="userId"
      />
      <input type="text" placeholder="Bio kiriting..." required name="bio" />
      <input
        type="number"
        placeholder="Xizmat davrini kiriting..."
        required
        name="experienceYears"
      />
      <input
        type="number"
        placeholder="Rating belgilang..."
        required
        name="stars"
      />
      <input
        type="number"
        placeholder="Xona belgilang..."
        required
        name="roomNumber"
      />

      <Select
        name="workType"
        id="workType"
        defaultValue={""}
        displayEmpty
        variant="outlined"
        sx={{ color: "#274472", textAlign: "start" }}
      >
        <MenuItem
          disabled
          selected
          value=""
          sx={{
            backgroundColor: "#c3e0e5",
            color: "#274472",
          }}
        >
          Sohani tanlang...
        </MenuItem>
        {doctors.map((el, index) => (
          <MenuItem
            key={index}
            sx={{
              backgroundColor: "#c3e0e5",
              color: "#274472",
            }}
            value={el}
          >
            {el.toLowerCase()}
          </MenuItem>
        ))}
      </Select>
      <Select
        name="status"
        id="status"
        defaultValue={""}
        displayEmpty
        variant="outlined"
        sx={{ color: "#274472", textAlign: "start" }}
      >
        <MenuItem
          disabled
          sx={{
            backgroundColor: "#c3e0e5",
            color: "#274472",
          }}
          value=""
        >
          Holatni tanlang...
        </MenuItem>
        {status.map((el, index) => (
          <MenuItem
            key={index}
            sx={{
              backgroundColor: "#c3e0e5",
              color: "#274472",
            }}
            value={el}
          >
            {el.toLowerCase()}
          </MenuItem>
        ))}
      </Select>

      <button className="button" type="submit">
        {loading ? "Loading" : " Qo'shish"}
      </button>
    </form>
  );
};

export default AddDoctorPage;
