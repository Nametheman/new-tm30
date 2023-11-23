import React from "react";
import styled from "styled-components";
import heroBg from "../assets/images/header_section.png";

const Hero = ({ title, intro, text }) => {
  return (
    <Wrapper
      data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <p className="intro" data-aos="fade-down" data-aos-duration="1000">
        {intro ? intro : ""}
      </p>
      <p className="title" data-aos="fade-down" data-aos-duration="1000">
        {title}
      </p>
      <p
        className="text"
        data-aos="fade-down"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        {text}
      </p>
    </Wrapper>
  );
};

export default Hero;

const Wrapper = styled.div`
  background-image: linear-gradient(
      178deg,
      rgba(208, 235, 255, 0.863) 0%,
      rgba(27, 200, 234, 0.809) 53%,
      rgba(0, 163, 217, 0.809) 100%
    ),
    url(${heroBg});
  /* height: 400px; */
  backdrop-filter: blur(125px);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.7rem 11rem;

  h3,
  p {
    color: #fff;
  }
  .title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
  }
  .text {
    text-align: center;
    margin-top: 1.3rem;
    font-family: "mollen-light";
    line-height: 1.6;
    font-size: 1.1rem;
  }
  .intro {
    text-align: center;
    /* margin-top: 1.5rem; */
    font-family: "mollen-light";
    line-height: 1.6;
    font-size: 1.02rem;
  }
  @media only screen and (max-width: 1100px) {
    padding: 3.3rem 2rem;
    .title {
      font-family: "generalsans-semibold";
      font-size: 1.5rem;
    }
    .text {
      text-align: center;
      margin-top: 1.3rem;
      font-family: "mollen-light";
      line-height: 1.6;
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 790px) {
    padding: 3.3rem 3rem;
    .title {
      font-family: "generalsans-semibold";
      font-size: 1.5rem;
    }
    .text {
      text-align: center;
      margin-top: 1.3rem;
      font-family: "mollen-light";
      line-height: 1.6;
      font-size: 0.8rem;
    }
  }
  @media only screen and (max-width: 518px) {
    padding: 3.3rem 2rem;
  }
`;
