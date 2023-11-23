import React, { useState } from "react";
import styled from "styled-components";
import { staffs } from "../dummy/directors";
import rightArrow from "../assets/icon/l_arrow.png";
import Modal2 from "./Modal2";

const ManagementMain = () => {
  const [userId, setUserId] = useState("");
  const [showUserModal, setShowUserModal] = useState(false);
  return (
    <Container>
      <h3 className="title">The Management Team</h3>
      <div className="teamWrapper">
        {staffs.map((member, idx) => {
          return (
            <div key={member.id} className="member">
              <img src={member.image} alt="" className={"memberPic"} />
              <div className="infoContainer">
                <div
                  className="info"
                  onClick={() => {
                    setUserId(member.id);
                    setShowUserModal(true);
                  }}
                >
                  <div className="name">
                    <h5>{member.name}</h5>
                    <img src={rightArrow} alt="" />
                  </div>
                  <p className="position">{member.position}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showUserModal && (
        <Modal2
          userId={userId}
          setShow={setShowUserModal}
          isShow={showUserModal}
        />
      )}
    </Container>
  );
};

export default ManagementMain;
const Container = styled.section`
  background: #fff;
  padding: 5rem 10rem;

  .intro {
    text-align: center;
    color: #24b0ff;
    font-family: "mollen-bold";
    font-size: 0.8rem;
  }
  .title {
    font-family: "generalsans-semibold";
    font-size: 2rem;
    text-align: center;
    margin: 1rem 0;
    color: #24b0ff;
  }

  .teamWrapper {
    width: 85%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    justify-content: center;
    margin: 5rem auto;
    align-items: center;

    .member {
      text-align: center;
      position: relative;
      width: 250px;
      height: 300px;
      .infoContainer {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100%;
        /* border: 1px solid; */
        align-items: flex-end;
        z-index: 2;
        bottom: 0px;
        padding-bottom: 15px;
        background: rgb(0, 0, 0);
        background: -moz-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(5, 145, 87, 0) 54%
        );
        background: -webkit-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(5, 145, 87, 0) 54%
        );
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.5) 0%,
          rgba(5, 145, 87, 0) 54%
        );
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#059157",GradientType=1);
        /* padding-bottom: 20px; */

        .info {
          width: 90%;
          height: 90px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 20px;

          .name {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h5 {
              color: #fff;
              font-weight: 500;
              /* line-height: 0.2; */
              font-size: 20px;
            }
            img {
              width: 10px;
            }
          }
          .position {
            color: #fff;
            text-align: left;
            margin-top: 15px;
          }
        }
      }
      .memberPic {
        width: 100%;
        height: 100%;
        margin-bottom: 1%;
        /* border-radius: 50%; */
      }
      .dosumu {
        width: 100%;
        height: 100%;
        margin-bottom: 1%;
        /* border-radius: 50%; */
        filter: brightness(1.8); /* Increase brightness by 20% */
      }

      button {
        border: none;
        outline: none;
        cursor: pointer;
        background: transparent;
        font-weight: 500;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 5rem;

    .teamWrapper {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 1fr);
      width: 100%;
      justify-items: center;

      .member {
        grid-area: unset !important;
      }
    }
  }
  @media only screen and (max-width: 610px) {
    padding: 5rem;
    .title {
      font-size: 1.5rem;
    }
    .teamWrapper {
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(1, 1fr);
      width: 100%;
      justify-items: center;

      .member {
        grid-area: unset !important;
      }
    }
  }
`;
