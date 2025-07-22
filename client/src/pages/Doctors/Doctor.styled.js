import styled from "styled-components";
import { FaStar } from "react-icons/fa";


export const StarIcon = styled(FaStar)`
 color: gold;
 font-size: 20px;
`

export const DoctorPageWrapper = styled.div`

  margin-bottom: 50px;

  .title {
    color: #274472;
  }

  .main-box {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    .box {
      width: 420px;
      background-color: #5885af;
      border-radius: 8px;
      display: flex;
      align-items: center;
      flex-direction: column;
      transition: transform 0.3s ease;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);


      .box-img {
        width: 100%;
        height: 300px;
        overflow: hidden;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
      }

      .box-words{
        margin-top: 10px;
        color: white;
        width: 100%;
        height: 100%;
        padding-left: 20px;

        p{
          margin: 0;

        }

        .stars{
          float: right;
          margin-right: 10px;
        }
      }

      &:hover{
        transform: scale(1.05);
      }
    }
  }
`;
