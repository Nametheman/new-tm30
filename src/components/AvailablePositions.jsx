/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled from "styled-components";
import { devRoles, designRoles } from "../dummy/availableJobs";
import PositionCard from "../bits/PositionCard";
import JobModal from "./JobModal";

const AvailablePositions = () => {
  const [showJobModal, setShowJobModal] = useState(false);
  const [modalId, setModalId] = useState(0);
  const [dept, setDept] = useState("");
  const handleShowModal = () => {
    setShowJobModal(true);
  };
  return (
    <Wrapper>
      <div className="innerDiv">
        <div className="noPosCard">
          <p className="noPositions">There are no open positions for now.</p>
        </div>

        {/* If there are ever open positions, please uncomment the code below and manipulatee data from the DUMMY folder as needed for the positions */}

        {/* ./////..////////////......////// */}

        {/* <p className="topHd">Design & Management</p>
        <div className="cardWrapper">
          {designRoles.map((role, idx) => {
            return (
              <div
                onClick={() => {
                  setModalId(idx);
                  setDept(role.dept);
                }}
              >
                <PositionCard
                  key={idx + 1 * 2255}
                  name={role.name}
                  desc={role.desc}
                  jobType={role.jobType}
                  link={role.link}
                  handleShow={handleShowModal}
                  dept={role.dept}
                />
              </div>
            );
          })}
        </div>
        <p className="topHd">Software Development</p>
        <div className="cardWrapper">
          {devRoles.map((role, idx) => {
            const newIdx = idx + 1;
            return (
              <div
                onClick={() => {
                  setModalId(idx);
                  setDept(role.dept);
                }}
              >
                <PositionCard
                  name={role.name}
                  desc={role.desc}
                  jobType={role.jobType}
                  link={role.link}
                  handleShow={handleShowModal}
                  dept={role.dept}
                />
              </div>
            );
          })}
        </div> */}
      </div>
      <JobModal
        isShow={showJobModal}
        setShow={setShowJobModal}
        modalId={modalId}
        dept={dept}
      />
    </Wrapper>
  );
};

export default AvailablePositions;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3.3rem;

  .innerDiv {
    width: 100%;
    display: flex;
    justify-content: center;
    .topHd {
      color: #3f4450;
      font-family: "mollen-bold";
      font-size: 1.2rem;
    }

    .noPosCard {
      border: 1px solid #eaecf0;
      background: #fff;
      width: 100%;
      padding: 30px;
      border-radius: 20px;
      margin-bottom: 3rem;
      .noPositions {
        text-align: center;
        color: #3b3b3b;
      }
    }
  }
`;
