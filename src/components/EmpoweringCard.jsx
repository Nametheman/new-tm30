import React from "react";
import styled from "styled-components";

const EmpoweringCard = ({ img, name, idx }) => {
  return (
    <Wrapper
      data-aos="zoom-in"
      data-aos-delay={`${idx * 100 - 50}`}
      data-aos-easing="linear"
      data-aos-duration="400"
    >
      <div className="card">
        <img src={img} alt="" />
      </div>
      <p className="cardName">{name}</p>
    </Wrapper>
  );
};

export default EmpoweringCard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  .cardName {
    color: #24b0ff !important;
    font-weight: 600;
    font-size: 1.5rem;
    text-align: center;
    font-family: "mollen-bold";
  }
  .card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    background: #ffffff;
    border: 1.5px solid #f4f4f4;
    box-shadow: 0px 40px 41.2663px rgba(64, 64, 64, 0.05);
    border-radius: 30px;
    img {
      width: 75px;
      height: 70px;
    }
  }

  @media only screen and (max-width: 550px) {
    .card {
      width: 90px;
      height: 90px;

      img {
        width: 40px;
        height: 40px;
      }
    }
    .cardName {
      font-size: 0.8rem;
    }
  }
`;
