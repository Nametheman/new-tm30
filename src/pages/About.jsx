/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import CoreValues from "../components/CoreValues";
import DirectorsMain from "../components/DirectorsMain";
import Hero from "../components/Hero";
import ManagementMain from "../components/ManagementMain";
import arrow from "../assets/icon/openArrow.svg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Wrapper>
      <div className="whoWeAre">
        <Hero
          title="Who we are"
          intro="About us"
          text="We are a software company with strong technical expertise in developing innovative solutions that drive digital transformation in the IT industry. Leveraging our experience, we deliver our solutions with flexibility, responsiveness, efficiency and unmatched performance which has made us one of the most sought after technology companies"
        />
      </div>
      <CoreValues />
      <DirectorsMain />
      <ManagementMain />
      <Hiring>
        <h3 className="title">We're hiring!</h3>
        <p className="hiringTxt">
          Our team is growing fast and we’re always looking for smart people.
        </p>
        <Link to="/careers" className="linkbtn">
          View Open Roles <img src={arrow} alt="" />
        </Link>{" "}
      </Hiring>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin-top: 80px;

  .whoWeAre {
    padding: 3% 10%;
    width: 100%;
  }
  @media only screen and (max-width: 1250px) {
    /* padding: 3rem 5rem; */
    .whoWeAre {
      padding: 2rem 2rem 3rem;
    }
  }
`;

const Hiring = styled.section`
  background: #f9fafb;
  padding: 5rem 10rem;

  .title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
    color: #101828;
  }
  .hiringTxt {
    color: #667085;
    text-align: center;
  }
  .linkbtn {
    background: #0090ff;
    color: #fff !important;
    padding: 0.8rem 1rem;
    border-radius: 0.4rem;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    width: 200px;
    font-size: 0.8rem;
    /* margin-top: 1.4rem; */
    margin: 1.4rem auto 0;

    img {
      width: 10px;
      margin-bottom: 3px;
      animation: bounce 2s infinite;
    }
  }
  @media only screen and (max-width: 610px) {
    padding: 5rem;
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 3rem;
    .title {
      font-family: "generalsans-semibold";
      font-size: 1.2rem;
      text-align: center;
      margin: 1rem 0;
      color: #101828;
    }
    .hiringTxt {
      color: #667085;
      text-align: center;
      font-size: 0.8rem;
    }
  }
`;
