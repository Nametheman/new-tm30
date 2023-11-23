import React from "react";
import styled from "styled-components";
import flexible from "../assets/icon/flexible.png";

const BenefitCard = ({ name, icon, idx }) => {
  return (
    <Container
      data-aos="zoom-in"
      data-aos-delay={`${idx * 100 - 50}`}
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="iconWrapper">
        <img src={icon} alt="" />
      </div>
      <p className="cardName">{name}</p>
    </Container>
  );
};

export default BenefitCard;

const Container = styled.div`
  display: flex;
  flex-direction: column !important;

  justify-content: center;
  align-items: center;
  .iconWrapper {
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
  .cardName {
    text-align: center;
    color: #4f4f4f;
  }
  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column !important;

    justify-content: center;
    align-items: center;
  }
`;
