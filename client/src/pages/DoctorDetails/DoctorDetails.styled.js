import styled from "styled-components";

import { FaStar } from "react-icons/fa";

export const StarIcon = styled(FaStar)`
  color: gold;
  font-size: 20px;
`;

export const DoctorDetailsWrapper = styled.div`
  .main-box {
    width: 100%;
    height: 500px;
    background-color: aliceblue;
    border-radius: 5px;
    overflow: hidden;

    .box-words {
      width: 700px;
      display: flex;
      justify-content: space-around;

      color: #274472;

      p {
        margin: 10px 0;
        font-size: 20px;
      }

      button {
        background-color: #4caf50;
        color: white; 
        padding: 10px 20px;
        margin-top: 20px;
        font-size: 16px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #45a049;
        }
      }
    }

    .box {
      display: flex;
      gap: 50px;
    }

    .box-img {
      width: 400px;
      border-bottom-right-radius: 10px;
      overflow: hidden;
      border-right: 2px solid #5885af;
      border-bottom: 2px solid #5885af;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        display: block;
      }
    }
  }
`;
