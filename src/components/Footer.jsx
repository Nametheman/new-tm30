// import React from "react";
import styled from "styled-components";
import Socials from "./Socials";
import logo from "../assets/icon/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="foot1">
        <div className="firstSect">
          {/* <h3>TM30 Global</h3> */}
          <img src={logo} alt="" className="logo" />
          <p>29A Berkley Street, Off King George Road, Onikan Lagos Lagos</p>
          <Socials />
        </div>
        <div className="secondSect">
          <div className="col">
            <p className="title">Product</p>
            <a href="https://paymybills.ng/" target="_blank">
              Paymybills
            </a>
            <a href="https://www.edusponsor.com/" target="_blank">
              Edusponsor
            </a>
            <a href="https://mybackupcash.com/" target="_blank">
              Backup Cash
            </a>
            <a href="#" target="_blank">
              Residify
            </a>
            <a href="https://adashiesusuakawo.com.ng/" target="_blank">
              AdashiEsusuAkawo
            </a>
          </div>
          <div className="col">
            <p className="title">Solutions</p>
            <p>Agency Banking</p>
            <p>Bank Pro</p>
            <p>SoftPOS</p>
            <p>TMSaas</p>
            <p>ESMP</p>
            <p>SEAP</p>
          </div>
          <div className="col">
            <p className="title">Company</p>
            <Link to="/about">About Us</Link>
            <Link to="/about">Careers</Link>
            {/* <a href="https://tm30.medium.com/" target="_blank">
              Blog
            </a> */}
            <Link to="/products">Products</Link>
            <Link to="/projects">Projects</Link>
            {/* <Link to="/#features">Features</Link> */}
            <Link to="/contact">Contact</Link>
          </div>
          {/* <div className="col">
            <p className="title">Reach Us</p>
            <span>
              <Link to="/about">About Us</Link>
            </span>
            <span>
              <Link to="/careers">Careers</Link>
            </span>
          </div> */}
        </div>
      </div>
      <div className="foot2">
        <p className="firstP">
          Powered by <b>TM30 Global</b>
        </p>
        <p className="secondP">
          <b>© 2023 TM30 Global Limited.</b> All rights reserved.
        </p>
      </div>
    </Wrapper>
  );
};

export default Footer;
const Wrapper = styled.footer`
  /* position: absolute;
  bottom: 0;
  width: 100%; */
  background: #fff;
  padding: 4rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
  .foot1 {
    display: flex;
    height: 100%;
    .firstSect {
      flex: 1;
      h3 {
        color: #24b0ff;
        font-weight: 600;
      }
      p {
        color: #667085;
        font-family: "mollen-light", sans-serif;
        font-size: 0.95rem;
        margin-top: 40px;
      }
      .logo {
        width: 60px;
      }
    }
    .secondSect {
      flex: 1;
      display: flex;
      justify-content: space-between;
      .col {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;
        .title {
          font-family: "mollen-bold", sans-serif;
          color: #24b0ff;
        }
        p,
        a {
          color: #0e0e0e;
          text-decoration: none;
          font-size: 0.8rem;
        }
      }
    }
  }

  .foot2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0 0;
    border-top: 1px solid #eaecf0;

    .firstP {
      color: #98a2b3;
      font-size: 0.7rem;
      b {
        color: #24b0ff;
        font-size: 0.8rem;
      }
    }
    .secondP {
      color: #98a2b3;
      font-size: 0.7rem;
    }
  }
  @media only screen and (max-width: 1110px) {
    padding: 2rem 5rem;

    .foot1 {
      flex-direction: column;
      gap: 3rem;

      .secondSect {
        /* flex-direction: column; */
      }
    }
    .foot2 {
      font-size: 0.6rem;
      b {
        font-size: 0.6rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 2rem;

    .foot1 {
      flex-direction: column;
      gap: 3rem;

      .secondSect {
        /* flex-direction: column; */
      }
    }
    .foot2 {
      font-size: 0.6rem;
      b {
        font-size: 0.6rem;
      }
    }
  }
`;
