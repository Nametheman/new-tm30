import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import logo from "../assets/icon/logo.png";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import { HiMenuAlt3 } from "react-icons/hi";
import MobileNav from "../components/MobileNav";

import "aos/dist/aos.css";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [loader, setLoader] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [showNav, setShowNav] = useState(false);

  const showMenuHandler = () => {
    setShowNav(true);

    setTimeout(() => {
      setTranslateX(0);
    }, 10);
  };

  setTimeout(() => {
    setLoader(false);
  }, 10);

  return (
    <Container>
      {loader ? (
        <Loader>
          {" "}
          <img src={logo} alt="" />
        </Loader>
      ) : (
        <>
          <Navbar />
          <Outlet />
          <Footer />
          <div className="mobileNavCaret">
            <HiMenuAlt3 onClick={showMenuHandler} />
          </div>
          {showNav && (
            <MobileNav
              translateX={translateX}
              setTranslateX={setTranslateX}
              setShow={setShowNav}
            />
          )}
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
            }}
          />
        </>
      )}
    </Container>
  );
};

export default Layout;

const Container = styled.main`
  position: relative;

  .mobileNavCaret {
    display: none;

    @media only screen and (max-width: 1050px) {
      display: block;
      position: fixed;
      top: 20px;
      z-index: 201;
      right: 30px;

      svg {
        font-size: 40px;
        color: #24b0ff;
        cursor: pointer;
      }
    }
    @media only screen and (max-width: 450px) {
      display: block;
      position: fixed;
      top: 22px;
      z-index: 201;
      right: 20px;

      svg {
        font-size: 30px;
        color: #24b0ff;
        cursor: pointer;
      }
    }
  }
`;

const Loader = styled.section`
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
