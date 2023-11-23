import React from "react";
import styled from "styled-components";
import icon from "../assets/icon/agileIcon.svg";

const Testimony = ({ img, title, text }) => {
  return (
    <Wrapper>
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p className="t-text">{text}</p>
    </Wrapper>
  );
};

export default Testimony;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  margin: 0 2.3rem 2.5rem 0;
  img {
    width: 32px;
    height: 50px;
  }
  h4 {
    font-weight: 600;
    color: #101828;
  }
  .t-text {
    text-align: center;
    color: #667085;
    line-height: 1.5;
    /* letter-spacing: 0.5px; */
    margin: 5px;
    font-size: 0.91rem;
    font-family: "mollen-light", sans-serif;
  }
  @media only screen and (max-width: 585px) {
    padding: 0 0rem;

    img {
      width: 20px;
      height: 30px;
    }
    h4 {
      font-weight: 500;
      font-size: 0.9rem;
      color: #101828;
    }
  }
  @media only screen and (max-width: 450px) {
    margin: 0 0 2.5rem 0;
  }
`;
