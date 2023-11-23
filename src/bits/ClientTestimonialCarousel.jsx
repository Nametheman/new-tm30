/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";
import stars from "../assets/icon/stars.png";
import carouselImg from "../assets/images/carouselImg.png";
import { RxDotFilled } from "react-icons/rx";
import testimonials from "../dummy/testimonials";

const ClientTestimonialCarousel = ({
  image,
  testimony,
  author,
  occupation,
  currIdx,
}) => {
  const newArr = testimonials.map((testimonial, idx) => {
    return idx;
  });
  return (
    <CarouselContainer>
      <div className="carouselText">
        <div className="starWrapper">
          <img src={stars} alt="" />
          <p className="testimony">{testimony}</p>
        </div>

        <div>
          <p className="author">
            — <b>{author}</b>
          </p>
          <p className="occupation">{occupation}</p>
        </div>
      </div>
      <div className="carouselImg">
        <img src={image} alt="" />
      </div>
    </CarouselContainer>
  );
};

export default ClientTestimonialCarousel;

const CarouselContainer = styled.div`
  background: #f9fafb;
  display: flex;
  border-radius: 1.5rem;
  gap: 8rem;
  justify-content: space-between;
  padding: 2rem 0 2rem 3rem;

  .carouselText {
    margin-top: 20px;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img {
      margin-bottom: 20px;
    }
    .testimony {
      color: #000000;
      font-family: "mollen-light";
      font-size: 1.2rem;
      line-height: 1.9;
      font-weight: 500;
      margin-bottom: 3rem;
      letter-spacing: 0.1px;
    }
    .author {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
    .occupation {
      color: #667085;
      font-size: 0.9rem;
    }
    .paginationIndicators {
      margin-top: 1rem;
      margin-left: -0.5rem;

      svg {
        padding: 0 !important;
        margin: 0 !important;
        font-size: 25px;
        /* border: 1px solid; */
      }
    }
  }
  .carouselImg {
    width: 420px;
    height: 390px;

    img {
      width: 420px;
      height: 390px;
    }
  }
  @media only screen and (max-width: 1100px) {
    /* flex-direction: column-reverse; */
    justify-content: center;
    gap: 1rem;

    padding: 1rem 1rem;
    width: 100%;
    .carouselText {
      .starWrapper {
        img {
          margin-bottom: 2px;
          width: 80px;
        }
      }
      .testimony {
        margin-bottom: 1rem;
        font-size: 01rem;
      }
      .author {
        font-size: 0.9rem;
      }
      .occupation {
        color: #667085;
        font-size: 0.8rem;
      }
    }
    .carouselImg {
      width: 300px;
      height: 290px;
      img {
        width: 300px;
        height: 290px;
        border-radius: 10px;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    /* flex-direction: column-reverse; */
    justify-content: center;
    gap: 1rem;

    padding: 1rem 1rem;
    width: 100%;
    .carouselText {
      .starWrapper {
        img {
          margin-bottom: 2px;
          width: 50px;
        }
      }
      .testimony {
        margin-bottom: 1rem;
        font-size: 0.8rem;
      }
      .author {
        font-size: 0.8rem;
      }
      .occupation {
        color: #667085;
        font-size: 0.6rem;
      }
    }
    .carouselImg {
      width: 300px;
      height: 290px;
      img {
        width: 300px;
        height: 290px;
        border-radius: 10px;
      }
    }
  }
  @media only screen and (max-width: 750px) {
    /* flex-direction: column-reverse; */
    justify-content: center;
    gap: 1rem;

    padding: 1rem 1rem;
    width: 100%;
    .carouselText {
      .starWrapper {
        img {
          margin-bottom: 2px;
          width: 50px;
        }
      }
      .testimony {
        margin-bottom: 1rem;
        font-size: 0.8rem;
      }
      .author {
        font-size: 0.8rem;
      }
      .occupation {
        color: #667085;
        font-size: 0.6rem;
      }
    }
    .carouselImg {
      width: 240px;
      height: 220px;
      img {
        width: 240px;
        height: 220px;
        border-radius: 10px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    /* flex-direction: column-reverse; */
    justify-content: center;
    gap: 1rem;

    padding: 1rem 1rem;
    width: 100%;
    .carouselText {
      .starWrapper {
        img {
          margin-bottom: 2px;
          width: 50px;
        }
      }
      .testimony {
        margin-bottom: 1rem;
        font-size: 0.6rem;
      }
      .author {
        font-size: 0.8rem;
      }
      .occupation {
        color: #667085;
        font-size: 0.6rem;
      }
    }
    .carouselImg {
      width: 200px;
      height: 190px;
      img {
        width: 200px;
        height: 190px;
        border-radius: 10px;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
    justify-content: center;
    gap: 1rem;

    padding: 1rem 1rem;
    width: 100%;
    .carouselText {
      .starWrapper {
        img {
          margin-bottom: 2px;
          width: 50px;
        }
      }
      .testimony {
        margin-bottom: 1rem;
        font-size: 0.6rem;
      }
      .author {
        font-size: 0.8rem;
      }
      .occupation {
        color: #667085;
        font-size: 0.6rem;
      }
    }
    .carouselImg {
      width: 160px;
      height: 140px;
      img {
        width: 160px;
        height: 140px;
        border-radius: 10px;
      }
    }
  }
`;
