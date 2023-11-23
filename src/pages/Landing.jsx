/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, Suspense, useEffect } from "react";
import styled from "styled-components";
import waterVid from "../assets/images/water.mp4";
import BlueButton from "../components/BlueButton";
import image from "../assets/images/section2Img.png";
import Partners from "../components/Partners";
import Testimonials from "../components/Testimonials";
import Solutions from "../components/Solutions";
import Empowering from "../components/Empowering";
import Services from "../components/Services";
import RecentProjects from "../components/RecentProjects";
import OurClients from "../components/OurClients";
import ClientTestimonials from "../components/ClientTestimonials";
import TestCarousel from "../components/TestCarousel";
import LandingContact from "../components/LandingContact";
import DemoModal from "../components/DemoModal";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [browserType, setBrowserType] = useState("");
  const userAgent = window.navigator.userAgent;
  console.log(userAgent);

  useEffect(() => {
    if (userAgent.includes("Chrome")) {
      console.log("User is using Chrome");
      setBrowserType("Chrome");
    } else if (userAgent.includes("Firefox")) {
      console.log("User is using Firefox");
      setBrowserType("Firefox");
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
      console.log("User is using Safari");
      setBrowserType("Safari");
    } else if (userAgent.includes("Edge")) {
      console.log("User is using Microsoft Edge");
      setBrowserType("Edge");
    } else if (userAgent.includes("MSIE") || userAgent.includes("Trident")) {
      console.log("User is using Internet Explorer");
      setBrowserType("MSIE");
    } else {
      console.log("User is using an unknown browser");
    }
  }, [userAgent]);
  return (
    <>
      <Wrapper>
        <div className="video-overlay"></div>
        {browserType === "Safari" && <div className="videoContainer"></div>}
        {browserType === "Chrome" ||
        browserType === "Firefox" ||
        browserType === "Edge" ||
        browserType === "MSIE" ? (
          <video
            autoPlay
            loop
            muted
            className="video-background"
            disablePictureInPicture
          >
            <source src={waterVid} type="video/mp4" />
          </video>
        ) : null}
        <div className="content">
          <h4 data-aos="fade-down" data-aos-duration="1000">
            Pioneering Innovation in Software Solutions.
          </h4>
          <p
            data-aos="fade-down"
            data-aos-delay="1000"
            data-aos-duration="1000"
          >
            <b>TM30 Global Limited</b>, a leading software solution company at
            the forefront of revolutionizing industries through cutting-edge
            technologies and innovative software development.
          </p>
          <button
            className="request"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Request a demo
          </button>
        </div>
      </Wrapper>
      <Section2>
        <div className="flex1">
          <h3
            data-aos="zoom-in-right"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            Empowering the Future with Innovative Software
          </h3>
          <p
            data-aos="zoom-in-right"
            data-aos-delay="300"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            At <b>TM30 Global Limited</b>, we are more than just a software
            development firm; we are pioneers, trailblazers, and visionaries.
            Our team of talented engineers, designers, and strategists are
            dedicated to crafting bespoke software solutions that align with our
            clients' unique objectives, empowering them to achieve their goals
            with utmost efficiency and innovation.
          </p>
          <BlueButton text="About Us" link="/about" />
        </div>
        <div
          className="imageWrapper"
          data-aos="zoom-in-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          <img src={image} alt="" />
        </div>
        <Partners />
      </Section2>

      <section id="features">
        <Testimonials />
      </section>

      <Solutions />
      <Empowering />
      <Services />
      <RecentProjects />
      <OurClients />
      {/* <ClientTestimonials /> */}
      {/* <TestCarousel /> */}
      <LandingContact />
      {showModal && <DemoModal isShow={showModal} setIsShow={setShowModal} />}
    </>
  );
};

export default Landing;

const Wrapper = styled.div`
  margin-top: 80px;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  color: #d0ebff;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  .videoContainer {
    height: 100%;
    width: 100vw;
    background-image: linear-gradient(
        178deg,
        #41abfb43 0%,
        #00778e78 53%,
        #00778e78 100%
      ),
      url(${waterVid});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .video-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: linear-gradient(
      178deg,
      #41abfb43 0%,
      #00778e78 53%,
      #00778e78 100%
    );
    /* background: linear-gradient(
      178deg,
      #41abfb43 0%,
      #00778e78 53%,
      #00778e78 100%
    ); */
  }
  .imageCont {
    width: 100vw;
    height: 100%;
    z-index: -1;
    /* top: 500px; */
    position: absolute;

    img {
      min-width: 100%;
      height: 100%;
    }
  }
  .content {
    text-align: center;
    color: #ffffff;
    width: 65%;
    margin-top: -8rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 3;

    h4 {
      font-size: 4.5rem;
      font-weight: 600;
      margin-bottom: 2.5rem;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      width: 80%;
      margin: 0 auto;
      line-height: 1.7;
      font-family: "mollen-light", sans-serif;

      b {
        font-family: "mollen-bold", sans-serif;
      }
    }
    .request {
      margin-top: 2rem;
      background: #00a9ff;
      border: none;
      outline: none;
      color: #f2f2f2;
      border-radius: 5px;
      padding: 1rem 1.2rem;
      font-size: 16px;
      opacity: 0;
      cursor: pointer;
      animation: btnFadeIn 1s ease-in-out 1.5s forwards;

      @keyframes btnFadeIn {
        from {
          opacity: 0;
        }

        to {
          opacity: 1;
        }
      }
    }
  }
  @media only screen and (max-width: 1377px) {
    .content {
      margin-top: -5rem;
    }
  }
  @media only screen and (max-width: 1300px) {
    .content {
      width: 65%;

      h4 {
        font-size: 3.6rem;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    .content {
      margin-top: -3rem;
    }
  }
  @media only screen and (max-width: 1010px) {
    .content {
      margin-top: -3rem;
      width: 75%;
    }
  }

  @media only screen and (max-width: 804px) {
    .content {
      margin-top: 0rem;
      width: 75%;
      h4 {
        font-size: 3rem;
      }
      p {
        font-size: 1.4rem;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 670px) {
    .content {
      margin-top: -3rem;
      width: 85%;
    }
    h4 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.1rem;
      width: 100%;
    }
  }
  @media only screen and (max-width: 591px) {
    .content {
      margin-top: 0rem;

      h4 {
        font-size: 2.2rem;
      }
      p {
        font-size: 1rem;
        width: 100%;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    height: 80vh;

    .content {
      h4 {
        font-size: 2rem;
      }
      p {
        font-size: 1.3rem;
        width: 100%;
      }
    }
  }
`;
// const Wrapper = styled.div`
//   margin-top: 80px;
//   width: 100%;
//   max-width: 100vw;
//   overflow: hidden;
//   height: 100vh;
//   background-image: linear-gradient(
//       178deg,
//       #41abfb43 0%,
//       #00778e78 53%,
//       #00778e78 100%
//     ),
//     url();
//   /* backdrop-filter: blur(125px); */
//   color: #d0ebff;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   display: flex;
//   /* align-items: center; */
//   justify-content: center;
//   position: relative;
//   .imageCont {
//     width: 100vw;
//     height: 100%;
//     z-index: -1;
//     /* top: 500px; */
//     position: absolute;

//     img {
//       min-width: 100%;
//       height: 100%;
//     }
//   }
//   .content {
//     text-align: center;
//     color: #ffffff;
//     width: 65%;
//     margin-top: 8.9rem;

//     h4 {
//       font-size: 4.5rem;
//       font-weight: 600;
//       margin-bottom: 2.5rem;
//     }
//     p {
//       font-size: 1.6rem;
//       font-weight: 400;
//       width: 80%;
//       margin: 0 auto;
//       line-height: 1.7;
//       font-family: "mollen-light", sans-serif;

//       b {
//         font-family: "mollen-bold", sans-serif;
//       }
//     }
//   }
//   @media only screen and (max-width: 1300px) {
//     .content {
//       width: 95%;

//       h4 {
//         font-size: 3.6rem;
//       }
//     }
//   }
//   @media only screen and (max-width: 450px) {
//     padding: 0 1rem;
//     height: 80vh;

//     .content {
//       h4 {
//         font-size: 2rem;
//       }
//       p {
//         font-size: 1.3rem;
//         width: 100%;
//       }
//     }
//   }
// `;

const Section2 = styled.section`
  background: #f9fafb;
  min-height: 100vh;
  width: 100%;
  display: flex;
  padding: 7rem 0 4rem 4rem;
  align-items: center;
  gap: 5rem;
  position: relative;
  .imageWrapper {
    img {
      height: 600px;
    }
  }
  .flex1 {
    h3 {
      color: #24b0ff;
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 1.4rem;
    }
    p {
      font-family: "mollen-light", sans-serif;
      font-size: 1.1rem;
      font-weight: 500;
      margin-bottom: 2.1rem;
      line-height: 1.4;

      b {
        font-family: "mollen-bold", sans-serif;
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    .content {
      h4 {
        font-size: 3.6rem;
      }
    }
    .flex1 {
    }
    .imageWrapper {
      img {
        height: 500px;
      }
    }
  }
  @media only screen and (max-width: 1170px) {
    .flex1 {
    }
    .imageWrapper {
      img {
        height: 450px;
      }
    }
  }
  @media only screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 7rem 0 4rem 0rem;

    /* margin-top: 100px; */
    .flex1 {
      width: 80%;
    }
    .imageWrapper {
      width: 80%;
      img {
        /* margin-top: ; */
        width: 100%;
        height: 600px;
      }
    }
  }
  @media only screen and (max-width: 590px) {
    .flex1 {
      h3 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .imageWrapper {
      img {
        /* width: 300px; */
        height: 360px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    .flex1 {
      h3 {
        font-size: 1.4rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .imageWrapper {
      img {
        height: 300px;
      }
    }
  }
`;
