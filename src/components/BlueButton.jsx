import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlueButton = ({ text, link }) => {
  return (
    <Button
      data-aos="zoom-in-right"
      data-aos-delay="300"
      data-aos-easing="linear"
      data-aos-duration="800"
      to={link}
    >
      {text}
    </Button>
  );
};

export default BlueButton;

const Button = styled(Link)`
  background: #00a9ff;
  color: #fff !important;
  padding: 0.8rem 2.1rem;
  border-radius: 0.4rem;
  text-decoration: none;
`;
