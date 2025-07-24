import React, { useEffect, useState } from "react";
import { DoctorDetailsWrapper, StarIcon } from "./DoctorDetails.styled";
import { useParams } from "react-router";
import { customAxios } from "../../api";
import toast from "react-hot-toast";

const DoctorDetailsPage = () => {
  const [doctor, setDoctorInfo] = useState({});
  const { doctorId } = useParams();

  useEffect(() => {
    async function getData() {
      try {
        const data = await customAxios.get(`/doctors/${doctorId}`);
        console.log(data.data.data);
        setDoctorInfo(data.data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }

    getData();
  }, [doctorId]);

  function getStars(stars) {
    let starArr = [];
    for (let i = 0; i < stars; i++) {
      starArr.push(<StarIcon key={i} />, " ");
    }

    return starArr;
  }

  return (
    <DoctorDetailsWrapper className="container">
      <div className="main-box">
        <div className="box">
          <div className="box-img">
            <img
              src="https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg"
              alt=" this Doctor img"
            />
          </div>

          <div className="box-words">
            <div>
              <h4>Ism Familyasi: {doctor?.user?.fullname}</h4>
              <p>{doctor?.user?.email}</p>
              <p>Ish Turi: {doctor?.workType}</p>
              <p>Bio: {doctor?.bio}</p>
              <p>Ish Tajribasi: {doctor?.experienceYears} Yil</p>
              <div className="stars"> {getStars(doctor.stars)} </div>
            </div>

            <div>
              <p>Hozir: {doctor?.status}</p>
              <p>Xona Raqami: {doctor?.roomNumber}</p>
              <button>Doctor qabuliga yozilish</button>
            </div>
          </div>
        </div>
      </div>
    </DoctorDetailsWrapper>
  );
};

export default DoctorDetailsPage;
