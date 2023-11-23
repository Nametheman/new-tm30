import React from "react";
import styled from "styled-components";
import metrics from "../assets/images/metrics.png";
import ellipse from "../assets/images/ellipse.png";

const JoinAcademy = () => {
  return (
    <Wrapper>
      <h3 className="title">Join us at TM30 Academy</h3>
      <p className="text">
        Read and learn more about our engineering academy, and how you can
        become a software developer
      </p>
      <div className="imageContainer">
        <img src={metrics} alt="" />
        <img src={ellipse} alt="" className="circle" />
      </div>
    </Wrapper>
  );
};

export default JoinAcademy;

const Wrapper = styled.section`
  padding: 2rem 12rem 5rem;
  .title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
  }
  .text {
    text-align: center;
    margin-top: 1.3rem;
    font-family: "mollen-light";
    line-height: 1.7;
    font-size: 0.9rem;
    width: 50%;
    margin: auto;
    color: #667085;
  }
  .imageContainer {
    display: flex;
    margin-top: 2.5rem;
    justify-content: center;
    position: relative;

    img {
      width: 95%;
    }
    .circle {
      position: absolute;
      bottom: -50px;
      right: -20px;
      z-index: -1;
      right: ;
      width: 100px;
    }
  }
  @media only screen and (max-width: 950px) {
    padding: 2rem 3rem 5rem;
  }
  @media only screen and (max-width: 750px) {
    padding: 2rem 3rem 5rem;

    .text {
      width: 100%;
      font-size: 0.7rem;
    }
    .imageContainer {
      display: flex;
      margin-top: 2.5rem;
      justify-content: center;
      position: relative;

      img {
        width: 95%;
      }
      .circle {
        position: absolute;
        bottom: -25px;
        right: -15px;
        z-index: -1;
        right: ;
        width: 50px;
      }
    }
  }
`;
