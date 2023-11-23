import React from "react";
import styled from "styled-components";
import CareerInterestCard from "./CareerInterestCard";
import icon1 from "../assets/images/asset_1.gif";
import icon2 from "../assets/images/asset_2.gif";
import icon3 from "../assets/images/asset_3.gif";
// import icon1 from "../assets/icon/interestIco1.png";
// import icon2 from "../assets/icon/interestIco2.png";
// import icon3 from "../assets/icon/interestIco3.png";

const CareerInterest = () => {
  const cardDetails = [
    {
      icon: icon3,
      name: "Inspired by people",
      text: "People are the focal point of everything we do. Our daily task is to deliver transaction solutions that empower modern businesses and people to thrive.",
    },
    {
      icon: icon2,
      name: "Driven by Values",
      text: " Values drive our decisions and actions. Everyone is a stakeholder; we do what it takes to get it right the first time and all the time.",
    },
    {
      icon: icon1,
      name: "Focused on Scaling",
      text: "Regardless of how large we scale, we retain the agility of a startup and remain focused on creating the best solutions possible for our clients.",
    },
  ];
  return (
    <Wrapper>
      <h3 className="title">
        Thank you for your interest in joining our team!
      </h3>
      <p className="text">
        We believe work is more than a desk or a to-do list. We believe work
        should empower a better life. We’re:
      </p>

      <CardContainer>
        {cardDetails.map((details, idx) => {
          return (
            <CareerInterestCard
              icon={details.icon}
              key={idx + 1 * 3233}
              name={details.name}
              text={details.text}
            />
          );
        })}
      </CardContainer>
    </Wrapper>
  );
};

export default CareerInterest;

const Wrapper = styled.section`
  padding: 3.5rem 5rem 6rem;

  .intro {
    text-align: center;
    /* margin-top: 1.5rem; */
    font-family: "mollen-bold";
    line-height: 1.6;
    font-size: 1rem;
    color: #24b0ff;
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
    width: 60%;
    margin: auto;
    color: #667085;
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 4rem 5rem;
  }
  @media only screen and (max-width: 680px) {
    padding: 2rem 2rem 5rem;
  }
  @media only screen and (max-width: 790px) {
    padding: 2rem 2rem 5rem;

    .title {
      font-size: 1.2rem;
    }

    .text {
      font-size: 0.8rem;
      width: 100%;
    }
  }
`;

const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  @media only screen and (max-width: 1000px) {
    gap: 1rem;
  }
  @media only screen and (max-width: 960px) {
    flex-wrap: wrap;
  }
`;
