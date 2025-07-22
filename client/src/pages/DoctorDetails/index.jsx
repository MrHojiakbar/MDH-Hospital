
import React from 'react'
import { DoctorDetailsWrapper } from './DoctorDetails.styled';
import { useParams } from 'react-router';

const DoctorDetailsPage = () => {

  const { doctorId } = useParams();

  console.log(doctorId)

  return (
    <DoctorDetailsWrapper>
      DoctorDetailsPage
    </DoctorDetailsWrapper>
  )
}

export default DoctorDetailsPage