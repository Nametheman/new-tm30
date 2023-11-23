import React from "react";
import styled from "styled-components";
import EmpoweringCard from "./EmpoweringCard";
import bankImg from "../assets/icon/bank.png";
import benefitImg from "../assets/icon/benefit.png";
import telcosImg from "../assets/icon/antenna.png";
import insuranceImg from "../assets/icon/Insurance.png";
import teamImg from "../assets/icon/team.png";

const Empowering = () => {
  const card = [
    { img: bankImg, name: "Banks" },
    { img: benefitImg, name: "Fintech" },
    { img: telcosImg, name: "Telcos" },
    { img: insuranceImg, name: "Insurance" },
    { img: teamImg, name: "Government" },
  ];
  return (
    <Wrapper>
      <h3
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-easing="linear"
        data-aos-duration="400"
      >
        Empowering Global Financial Service Providers through Digital
        Transformation
      </h3>
      <p
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-easing="linear"
        data-aos-duration="400"
      >
        TM30 serves as a catalyst for the digital transformation of financial
        service providers worldwide. By offering advanced technological
        infrastructure, digital banking solutions, open banking capabilities,
        and compliance support, We empower financial institutions to embrace
        digitalization thereby enhancing customer experience.
      </p>
      <div className="cardWrapper">
        {card.map((e, idx) => {
          return (
            <EmpoweringCard
              img={e.img}
              name={e.name}
              key={idx * 200}
              idx={idx}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Empowering;

const Wrapper = styled.div`
  padding: 6rem 8rem;

  h3 {
    color: #101828;
    font-weight: 600;
    font-size: 1.5rem;
    width: 45%;
    margin-bottom: 2rem;
  }
  p {
    color: #667085;
    font-size: 0.95rem;
    font-family: "mollen-light";
    width: 75%;
    line-height: 1.9;

    b {
      font-family: "mollen-bold";
    }
  }

  .cardWrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin-top: 2rem;
    justify-items: start; /* Positions items horizontally in the center */

    /* justify-content: space-between; */
  }
  @media only screen and (max-width: 1040px) {
    padding: 6rem 3rem;

    h3 {
      width: 70%;
    }
    p {
      width: 90%;
    }
    .cardWrapper {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin-top: 2rem;
      justify-items: start; /* Positions items horizontally in the center */

      /* justify-content: space-between; */
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 6rem 3rem;

    h3 {
      width: 70%;
    }
    p {
      width: 90%;
    }
    .cardWrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 2rem;
      justify-items: start; /* Positions items horizontally in the center */

      /* justify-content: space-between; */
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 3rem 2rem;
    h3 {
      width: 100%;
      font-size: 1.1rem;
      text-align: center;
    }
    p {
      width: 100%;
      font-size: 0.9rem;
    }
  }
`;
