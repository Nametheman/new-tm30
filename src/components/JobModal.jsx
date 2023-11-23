import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import closeBtn from "../assets/icon/close.png";
import { Link } from "react-router-dom";
import { devRoles, designRoles } from "../dummy/availableJobs";

const JobModal = ({ isShow, setShow, modalId, dept }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
      document.body.style.position = null;
    }
    return () => {
      document.body.style.overflow = null;
      document.body.style.position = null;
    };
  }, [isShow]);

  useEffect(() => {
    let currData;
    if (dept === "dm") {
      currData = designRoles.find((role) => role.idx === modalId);
      setData(currData);
      console.log(currData);
    } else if (dept === "dev") {
      currData = devRoles.find((role) => role.idx === modalId);
      setData(currData);
      console.log(currData);
    }
  }, [modalId, dept]);

  if (!isShow) {
    return null;
  }

  return createPortal(
    <Container
      onClick={() => {
        setShow(false);
      }}
    >
      <Content
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {" "}
        <div>
          <img
            src={closeBtn}
            alt=""
            className="closeBtn"
            onClick={() => {
              setShow(false);
            }}
          />
        </div>
        <div className="content">
          <h3 className="jobHead">{data.desc} </h3>
          <p className="positionInfo">{data.posDesc}</p>
          <ul>
            {/* <li>
              Writing codes to develop highly-responsive, web-based user
              interface
            </li>
            <li>
              Collaborate with team members and business partners for problem
              solving, bug fixes, new feature implementations, work planning and
              code demonstrations.
            </li>
            <li>
              {" "}
              Assist with team-wide validation of functional correctness,
              architectural compliance, and adherence to applicable industry
              standards.{" "}
            </li>
            <li>
              {" "}
              Develop a flexible and well-structured front-end architecture,
              along with the APIs to support it.{" "}
            </li>
            <li>
              {" "}
              Collaborate with other teams to coordinate changes to shared
              interfaces.{" "}
            </li>
            <li> Adhere to team standards for writing and documenting code.</li> */}
            {data?.responsibilities?.map((res, idx) => {
              return <li key={idx * 29019}>{res}</li>;
            })}
          </ul>
          <p className="requirements">Requirements and qualifications. </p>
          <ul>
            {/* <li>
              {" "}
              Firm understanding of Object Oriented principles, design patterns,
              and software design/architecture best practices.
            </li>
            <li>
              {" "}
              Ability to communicate technical concepts clearly concisely both
              verbally and in writing.
            </li>
            <li>
              {" "}
              Ability to collaboratively work through technical issues in a
              professional manner, making design considerations and trade-offs
              as needed.
            </li>
            <li>
              Thrive in and contribute to a collaborative team environment.
            </li>
            <li>
              Working knowledge on debugging problems using relevant tools.
            </li>
            <li>
              Experience with JavaScript, Typescript, Redux, RTK Query, Styled
              Components.
            </li> */}
            {data?.qualifications?.map((qual, idx) => {
              return <li key={idx * 29018}>{qual}</li>;
            })}
          </ul>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScTciTrhw6yST_XZd4vQSGaZBihSiWyw8lb1VVc1AIWEeDsHQ/closedform"
          target="_blank"
          className="applyBtn"
        >
          Apply Now!
        </a>
      </Content>
    </Container>,
    document.getElementById("modal")
  );
};

export default JobModal;

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

const Content = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 60px 80px 60px 40px;
  width: 80%;
  max-height: 80%;
  overflow-y: scroll;
  border-radius: 10px;
  animation: slideDown 0.3s ease-in forwards;

  @media only screen and (max-width: 450px) {
    width: 95%;
    padding: 80px 20px 60px 20px;

    .closeBtn {
      position: absolute;
      width: 15px !important;
      top: 5% !important;
      right: 6%;
      cursor: pointer;
    }
    .content {
      color: #101828;
      .jobHead {
        font-size: 0.9rem !important;
        color: #101828;
        margin-bottom: 2rem;
        font-weight: 600;
      }
      .positionInfo {
        font-size: 0.8rem !important;
        line-height: 1.7;
        margin-bottom: 2rem;
      }
      ul {
        padding: 0 3rem;
        margin-bottom: 2rem;

        li {
          font-size: 0.8rem !important;
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
      }
    }

    .applyBtn {
      background: #24b0ff;
      margin-top: 2rem;
      height: 38px !important;
      width: 200px !important;
      color: #fff;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 15px 100px;
    }
  }

  @keyframes slideDown {
    0% {
      top: 0;
    }

    100% {
      top: 50%;
    }
  }
  .closeBtn {
    position: absolute;
    width: 20px;
    top: 8%;
    right: 6%;
    cursor: pointer;
  }
  .content {
    color: #101828;
    .jobHead {
      font-size: 1rem;
      color: #101828;
      margin-bottom: 2rem;
      font-weight: 600;
    }
    .positionInfo {
      font-size: 1.1rem;
      line-height: 1.7;
      margin-bottom: 2rem;
    }
    ul {
      padding: 0 3rem;
      margin-bottom: 2rem;

      li {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 0.5rem;
      }
    }
    .requirements {
      margin-bottom: 2rem;
    }
  }
  .applyBtn {
    background: #24b0ff;
    margin-top: 2rem;
    color: #fff;
    border: 1px solid;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    padding: 15px 100px;
  }
`;
