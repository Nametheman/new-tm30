import React from "react";
import styled from "styled-components";
import avatar from "../assets/images/contactAvatar.png";
import arrow from "../assets/icon/openArrow.svg";
import { Link } from "react-router-dom";

const LandingContact = () => {
  return (
    <Wrapper>
      <div className="content">
        <img src={avatar} alt="" />
        <h3>Get in Touch with Us</h3>
        <p>Are you ready to start your next project, contact us below</p>
        <Link to="/contact" className="linkbtn">
          Contact <img src={arrow} alt="" />
        </Link>{" "}
      </div>
    </Wrapper>
  );
};

export default LandingContact;

const Wrapper = styled.div`
  background: #f9fafb;
  padding: 5rem 15rem;

  .content {
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;

    h3 {
      color: #101828;
      font-weight: 600;
      font-size: 1.5rem;
      width: 45%;
      margin: 1.5rem 0 0.8rem;
      text-align: center;
    }
    p {
      text-align: center;
      color: #667085;
    }
    img {
      width: 8rem;
    }
    .linkbtn {
      background: #0090ff;
      color: #fff !important;
      padding: 0.8rem 1rem;
      border-radius: 0.4rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      width: 140px;
      font-size: 1rem;
      margin-top: 1.4rem;

      img {
        width: 10px;
        margin-bottom: 3px;
        animation: bounce 2s infinite;
      }
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 2rem 2rem;

    .content {
      padding: 0.5rem 0.5rem;
      h3 {
        width: 100%;
      }
    }
    /* background: #f51212; */
  }
`;
