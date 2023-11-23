/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import Testimony from "./Testimony";
import agileIcon from "../assets/icon/agileIcon.svg";
import softwareIcon from "../assets/icon/softwareIcon.svg";
import centricIcon from "../assets/icon/centricIcon.svg";
import scalability from "../assets/icon/scalability.svg";
import knot from "../assets/icon/knot.svg";
import creativity from "../assets/icon/creativity.svg";
import innovation from "../assets/icon/innovate.svg";

const CoreValues = () => {
  return (
    <Wrapper>
      <p className="intro">We embrace the S.P.I.C.E values</p>
      <h3 className="title">Our Core Values</h3>
      <p className="text">
        We’re an ambitious and smart team with a shared mission. Our mission is
        to empower organizations across various sectors to achieve their full
        potential by providing tailored software solutions that drive
        efficiency, productivity, and growth. With a team of seasoned experts
        and a deep understanding of industry trends, we offer an unparalleled
        suite of software services that cater to diverse business requirements.
      </p>

      <TestimonyWrapper>
        <div className="testimonyBox">
          <span
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={softwareIcon}
              title="Solutions"
              text="We develop solutions for your business everyday needs"
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={centricIcon}
              title="Possibilities"
              text="Difficulty does not exist in our reality."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={knot}
              title="Do the impossible"
              text='Be energized by difficult problems. Revel in unknowns. Ask "Why?", but always question, "Why not?"'
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={creativity}
              title="Creativity"
              text="We are continually drawing out the best arrangements in the best innovative manner."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={agileIcon}
              title="Excellence"
              text="We do not settle for less. Excellence is our norm."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={innovation}
              title="Innovation"
              text="We are continually drawing out the best arrangements in the best innovative manner."
            />
          </span>
        </div>
      </TestimonyWrapper>
    </Wrapper>
  );
};

export default CoreValues;

const Wrapper = styled.section`
  padding: 3.5rem 5rem;

  .intro {
    text-align: center;
    margin: 0 auto;
    font-family: "mollen-light";
    line-height: 1.6;
    font-size: 1rem;
    color: #24b0ff;
    /* padding: 4px 10px;
    border-radius: 20px;
    background: #c6eaff;
    width: 300px; */
  }
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
    font-size: 1.2rem;
    width: 79%;
    margin: auto;
    color: #667085;
  }
  @media only screen and (max-width: 1250px) {
    padding: 3rem;
    .whoWeAre {
      padding: 2rem 2rem 3rem;
    }
    .text {
      text-align: center;
      margin-top: 1.3rem;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 1.2rem;
      width: 95%;
      margin: auto;
      color: #667085;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 3rem;
    .whoWeAre {
      padding: 2rem 2rem 3rem;
    }
    .text {
      text-align: center;
      margin-top: 1.3rem;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 0.9rem;
      width: 95%;
      margin: auto;
      color: #667085;
    }
    .title {
      font-family: "generalsans-semibold";
      font-size: 1.5rem;
      text-align: center;
      margin: 1rem 0;
    }
    .intro {
      text-align: center;
      /* margin-top: 1.5rem; */
      font-family: "mollen-bold";
      line-height: 1.6;
      font-size: 0.8rem;
      color: #24b0ff;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 1rem;
  }
`;

const TestimonyWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding: 0 5rem;

  .testimonyBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 900px) {
    padding: 0 0rem;

    .testimonyBox {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 585px) {
    padding: 0 0rem;

    .testimonyBox {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
