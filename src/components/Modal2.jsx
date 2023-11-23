import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import closeBtn from "../assets/icon/close.png";
import { boardMembers } from "../dummy/directors";

const Modal2 = ({ setShow, userId, isShow }) => {
  const member = boardMembers.find((user) => user.id === userId);
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
        <img
          src={closeBtn}
          alt=""
          className="closeBtn"
          onClick={() => {
            setShow(false);
          }}
        />
        <div className="userDetails">
          <div className="userInfoWrapper">
            <p>
              <span>{member?.fullName}</span> {member?.info}
            </p>
            <br />
            <p>{member?.info2}</p>
            <br />
            <p>{member?.info3}</p>
            <br />
            <p>{member?.info4}</p>
            <br />
            <p>{member?.info5}</p>
          </div>
          <div className="userAvi">
            <img src={member?.image} alt="" className="userImage" />
          </div>
        </div>
      </Content>
    </Container>,
    document.getElementById("modal")
  );
};

export default Modal2;

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
  padding: 60px 40px;
  width: 80%;
  height: 60%;
  border-radius: 10px;
  animation: slideDown 0.3s ease-in forwards;

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

  .userDetails {
    display: flex;
    height: 100%;
    /* width: 80%; */
    gap: 9rem;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 0 40px;

    .userAvi {
      text-align: center;
      .userImage {
        width: 250px;
        height: 300px;
        /* border-radius: 50%; */
      }
      .name {
        font-weight: 700 !important;
        font-size: 23px;
      }
      .position {
        font-family: "mollen-light", sans-serif;
        font-size: 16px;
        font-weight: 500;
      }
    }

    .userInfoWrapper {
      max-height: 70%;
      overflow-y: scroll;

      p {
        font-family: "mollen-light", sans-serif;
        font-weight: 400;
        /* letter-spacing: 1.4px; */
        line-height: 1.9;
        padding: 0 20px;
        font-size: 18px;

        span {
          font-family: "mollen-bold";
          font-weight: 700;
        }
      }
    }
  }

  @media (max-width: 750px) {
    width: 95%;

    .userDetails {
      display: block;

      .userAvi {
        .userImage {
          height: 100px;
          width: 100px;
          /* border-radius: 50%; */
        }
        .name {
          font-size: 16px;
        }
        .position {
          font-size: 13px;
        }
      }

      .userInfoWrapper {
        margin-top: 20px;
        p {
          font-size: 13px;
        }
      }
    }
  }
`;
