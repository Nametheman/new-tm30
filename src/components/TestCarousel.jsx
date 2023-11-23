/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import carouselRight from "../assets/icon/carouselRight.svg";
import carouselLeft from "../assets/icon/carouselLeft.svg";
import ClientTestimonialCarousel from "../bits/ClientTestimonialCarousel";
import testimonials from "../dummy/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const TestCarousel = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  //   const handlePrev = () => {
  //     setCurrentIdx((prevIdx) =>
  //       prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
  //     );
  //   };
  //   const handleNext = () => {
  //     setCurrentIdx((prevIdx) =>
  //       prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
  //     );
  //   };
  //   const handleMouseEnter = () => {
  //     clearInterval(autoScrollInterval);
  //   };

  //   const handleMouseLeave = () => {
  //     setAutoScrollInterval(setInterval(handleNext, 4000));
  //   };

  //   useEffect(() => {
  //     setAutoScrollInterval(setInterval(handleNext, 4200));

  //     return () => {
  //       clearInterval(autoScrollInterval);
  //     };
  //   }, []);

  return (
    <Wrapper>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
      <div className="head">
        <h3>Testimonials</h3>
        <p>Here's what our past and current clients have to say</p>
      </div>

      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          speed={1000}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {testimonials.map((testimonial, idx) => {
            const { image, testimony, author, occupation, id } = testimonial;
            return (
              <React.Fragment key={id}>
                <SwiperSlide>
                  <ClientTestimonialCarousel
                    image={image}
                    testimony={testimony}
                    author={author}
                    occupation={occupation}
                    id={id}
                    idx={idx}
                    currIdx={currentIdx}
                  />
                </SwiperSlide>
              </React.Fragment>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default TestCarousel;

const Wrapper = styled.div`
  padding: 3rem 5rem;
  background: #fff;
  align-items: center;

  .head {
    text-align: center;
    h3 {
      text-align: center;
      font-size: 1.6rem;
      font-weight: 600;
    }
    p {
      text-align: center;
      font-size: 1rem;
      /* letter-spacing: 1.1pt; */
      font-family: "mollen-light", sans-serif;
      color: #667085;
      margin-top: 1rem;
    }
  }
  .swiper-slide {
    width: 100% !important;
    padding: 1rem 8rem;
    position: relative;
  }
  .sample-slider,
  .swiper-pagination-bullets {
    /* display: none; */
    bottom: 50px !important;
    width: initial;
    left: 20px;
    margin-left: 152px;
    position: absolute;
  }
  .sample-slider,
  .swiper-pagination-bullet {
    background-color: #000;
    padding-right: 5px !important;
  }

  .swiper-container,
  .swiper-button-prev {
    &:after {
      font-size: 15px;
      background: #d3f2ff;
      padding: 10px 15px;
      border-radius: 10px;
    }
  }
  .swiper-container,
  .swiper-button-next {
    &:after {
      font-size: 15px;
      background: #d3f2ff;
      padding: 10px 15px;
      border-radius: 10px;
    }
  }
  .autoplay-progress {
    display: none;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
      border: 1px solid;
      width: 180px;
      height: 180px;
      cursor: pointer;
      opacity: 0;
    }
    .leftIcon {
      position: absolute;
    }
    .rightIcon {
      position: absolute;
      right: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding: 2rem 1rem;

    .head {
      p {
        text-align: center;
        font-size: 0.7rem;
        font-family: "mollen-light", sans-serif;
        color: #667085;
        margin-top: 1rem;
      }
    }
    .swiper-slide {
      width: 100% !important;
      padding: 1rem 3rem;
      position: relative;
    }
    .container {
      display: unset;
    }
  }
  @media only screen and (max-width: 1100px) {
    padding: 2rem 1rem;

    .head {
      p {
        text-align: center;
        font-size: 0.7rem;
        font-family: "mollen-light", sans-serif;
        color: #667085;
        margin-top: 1rem;
      }
    }
    .swiper-slide {
      width: 100% !important;
      padding: 1rem 3rem;
      position: relative;
    }
    .container {
      display: unset;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 1rem;

    .head {
      p {
        text-align: center;
        font-size: 0.7rem;
        font-family: "mollen-light", sans-serif;
        color: #667085;
        margin-top: 1rem;
      }
    }
    .swiper-slide {
      width: 100% !important;
      padding: 1rem 3rem;
      position: relative;
    }
    .container {
      display: unset;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 1rem;

    .head {
      p {
        text-align: center;
        font-size: 0.7rem;
        font-family: "mollen-light", sans-serif;
        color: #667085;
        margin-top: 1rem;
      }
    }
    .swiper-slide {
      width: 100% !important;
      padding: 1rem 3rem;
      position: relative;
    }
    .container {
      display: unset;
    }
  }
`;
