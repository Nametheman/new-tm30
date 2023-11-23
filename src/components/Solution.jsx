import React from "react";
import styled from "styled-components";
import arrow from "../assets/icon/openArrow.svg";

const Solution = ({
  name,
  idx,
  text,
  playstore,
  appstore,
  height,
  image,
  width,
  link,
  text2,
  id,
}) => {
  return (
    <ProductWrapper
      style={
        idx % 2 === 0
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
      $width={width}
      $height={height}
      id={id}
      $idx={idx}
    >
      <div
        className="flex1"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos-duration="800"
      >
        <h3 className="prodName">{name}</h3>
        {text && <p className="prodText">{text}</p>}
        {text2 && <p className="prodText">{text2}</p>}
        <a
          href={link}
          target={link === "#" ? "_self" : "_blank"}
          className="viewProject"
        >
          Learn More <img src={arrow} alt="" />
        </a>
      </div>
      <div
        className="flex2"
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-delay="500"
        data-aos-duration="800"
      >
        <img src={image} alt="" />
      </div>
    </ProductWrapper>
  );
};

export default Solution;

const ProductWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10rem;
  width: 100%;
  padding: 2rem 6rem 5rem;

  .flex1 {
    display: flex;
    /* border: 1px solid; */
    /* justify-content: center */
    flex-direction: column;
    align-items: flex-start;

    .prodName {
      font-family: "generalsans-semibold";
      font-size: 2.2rem;
      margin: 0 0 0.3rem;
      /* text-align: ${(props) => (props.$idx % 2 === 0 ? "left" : "right")}; */
    }
    .prodText {
      margin-top: 0.3rem;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 1rem;
      color: #667085;
      width: 80%;
      /* text-align: ${(props) => (props.$idx % 2 === 0 ? "left" : "right")}; */
    }
    .viewProject {
      background: #0090ff;
      color: #fff !important;
      padding: 0.8rem 1rem;
      border-radius: 0.4rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      width: 170px;
      font-size: 0.9rem;
      margin-top: 10px;

      img {
        width: 10px;
        margin-bottom: 3px;
        animation: bounce 2s infinite;
      }
    }
    .platforms {
      display: flex;
      margin-top: 1.3rem;
      gap: 20px;
      img {
        height: 38px;
      }
    }
  }
  .flex2 {
    img {
      width: ${(props) => (props.$width ? props.$width : "600px")};
      height: ${(props) => (props.$height ? props.$height : "450px")};
    }
  }

  @media only screen and (max-width: 1130px) {
    .flex2 {
      img {
        width: 480px;
        height: 390px;
      }
    }
  }
  @media only screen and (max-width: 995px) {
    .flex2 {
      img {
        width: 400px;
        height: 300px;
      }
    }
  }
  @media only screen and (max-width: 901px) {
    flex-direction: column !important;
    align-items: flex-start !important;
    padding: 2rem 3rem 5rem;
    gap: 1rem;

    .flex2 {
      img {
        width: 100%;
        height: 490px;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column !important;
    align-items: flex-start !important;

    .flex2 {
      img {
        width: 100%;
        height: 300px;
      }
    }
  }
  @media only screen and (max-width: 570px) {
    flex-direction: column !important;
    align-items: flex-start !important;
    .flex2 {
      img {
        width: 100%;
        height: 250px;
      }
    }
    .flex1 {
      .prodName {
        font-family: "generalsans-semibold";
        font-size: 1.9rem;
        margin: 0 0 0.5rem;
      }
      .prodText {
        margin-top: 0.5rem;
        font-family: "mollen-light";
        line-height: 1.7;
        font-size: 0.8rem;
        color: #667085;
        width: 100%;
      }
      .viewProject {
        background: #0090ff;
        color: #fff !important;
        padding: 0.8rem 1rem;
        border-radius: 0.4rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        width: 150px;
        font-size: 0.7rem;
        margin-top: 0.5rem;

        img {
          width: 8px;
          margin-bottom: 3px;
          animation: bounce 2s infinite;
        }
      }
      .platforms {
        display: flex;
        margin-top: 1.3rem;
        gap: 20px;
        img {
          height: 30px;
          /* width: 90px; */
        }
      }
    }
  }
  @media only screen and (max-width: 450px) {
    flex-direction: column !important;
    align-items: flex-start !important;
    .flex2 {
      img {
        width: 100%;
        height: 200px;
      }
    }
    .flex1 {
      .prodName {
        font-family: "generalsans-semibold";
        font-size: 1.9rem;
        margin: 0 0 0.5rem;
      }
      .prodText {
        margin-top: 0.5rem;
        font-family: "mollen-light";
        line-height: 1.7;
        font-size: 0.8rem;
        color: #667085;
        width: 100%;
      }
      .viewProject {
        background: #0090ff;
        color: #fff !important;
        padding: 0.8rem 1rem;
        border-radius: 0.4rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.7rem;
        width: 150px;
        font-size: 0.7rem;
        margin-top: 0.5rem;

        img {
          width: 8px;
          margin-bottom: 3px;
          animation: bounce 2s infinite;
        }
      }
      .platforms {
        display: flex;
        margin-top: 1.3rem;
        gap: 20px;
        img {
          height: 30px;
          /* width: 90px; */
        }
      }
    }
  }
`;
