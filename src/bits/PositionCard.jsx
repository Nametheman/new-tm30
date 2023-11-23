/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import clock from "../assets/icon/clock.png";

const PositionCard = ({ name, desc, jobType, link, handleShow }) => {
  return (
    <Card>
      <p className="jobTitle">{name}</p>
      <p className="jobDesc">{desc} </p>
      <div className="lastFt">
        <span className="jobType">
          <img src={clock} alt="" />
          <p>{jobType}</p>
        </span>
        <p className="showModal" onClick={handleShow}>
          See More...
        </p>
      </div>
    </Card>
  );
};

export default PositionCard;

const Card = styled.div`
  border: 1px solid #eaecf0;
  background: #fff;
  width: 700px;
  padding: 30px;
  border-radius: 20px;
  margin-bottom: 3rem;

  .jobTitle {
    color: #101828;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .jobDesc {
    color: #667085;
  }
  .lastFt {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    .jobType {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      p {
        margin-top: 0.2rem;
        color: #667085;
      }
    }

    .showModal {
      color: #24b0ff;
      margin-top: 0.2rem;
      cursor: pointer;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 725px) {
    width: 100%;
  }
`;
