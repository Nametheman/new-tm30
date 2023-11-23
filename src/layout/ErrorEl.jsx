import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/icon/logo.png";
import { Link } from "react-router-dom";

const ErrorEl = () => {
  return (
    <Container>
      <Navbar />
      <div className="content">
        <img src={logo} alt="" />
        <h3>Uh Uh!</h3>
        <p>
          An error has occurred. Kindly go back to the{" "}
          <Link to="/">homepage</Link>.
        </p>
      </div>
      <Footer />
    </Container>
  );
};

export default ErrorEl;

const Container = styled.section`
  position: relative;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;

    img {
      opacity: 0.5;
      animation: bounce2 5s infinite;
    }
    h3 {
      margin-top: 2rem;
      font-size: 2rem;
      color: #505050;
    }
    p {
      margin-top: 0.9rem;
      color: #7a7979;
      a {
        color: rgb(36, 176, 255);
        text-decoration: none;
      }
    }
  }

  @keyframes bounce2 {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    25% {
      transform: translateY(-10px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(10px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;
