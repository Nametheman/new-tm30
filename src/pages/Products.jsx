import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import BenefitCard from "../bits/BenefitCard";
import CareerInterest from "../components/CareerInterest";
import CareerInterestCard from "../components/CareerInterestCard";
import icon1 from "../assets/images/asset_3.gif";
import icon2 from "../assets/images/asset_2.gif";
import icon3 from "../assets/images/asset_1.gif";
import LocationMap from "../components/LocationMap";
import OurProducts from "../components/OurProducts";

const Products = () => {
  const cardDetails = [
    {
      icon: icon1,
      name: "Inspired by people",
      text: "People are the focal point of everything we do. Our daily task is to deliver transaction solutions that empower modern businesses and people to thrive.",
    },
    {
      icon: icon2,
      name: "Driven by Values",
      text: " Values drive our decisions and actions. Everyone is a stakeholder; we do what it takes to get it right the first time and all the time.",
    },
    {
      icon: icon3,
      name: "Focused on Scaling",
      text: "Regardless of how large we scale, we retain the agility of a startup and remain focused on creating the best solutions possible for our clients.",
    },
  ];
  return (
    <Wrapper>
      <div className="heroWrapper">
        <Hero title="Products" text="Take a look at our past products." />
      </div>
      <p
        className="textHd"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="400"
        data-aos-delay="300"
        s
      >
        We believe work is more than a desk or a to-do list. We believe work
        should empower a better life. We’re:
      </p>
      <CardContainer>
        {cardDetails.map((details, idx) => {
          return (
            <CareerInterestCard
              icon={details.icon}
              key={idx * 3233}
              name={details.name}
              idx={idx}
              text={details.text}
            />
          );
        })}
      </CardContainer>
      <OurProducts />
      <LocationMap />
    </Wrapper>
  );
};

export default Products;
const Wrapper = styled.section`
  /* padding: 2rem 9rem 5rem; */
  margin-top: 80px;

  .heroWrapper {
    padding: 2rem 9rem 5rem;
  }
  .textHd {
    text-align: center;
    font-family: "mollen-light";
    line-height: 1.7;
    font-size: 1.1rem;
    width: 55%;
    margin: 2rem auto 0;
    color: #667085;
  }
  @media only screen and (max-width: 900px) {
    .heroWrapper {
      padding: 2rem 4rem 5rem;
    }
  }
  @media only screen and (max-width: 680px) {
    .heroWrapper {
      padding: 2rem 2rem 5rem;
    }
  }
  @media only screen and (max-width: 790px) {
    .textHd {
      font-size: 0.8rem;
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
