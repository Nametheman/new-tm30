import React from "react";
import styled from "styled-components";
import Testimony from "./Testimony";
import agileIcon from "../assets/icon/agileIcon.svg";
import softwareIcon from "../assets/icon/softwareIcon.svg";
import centricIcon from "../assets/icon/centricIcon.svg";
import scalability from "../assets/icon/scalability.svg";
import security from "../assets/icon/security.svg";
import innovation from "../assets/icon/innovation.svg";

const Testimonials = () => {
  return (
    <Wrapper>
      <h2 data-aos="zoom-in" data-aos-easing="linear" data-aos-duration="800">
        Leverage our cutting-edge Technology
      </h2>
      <p
        className="leverage"
        data-aos="zoom-in"
        data-aos-delay="300"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        TM30 leverages state-of-the-art technologies to deliver superior
        solutions that caters to a wide range of industries; Financial
        Institutions, Telecommunications, Enterprises, Retail, Energy and
        Utilities, Education, Government and Public Sector etc.
      </p>

      <TestimonyWrapper>
        <div className="testimonyBox">
          <span
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={softwareIcon}
              title="Custom Software Development"
              text="We help to create tailored software solutions that addresses specific/various business requirements. We develop custom applications, software products, and platforms from scratch, ensuring a perfect fit for our client's unique needs."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={centricIcon}
              title="User-Centric Design"
              text="We focus on creating intuitive and user-friendly interfaces that enhances the user’s experience. We employ user-centric design principles to develop software that is visually appealing, easy to navigate, and optimized for usability."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={agileIcon}
              title="Agile Development Methodology"
              text="We embrace agile development approach that allows us to deliver solutions quickly and efficiently. Our approach enables iterative development, frequent communication with clients, and adaptability to changing requirements, ensuring a high degree of client satisfaction."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={scalability}
              title="Scalability and Flexibility"
              text="We design systems with scalability in mind, ensuring that they can grow alongside the business and handle increased workloads since scaling and adapting sytems is crucial for businesses in a dynamic environment"
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={security}
              title="Security and Data Privacy"
              text="With the increasing threats to digital security,   We as a software solution company places great importance on implementing robust security measures."
            />
          </span>
          <span
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-easing="linear"
            data-aos-duration="400"
          >
            <Testimony
              img={innovation}
              title="Emerging Technologies and Innovation"
              text="To stay ahead in the ever-evolving technological landscape we keep our finger on the pulse of emerging technologies. We invest in research and development, and apply innovative solutions to drive digital transformation for our clients."
            />
          </span>
        </div>
      </TestimonyWrapper>
    </Wrapper>
  );
};

export default Testimonials;

const Wrapper = styled.div`
  padding: 3rem 5rem;
  h3 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
  }
  p {
    text-align: center;
    font-size: 0.91rem;
    font-family: "mollen-light", sans-serif;
    color: #667085;
    margin-top: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 600;
    color: #31b4ff;
    margin-top: 3rem;
  }
  .leverage {
    width: 65%;
    margin: 0 auto;
    margin-top: 0.7rem;
    font-size: 1rem;
    line-height: 1.5;
  }
  @media only screen and (max-width: 1313px) {
    padding: 3rem 1rem;
  }
  @media only screen and (max-width: 450px) {
    padding: 3rem 1rem;
    h2 {
      font-size: 1.5rem;
    }
    .leverage {
      width: 100%;
      font-size: 0.8rem;
    }
  }
`;
const TestimonyWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  padding: 0 5rem;

  .testimonyBox {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1.5rem;
  }

  @media only screen and (max-width: 1313px) {
    .testimonyBox {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 1150px) {
    .testimonyBox {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media only screen and (max-width: 855px) {
    .testimonyBox {
      grid-template-columns: 1fr;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 0 0.5rem;
  }
`;
