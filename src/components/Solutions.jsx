import React from "react";
import styled from "styled-components";
import solutions from "../assets/images/solutions.png";
import solutionIco from "../assets/icon/solutionsIcon.svg";
import arrow from "../assets/icon/openArrow.svg";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <Wrapper>
      <div
        className="flexChild1"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <img src={solutionIco} alt="" />
        <p className="solutiontxt">Our Unique Solutions include</p>
        <h3>Agency Banking solution</h3>
        <p>
          TM30 Agency Banking Solution empowers you to effectively drive
          financial inclusion, scale customers acquisition and increase
          profitability.
        </p>
        <p>
          We have designed our solution with the success of your business in
          mind, the platform enables you take advantage of current and future
          financial services opportunities.
        </p>
        <a href="https://agencybanking.tm30.net" target="_blank">
          Learn More <img src={arrow} alt="" />
        </a>
      </div>
      <div
        className="flexChild2"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        <img src={solutions} alt="" />
      </div>
    </Wrapper>
  );
};

export default Solutions;
const Wrapper = styled.section`
  background: #f9fafb;
  padding: 6rem 6rem 5rem;
  display: flex;
  gap: 10rem;
  align-items: center;

  .flexChild1 {
    img {
      width: 60px;
    }
    .solutiontxt {
      color: #24b0ff;
      font-size: 1.2rem;
      margin-top: 1rem;
    }
    h3 {
      font-weight: 600;
      font-size: 2.2rem;
      margin-top: 1.7rem;
      color: #0e0e0e;
    }
    p {
      margin-top: 2rem;
      color: #667085;
      font-size: 1.05rem;
      font-family: "mollen-light";
    }
    a {
      background: #0090ff;
      color: #fff !important;
      padding: 0.8rem 1rem;
      border-radius: 0.4rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      width: 140px;
      font-size: 0.8rem;
      margin-top: 2rem;

      img {
        width: 10px;
        margin-bottom: 3px;
        animation: bounce 2s infinite;
      }
    }
  }
  .flexChild2 {
    img {
      width: 670px;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    25% {
      transform: translateY(-1px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(1px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }

  @media only screen and (max-width: 1435px) {
    .flexChild2 {
      img {
        width: 550px;
      }
    }
  }
  @media only screen and (max-width: 1230px) {
    .flexChild2 {
      img {
        width: 400px;
      }
    }
  }
  @media only screen and (max-width: 1152px) {
    .flexChild1 {
      h3 {
        font-size: 1.8rem;
      }
      .solutiontxt {
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    flex-direction: column;
    gap: 1rem;
    .flexChild2 {
      img {
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 3rem 2rem;
  }
`;
