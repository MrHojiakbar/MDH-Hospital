import styled from "styled-components";

export const DoctorDetailsWrapper = styled.div`
  

  .main-box{
    width: 100%;
    height: 500px;
    background-color: aliceblue;
    border-radius: 5px;
    overflow: hidden;

    .box{
      display: flex;
      gap: 50px;
    }

    .box-img{
      width: 400px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
      border-right: 2px solid #5885af;
      border-bottom: 2px solid #5885af;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }
  }
`;