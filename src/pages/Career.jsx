import React from "react";
import styled from "styled-components";
import BenefitCard from "../bits/BenefitCard";
import CareerInterest from "../components/CareerInterest";
import Hero from "../components/Hero";
import flexible from "../assets/icon/flexible.png";
import smart from "../assets/icon/smart.png";
import conductive from "../assets/icon/conductive.png";
import competitive from "../assets/icon/competitive.png";
import learning from "../assets/icon/learning.png";
import lunch from "../assets/icon/lunch.png";
import JoinAcademy from "../components/JoinAcademy";
import CareerTalented from "../components/CareerTalented";
import LocationMap from "../components/LocationMap";

const Career = () => {
  const perks = [
    { name: "Flexible work policy", icon: flexible },
    { name: "Work with smart teams", icon: smart },
    { name: "Conducive work environment", icon: conductive },
    { name: "Competitive Compensation", icon: competitive },
    { name: "Learning & development", icon: learning },
    { name: "Lunch on Us", icon: lunch },
  ];
  return (
    <Wrapper>
      {" "}
      <div className="whoWeAre">
        <Hero
          title="Join the A-Class team for Go-getters"
          intro=""
          text="You need more than talent to change the world. We have put together an amazing team of optimistic and goal-driven Clever Tigers with passion and skill sets. We encourage diversity and we are open to meeting just about anyone with the right passion and skills regardless of looks, gender, color, tribe, nationality, and disability. At TM30 GLOBAL, the best minds collaborate to create sustainable solutions. It is more than just a job, it’s a commitment to doing beyond our best, and getting it right the first time."
        />
      </div>
      <CareerInterest />
      <Benefit>
        <h3
          className="title"
          data-aos="zoom-in"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          Benefits and Perks of Joining TM30
        </h3>
        <p
          className="text"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          We are dedicated to making the rest of your life as rewarding as your
          job.
        </p>
        <div className="perksWrapper">
          {perks.map((perk, idx) => {
            return (
              <BenefitCard
                key={idx * 5322}
                name={perk.name}
                icon={perk.icon}
                idx={idx}
              />
            );
          })}
        </div>
      </Benefit>
      <JoinAcademy />
      <CareerTalented />
      <LocationMap />
    </Wrapper>
  );
};

export default Career;

const Wrapper = styled.section`
  margin-top: 80px;

  .whoWeAre {
    padding: 3% 10%;
    width: 100%;
  }
  @media only screen and (max-width: 960px) {
    /* padding: 3rem 5rem; */
    .whoWeAre {
      padding: 2rem 2rem 3rem;
    }
  }
`;
const Benefit = styled.div`
  background: #f9fafb;
  padding: 6rem 12rem;

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
    font-size: 0.9rem;
    width: 70%;
    margin: auto;
    color: #667085;
  }

  .perksWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    /* flex-wrap: wrap; */
    margin-top: 2.3rem;
  }
  @media only screen and (max-width: 960px) {
    padding: 3rem 5rem;
    .whoWeAre {
      padding: 2rem 2rem 3rem;
    }
    .perksWrapper {
      display: grid;
      justify-items: center;
      align-items: center;
      justify-content: center;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 618px) {
    padding: 3rem 2rem;

    .perksWrapper {
      display: grid;
      /* gap: 3rem; */

      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
