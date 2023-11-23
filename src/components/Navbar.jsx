import React, { useState } from "react";
import styled from "styled-components";
import { RxCaretDown } from "react-icons/rx";
import BlueButton from "./BlueButton";
import { NavLink, useNavigate } from "react-router-dom";
import vas from "../assets/icon/vas.png";
import verifi from "../assets/icon/verifi.png";
import tmsaas from "../assets/icon/tmsaas.png";
import bank from "../assets/icon/bank-2.png";
import contactless from "../assets/icon/contactless-2.png";
import logo from "../assets/icon/logo.png";
import soft from "../assets/icon/softposIco.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [showSubNav, setShowSubNav] = useState(false);
  const [isSubNavActive, setIsSubNavActive] = useState(false);
  const navigate = useNavigate();

  window.addEventListener("scroll", () => {
    setShowSubNav(false);
    setIsSubNavActive(false);
  });
  return (
    <Wrapper
      onClick={() => {
        if (isSubNavActive === true) {
          setShowSubNav(false);
          setIsSubNavActive(false);
        }
      }}
    >
      <NavLink to="/">
        {/* <h3>TM30 Global</h3> */}
        <img src={logo} alt="logo" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          {/* <li>
            <Link
              to="features"
              onClick={() => {
                navigate("/");
              }}
              style={{ cursor: "pointer" }}
            >
              What we Offer
            </Link>
          </li> */}
          <li className="solutionsBg">
            <span
              className="solutions"
              onClick={() => {
                setShowSubNav(true);
                setIsSubNavActive(true);
              }}
            >
              <NavLink
                activeClassName="active"
                to="/solutions"
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <p>Our Solution</p>
                <RxCaretDown />
              </NavLink>
            </span>
            {showSubNav && (
              <div
                className="solutionsWrapper"
                onClick={(e) => {
                  setShowSubNav(false);
                  setIsSubNavActive(false);
                }}
              >
                <div
                  className="solutionsContainer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowSubNav(true);
                  }}
                >
                  <p className="sol_intro">Our Business solutions</p>
                  <Link
                    to="agency"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={contactless} alt="" />
                    <span>
                      <h3>Agency Banking</h3>
                      <p>
                        All-inclusive agency banking solution with robust tools
                        for efficient agent and liquidity management.
                      </p>
                    </span>
                  </Link>
                  <Link
                    to="bankpro"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={bank} alt="" />
                    <span>
                      <h3>Bank Pro</h3>
                      <p>Mobile & Internet Banking made easy.</p>
                    </span>
                  </Link>
                  <Link
                    to="softpos"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={soft} alt="" />
                    <span>
                      <h3>SoftPOS</h3>
                      <p>
                        Accept payments from customers using contactless-enabled
                        cards, mobile wallets, or wearable devices.
                      </p>
                    </span>
                  </Link>
                  <Link
                    to="tmsaas"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={tmsaas} alt="" />
                    <span>
                      <h3>TMSaaS</h3>
                      <p>
                        Enjoy easy, secure and convenient access to bills
                        payment
                      </p>
                    </span>
                  </Link>
                  <Link
                    to="verifypro"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={verifi} alt="" />
                    <span>
                      <h3>ESMP</h3>
                      <p>
                        ESMP empowers Enterprise Bulk Messaging Providers to
                        enjoy seamless integration with VAS Aggregators/Mobile
                        Operators and deliver superior service to their clients
                      </p>
                    </span>
                  </Link>
                  <Link
                    to="vas"
                    className="solution"
                    style={{ cursor: "pointer" }}
                  >
                    <img src={vas} alt="" />
                    <span>
                      <h3>SEAP</h3>
                      <p>
                        Empowers VAS aggregators integrate and manage Value
                        Added Service providers as well as content providers
                        across Mobile Network Operators.
                      </p>
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </li>
          {/* <li>
            <NavLink activeClassName="active" to="/solutions">
              Our Solutions
            </NavLink>
          </li> */}
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/careers">Careers</NavLink>
          </li>
        </ul>
      </nav>

      <div className="thirdNav">
        <ul>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="contactBtn"
            >
              Contact
            </NavLink>{" "}
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.9rem 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  background: #fff;
  height: 80px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  a {
    text-decoration: none;

    img {
      width: 70px;
    }
  }
  h3 {
    color: #24b0ff;
    font-weight: 600;
  }
  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 3.4rem;
      list-style: none;
      li {
        a {
          color: #212121;
          text-decoration: none;
          font-size: 1.06rem;
          .active,
          &:hover {
            transition: 0.3s ease;
            color: #24b0ff; /* Example styling for the active link */
          }
        }
        p {
          cursor: pointer;
        }

        .active,
        &:hover {
          transition: 0.3s ease;
          color: #24b0ff; /* Example styling for the active link */
        }
        .solutions {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
      }
      .solutionsBg {
        position: relative;
        .solutionsWrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: hidden;
          background-color: rgba(0, 0, 0, 0);
          /* z-index: 1000; */

          .solutionsContainer {
            background: #fff;
            box-shadow: 0px 20px 40px 0px #0c0c0c26;
            min-height: 500px;
            width: 400px;
            position: absolute;
            z-index: 1030;
            /* bottom: -540px; */
            /* left: -120px; */
            top: 85px;
            left: 32%;
            border-radius: 15px;
            padding: 30px;
            cursor: default;

            @media only screen and (max-width: 1680px) {
              left: 37%;
            }
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

              img {
                width: 22px;
              }
              /* margin-bottom: 2rem; */

              &:not(:last-child) {
                border-bottom: 1px solid #efefef;
              }
              h3 {
                color: #111b29;
                margin-bottom: 0.2rem;
                font-size: 14px;
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
    }
  }
  .thirdNav {
    ul {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;

      li {
        a {
          color: #212121;
          text-decoration: none;
          &:hover {
            transition: 0.3s ease;
            color: #24b0ff; /* Example styling for the active link */
          }
        }
        .contactBtn {
          background: #00a9ff;
          color: #fff !important;
          padding: 0.8rem 2.1rem;
          border-radius: 0.4rem;
          text-decoration: none;
        }
        .active {
          transition: 0.3s ease;
          color: #24b0ff;
        }
        .contact {
          background: #00a9ff;
          color: #fff;
          padding: 1rem 2.8rem;
          border-radius: 0.4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    a {
      img {
        width: 60px;
      }
    }
    nav {
      ul {
        li {
          a {
            font-size: 0.8rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
    .thirdNav {
      ul {
        li {
          a {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1050px) {
    nav {
      display: none;
    }
    .thirdNav {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 1.9rem 1rem;

    a {
      img {
        width: 50px;
      }
    }
  }
`;
