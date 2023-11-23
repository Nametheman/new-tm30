import React, { useState, useEffect } from "react";
import styled from "styled-components";
import carouselRight from "../assets/icon/carouselRight.svg";
import carouselLeft from "../assets/icon/carouselLeft.svg";
import ClientTestimonialCarousel from "../bits/ClientTestimonialCarousel";
import testimonials from "../dummy/testimonials";

const ClientTestimonials = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [autoScrollInterval, setAutoScrollInterval] = useState(null);

  const handlePrev = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
    );
  };
  const handleNext = () => {
    setCurrentIdx((prevIdx) =>
      prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
    );
  };
  const handleMouseEnter = () => {
    clearInterval(autoScrollInterval);
  };

  const handleMouseLeave = () => {
    setAutoScrollInterval(setInterval(handleNext, 4000));
  };

  useEffect(() => {
    setAutoScrollInterval(setInterval(handleNext, 4000));

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, []);

  return (
    <Wrapper>
      <div className="container">
        <img
          src={carouselLeft}
          alt=""
          className="icon leftIcon"
          onClick={handlePrev}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        {testimonials.map((testimonial, idx) => {
          const { image, testimony, author, occupation, id } = testimonial;
          return (
            <React.Fragment key={id}>
              {currentIdx === idx && (
                <ClientTestimonialCarousel
                  image={image}
                  testimony={testimony}
                  author={author}
                  occupation={occupation}
                  id={id}
                  idx={idx}
                  key={idx + 1 * 54}
                  currIdx={currentIdx}
                />
              )}
            </React.Fragment>
          );
        })}
        <img
          src={carouselRight}
          alt=""
          className="icon rightIcon"
          onClick={handleNext}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </Wrapper>
  );
};

export default ClientTestimonials;

const Wrapper = styled.div`
  padding: 3rem 5rem;
  background: #fff;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    gap: 5rem;
    justify-content: space-between;
    align-items: center;

    .icon {
      width: 35px;
      height: 35px;
      cursor: pointer;
    }
  }
`;
