import React, { useEffect, useState } from "react";
import { DoctorPageWrapper, StarIcon } from "./Doctor.styled";
import { customAxios } from "../../api";
import { NavLink } from "react-router";

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await customAxios.get("/doctors");
        setDoctors(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Xatolik:", error);
      }
    };

    fetchDoctors();
  }, []);

  function getStars(stars){

    let starArr = []
    for(let i = 0; i < stars; i++){
      starArr.push(< StarIcon key={i} />," ");
    }

    return starArr;
  }

  return (
    <DoctorPageWrapper className="container">
      <h1 className="title">Shifokorlar</h1>
      <div className="main-box">
        {doctors.map((doctor) => (
          <NavLink to={`/doctor_details/${doctor.id}`}  key={doctor.id}>
            <div className="box">
              <div className="box-img"><img src='https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg' alt="this doctor image" /></div>
              <div className="box-words">
                <p>{doctor.user.fullname}</p>
                <p>Ish Turi: {doctor.workType}</p>
                <p>Ish Tajribasi: {doctor.experienceYears} Yil</p>
                <div className="stars"> {getStars(doctor.stars)} </div>
                 
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </DoctorPageWrapper>
  );
};

export default DoctorsPage;
