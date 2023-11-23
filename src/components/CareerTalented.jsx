import React from "react";
import styled from "styled-components";
import metrics2 from "../assets/images/metrics2.png";
import AvailablePositions from "./AvailablePositions";

const CareerTalented = () => {
  return (
    <Wrapper>
      <div className="hdIntro">
        <p className="intro">Open Positions</p>
        <h3>We’re looking for talented people</h3>
        <p className="text">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do you best work.
        </p>
      </div>
      <div className="imageContainer">
        <img src={metrics2} alt="" />
      </div>
      <AvailablePositions />
    </Wrapper>
  );
};

export default CareerTalented;

const Wrapper = styled.div`
  background: #f9fafb;
  padding: 2rem 12rem;

  .hdIntro {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background: #c6eaff; */
    .intro {
      padding: 4px 10px;
      border-radius: 20px;
      background: #c6eaff;
      color: #015b90;
      font-size: 0.8rem;
      font-family: "mollen-light";
    }

    .text {
      text-align: center;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 0.9rem;
      width: 60%;
      margin: auto;
      color: #667085;
    }
    h3 {
      color: #101828;
      font-size: 1.9rem;
      font-weight: 600;
      margin: 1.3rem 0;
    }
  }
  .imageContainer {
    display: flex;
    justify-content: center;
    margin: 4.3rem 0;
    img {
      width: 95%;
    }
  }
  @media only screen and (max-width: 950px) {
    padding: 2rem 3rem 5rem;
  }
  @media only screen and (max-width: 750px) {
    padding: 2rem 2rem 5rem;
    .intro {
      padding: 4px 10px;
      border-radius: 20px;
      background: #c6eaff;
      color: #24b0ff;
      font-size: 0.8rem;
      font-family: "mollen-bold";
    }

    .text {
      text-align: center;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 0.9rem;
      width: 100% !important;
      margin: auto;
      color: #667085;
    }
    h3 {
      color: #101828;
      text-align: center;

      font-size: 1.3rem !important;
      font-weight: 500;
      margin: 1.3rem 0;
      width: 100% !important;
    }
  }
`;
