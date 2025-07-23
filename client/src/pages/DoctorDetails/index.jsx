import React, { useEffect, useState } from "react";
import { DoctorDetailsWrapper } from "./DoctorDetails.styled";
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
            <p>Ism Familyasi: {doctor?.user?.fullname}</p>
            <p>Ish Tajribasi: {doctor?.experienceYears} Yil</p>
          </div>
        </div>
      </div>
    </DoctorDetailsWrapper>
  );
};

export default DoctorDetailsPage;
