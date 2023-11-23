import React from "react";
import styled from "styled-components";
import { RxCaretRight } from "react-icons/rx";

const RecentProjectCard = ({ img, title, text, link }) => {
  return (
    <Container>
      <div className="p-img">
        <img src={img} alt="" />
      </div>
      <div className="recentProjectDetails">
        <h3 className="p-title">{title}</h3>
        <p className="p-text">{text}</p>
        <a href={link ? link : "#"} target="_blank">
          View project <RxCaretRight />
        </a>
      </div>
    </Container>
  );
};

export default RecentProjectCard;

const Container = styled.div`
  background: #fcfeff;
  box-shadow: 0px 40px 41.2663px rgba(64, 64, 64, 0.05);
  border-radius: 30px;
  padding: 8px;

  .p-img {
    img {
      width: 200px;
      height: 155px;
    }
  }
  .recentProjectDetails {
    padding: 7px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;

    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #0090ff;
      font-size: 0.8rem;
      font-weight: 500;

      svg {
        font-size: 20px;
      }
    }
    .p-text {
      margin: 0.6rem 0;
      color: #667085;
      font-size: 0.8rem;
      font-family: "mollen-light";
    }
    .p-title {
      font-weight: 600;
      font-size: 1.1rem;
      margin: 0.3rem 0 0 0;
    }
  }

  @media only screen and (max-width: 450px) {
  }
`;
