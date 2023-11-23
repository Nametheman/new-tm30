import React from "react";
import styled from "styled-components";

const ServicesCard = ({ icon, text, title, width, height }) => {
  const Img = styled.img`
    width: ${width};
    height: ${height};
  `;
  return (
    <Wrapper>
      <div className="cardLogoWrapper">
        <Img src={icon} alt="" />
      </div>
      <h3 className="title">{title}</h3>
      <p className="c-text">{text}</p>
    </Wrapper>
  );
};

export default ServicesCard;

const Wrapper = styled.div`
  background: #ecf8ff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: 255px !important;
  height: 100%;
  padding: 1rem;

  .cardLogoWrapper {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    /* img {
      width: 37px;
      height: 30px;
    } */
  }

  .title {
    color: #00a3ff !important;
    font-weight: 600;
    font-size: 1rem;
    margin: 3rem 0 0;
    width: 100% !important;
  }
  .c-text {
    width: 100% !important;
    margin: 1rem 0 0;
    font-size: 0.8rem;
    letter-spacing: 0.3px;
    color: #000000 !important;
    font-family: "mollen-light";
    line-height: 1.5;
  }

  @media only screen and (max-width: 450px) {
    .title {
      color: #00a3ff !important;
      font-weight: 600;
      font-size: 1rem;
      margin: 3rem 0 0;
      width: 100% !important;
      text-align: left;
    }
  }
  @media only screen and (min-width: 1680px) {
    min-width: 280px !important;
  }
`;
