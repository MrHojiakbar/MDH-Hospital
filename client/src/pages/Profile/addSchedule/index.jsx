import React, { useState } from "react";
import "./addSchedule.scss";
import { customAxios } from "../../../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const AddSchedulePage = () => {
  const [selectedDays, setSelectedDays] = useState([]);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const navigate = useNavigate();

  const days = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];

  const handleDayChange = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSubmit = () => {
    const payload = {
      dayOfWeek: selectedDays,
      startTime,
      endTime,
    };

    console.log(payload);

    customAxios
      .post("schedule/add", payload)
      .then((data) => {
        toast.success(data.message);
        setTimeout(() => {
          navigate("/me");
        }, 2000);
      })
      .catch((error) => toast.error(error.response.data.message));
  };

  return (
    <div className="setSchedule">
      <div className="weekDays">
        {days.map((day) => (
          <label key={day}>
            <input
              type="checkbox"
              checked={selectedDays.includes(day)}
              onChange={() => handleDayChange(day)}
            />
            {day}
          </label>
        ))}
      </div>

      <div className="timeInputs">
        <label>
          Boshlanish vaqti:
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <label>
          Tugash vaqti:
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleSubmit} className="button">
        Shakllantirish
      </button>
    </div>
  );
};

export default AddSchedulePage;
