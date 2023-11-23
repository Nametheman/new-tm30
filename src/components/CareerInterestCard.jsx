import React from "react";
import styled from "styled-components";
import icon1 from "../assets/icon/interestIco1.png";

const CareerInterestCard = ({ icon, name, text, idx }) => {
  return (
    <Container
      data-aos="zoom-in"
      data-aos-delay={`${idx * 100 - 50}`}
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <img src={icon} alt="" />
      <h3 className="cardT1">{name}</h3>
      <p className="cardT2">{text}</p>
    </Container>
  );
};

export default CareerInterestCard;
const Container = styled.div`
  background: #fff;
  box-shadow: 15px 25px 40px 0px #4040400d;
  width: 330px;
  padding: 1rem 2rem;
  border-radius: 30px;
  border: 1px solid #ecebec;

  .cardT1 {
    color: #000d36;
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  .cardT2 {
    color: #000d3673;
    font-size: 0.8rem;
    line-height: 1.9;
  }

  img {
    width: 70px;
  }

  @media only screen and (max-width: 1110px) {
    width: 300px;
  }
  @media only screen and (max-width: 1000px) {
    width: 300px;
  }
  @media only screen and (max-width: 615px) {
    width: 90%;
  }
`;
