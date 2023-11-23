import styled from "styled-components";
import logo from "../assets/icon/logo.png";

const Loader = () => {
  return (
    <LoaderSection>
      <img src={logo} alt="" />
    </LoaderSection>
  );
};

export default Loader;

const LoaderSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #24afffa;
  img {
    opacity: 0.5;
    animation: bounce2 5s infinite;
  }
  @keyframes bounce2 {
    0% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    25% {
      transform: translateY(-10px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    75% {
      transform: translateY(10px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
`;
