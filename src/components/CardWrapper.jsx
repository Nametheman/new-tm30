import React, { useEffect, useState } from "react";
import RecentProjectCard from "./RecentProjectCard";
import styled from "styled-components";

const CardWrapper = ({ children }) => {
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setTranslateX((prevTranslateX) => prevTranslateX - 50);
    }, 1000);

    const resetInterval = setInterval(() => {
      setTranslateX(0);
    }, 30500);

    return () => {
      clearInterval(slideInterval);
      clearInterval(resetInterval);
    };
  }, []);
  return (
    <Wrapper style={{ transform: `translateX(${translateX}px)` }}>
      {children}
    </Wrapper>
  );
};

export default CardWrapper;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  gap: 2rem;
  right: -130rem;
  flex: 0.7;
  z-index: 1;
  width: 200%;
  transition: transform 0.5s ease;
  @media only screen and (max-width: 800px) {
    right: 0;
    position: static;
    z-index: 0;
    padding: 0 2rem;
    gap: 2rem;
  }
  @media only screen and (max-width: 450px) {
    right: 0;
    position: static;
    z-index: 0;
    padding: 0 2rem;
    gap: 2rem;
  }
`;
