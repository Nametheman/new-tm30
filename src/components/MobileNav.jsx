/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { RxCaretDown } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import vas from "../assets/icon/vas.png";
import verifi from "../assets/icon/verifi.png";
import tmsaas from "../assets/icon/tmsaas.png";
import bank from "../assets/icon/bank-2.png";
import contactless from "../assets/icon/contactless-2.png";
import logo from "../assets/icon/logo.png";

const MobileNav = ({ translateX, setTranslateX, setShow }) => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [isSubNavActive, setIsSubNavActive] = useState(false);
  const closeMenuHandler = () => {
    setTranslateX(400);

    setTimeout(() => {
      setShow(false);
    }, 300);
  };
  return (
    <Container>
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
        $translateX={translateX}
      >
        <div className="closeBtn">
          <IoMdClose onClick={closeMenuHandler} />
        </div>{" "}
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" onClick={closeMenuHandler}>
              Home
            </NavLink>
          </li>
          {/* <li>
            <a href="#features" onClick={closeMenuHandler}>
              Features
            </a>
          </li> */}
          {/* <li className="solutionsBg">
            <span
              className="solutions"
              onClick={() => {
                if (isSubNavActive === false) {
                  setShowSubNav(true);
                  setIsSubNavActive(true);
                }
                if (isSubNavActive === true) {
                  setShowSubNav(false);
                  setIsSubNavActive(false);
                }
              }}
            >
              <p>Our Solutions</p>
              <RxCaretDown />
            </span>
            {showSubNav && (
              <div
                className="solutionsContainer"
                onClick={(e) => {
                  // e.stopPropagation();
                  setShowSubNav(true);
                  setIsSubNavActive(true);
                }}
              >
                <div className="solution">
                  <img src={contactless} alt="" />
                  <span>
                    <h3>Agency Banking</h3>
                    <p>
                      Enjoy centralized terminal management for remote
                      monitoring and control of diverse terminal networks along
                      with a seamless agency banking experience.
                    </p>
                  </span>
                </div>
                <div className="solution">
                  <img src={bank} alt="" />
                  <span>
                    <h3>Bank Pro</h3>
                    <p>Mobile & Internet Banking made easy.</p>
                  </span>
                </div>
                <div className="solution">
                  <img src={tmsaas} alt="" />
                  <span>
                    <h3>TMSaas</h3>
                    <p>
                      Enjoy easy, secure and convenient access to bills payment
                    </p>
                  </span>
                </div>
                <div className="solution">
                  <img src={verifi} alt="" />
                  <span>
                    <h3>VerifyPro</h3>
                    <p>
                      Provide businesses and individuals the confidence needed
                      to make informed decisions.
                    </p>
                  </span>
                </div>
                <div className="solution">
                  <img src={vas} alt="" />
                  <span>
                    <h3>VAS Aggregator</h3>
                    <p>
                      Provide businesses and individuals the confidence needed
                      to make informed decisions.
                    </p>
                  </span>
                </div>
              </div>
            )}
          </li> */}
          <li>
            <NavLink
              activeClassName="active"
              to="/solutions"
              onClick={closeMenuHandler}
            >
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/products"
              onClick={closeMenuHandler}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="active"
              to="/projects"
              onClick={closeMenuHandler}
            >
              Projects
            </NavLink>
          </li>
          {/* <li>
            <a href="https://tm30.medium.com/" target="_blank" rel="noreferrer">
              Blog
            </a>
          </li> */}
          <li>
            <NavLink to="/careers" onClick={closeMenuHandler}>
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenuHandler}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="contactBtn"
              onClick={closeMenuHandler}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </Content>
    </Container>
  );
};

export default MobileNav;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
`;

const Content = styled.nav`
  position: absolute;
  z-index: 1100;

  background-color: #fff;
  padding: 60px 40px;
  width: 400px;
  height: 100%;
  right: 0;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 0.3s ease;
  /* transform: translateX(400px); */
  transform: translateX(${(props) => props.$translateX}px);
  .closeBtn {
    position: absolute;
    top: 40px;
    svg {
      color: #00a9ff;
      font-size: 30px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
    list-style: none;
    transition: height 0.3s ease;
    margin-top: 4rem;

    li {
      transition: all 0.3s ease;

      a {
        color: #212121;
        text-decoration: none;
        font-size: 1.06rem;
        .active,
        &:hover {
          transition: 0.3s ease;
          color: #24b0ff; /* Example styling for the active link */
          font-family: "mollen-bold";
        }
      }

      p {
        cursor: pointer;
      }

      .active,
      &:hover {
        transition: 0.3s ease;
        color: #24b0ff; /* Example styling for the active link */
        font-family: "mollen-bold";
      }
      .solutions {
        display: flex;
        align-items: center;
        gap: 0.2rem;
      }
    }
    .solutionsBg {
      position: relative;
      transition: all 0.3s ease;

      .solutionsContainer {
        transition: all 0.3s ease;
        z-index: 202030;
        bottom: -540px;
        left: -120px;
        margin-top: 2rem;
        border-radius: 15px;
        cursor: default;
        .sol_intro {
          color: #97a3b7;
          font-size: 0.9rem;
          margin-bottom: 0.5rem;
        }
        .solution {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1rem 0;
          &:not(:last-child) {
            border-bottom: 1px solid #efefef;
          }
          h3 {
            color: #111b29;
            margin-bottom: 0.2rem;
            font-size: 0.9rem;
          }
          span {
            p {
              color: #677489;
              font-size: 0.6rem;
              line-height: 1.6;
            }
          }
        }
      }
    }
  }
`;
