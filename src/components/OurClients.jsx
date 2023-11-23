import React from "react";
import styled from "styled-components";
import p1 from "../assets/icon/p1.png";
import p2 from "../assets/icon/p2.png";
import p3 from "../assets/icon/p3.png";
import p4 from "../assets/icon/p4.png";
import p5 from "../assets/icon/p5.png";
import p6 from "../assets/icon/p6.png";
import p7 from "../assets/icon/p7.png";
import p8 from "../assets/icon/p8.png";
import p9 from "../assets/icon/p9.png";
import p10 from "../assets/icon/p10.png";
import p11 from "../assets/icon/p11.png";
import p12 from "../assets/icon/p12.png";

const OurClients = () => {
  return (
    <Wrapper>
      <h3 className="title">Our Clients</h3>
      {/* <div> */}
      <p className="text">
        Connect your Business, connect your teams. With over 20+ Clients already
        available in our directory, Here are some of the clients we have worked
        with in the past.
      </p>
      <div className="clientsContainer">
        <img src={p1} alt="" />
        <img src={p2} alt="" />
        <img src={p3} alt="" />
        <img src={p4} alt="" />
        <img src={p5} alt="" />
        <img src={p6} alt="" />
        <img src={p7} alt="" />
        <img src={p8} alt="" />
        <img src={p9} alt="" />
        <img src={p10} alt="" />
        <img src={p11} alt="" />
        <img src={p12} alt="" />
      </div>
      {/* </div> */}
    </Wrapper>
  );
};

export default OurClients;

const Wrapper = styled.div`
  background: #f9fafb;
  padding: 2rem 20rem;
  .title {
    font-weight: 600;
    font-size: 1.8rem;
    margin: 1rem 0 0 0rem;
    color: #101828;
    text-align: center;
  }
  .text {
    text-align: center;
    color: #667085;
    font-size: 1.1rem;
    margin-top: 1rem;
    line-height: 1.5;
  }
  .clientsContainer {
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    row-gap: 1rem;
  }
  @media only screen and (max-width: 1300px) {
    padding: 2rem 10rem;

    .clientsContainer {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media only screen and (max-width: 930px) {
    padding: 2rem 3rem;

    .clientsContainer {
      grid-template-columns: repeat(6, 1fr);
    }
  }
  @media only screen and (max-width: 701px) {
    padding: 2rem 2rem;

    .clientsContainer {
      grid-template-columns: repeat(4, 1fr);
      justify-items: center;
      img {
        width: 50px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .text {
      font-size: 0.8rem;
    }
  }
`;
