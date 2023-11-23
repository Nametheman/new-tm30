import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import icon from "../assets/icon/featured-icon.png";
import BlueButton from "./BlueButton";
import arrow from "../assets/icon/openArrow.svg";
import r1Img from "../assets/images/r-1.png";
import r2Img from "../assets/images/r-2.png";
import r3Img from "../assets/images/r-3.png";
import r4Img from "../assets/images/r-4.png";
import r5Img from "../assets/images/r-5.png";
import RecentProjectCard from "./RecentProjectCard";
import CardWrapper from "./CardWrapper";
import { Link } from "react-router-dom";

const RecentProjects = () => {
  const projects = [
    {
      name: "PayMyBills",
      text: "A Whatsapp payment platform.",
      img: r1Img,
      link: "https://paymybills.ng/",
    },
    {
      name: "Backup Cash",
      text: "A financial savings application.",
      img: r3Img,
      link: "https://mybackupcash.com/",
    },
    {
      name: "Edusponsor",
      text: "An exam sponsoring platform.",
      img: r2Img,
      link: "https://www.edusponsor.com/",
    },
    {
      name: "Residify",
      text: "Estate management solution.",
      img: r4Img,
      link: "#",
    },
    {
      name: "AdashiEsusuAkawo",
      text: "Financial tool for savings & contributions.",
      img: r5Img,
      link: "https://www.adashiesusuakawo.com/",
    },
  ];

  useEffect(() => {
    // cardRef.current.transformX("50px");
  }, []);

  return (
    <Wrapper>
      <div className="flex-1">
        <div className="logoWrapper">
          <img src={icon} alt="" />
          <p className="discover">Discover</p>
        </div>
        <h3 className="title">Our Recent Products</h3>
        <p className="text-1">
          We build custom applications, social applications, widgets, mobile
          apps and dynamic websites which enables businesses to push out their
          brand
        </p>
        <Link to="/projects" className="linkbtn">
          Explore <img src={arrow} alt="" />
        </Link>{" "}
      </div>

      <CardWrapper>
        <RecentProjectCard
          img={projects[0].img}
          title={projects[0].name}
          text={projects[0].text}
          link={projects[0].link}
        />
        <RecentProjectCard
          img={projects[1].img}
          title={projects[1].name}
          text={projects[1].text}
          link={projects[1].link}
        />
        <RecentProjectCard
          img={projects[2].img}
          title={projects[2].name}
          text={projects[2].text}
          link={projects[2].link}
        />
        <RecentProjectCard
          img={projects[3].img}
          title={projects[3].name}
          text={projects[3].text}
          link={projects[3].link}
        />
        <RecentProjectCard
          img={projects[4].img}
          title={projects[4].name}
          text={projects[4].text}
          link={projects[4].link}
        />
        <RecentProjectCard
          img={projects[0].img}
          title={projects[0].name}
          text={projects[0].text}
          link={projects[0].link}
        />
        <RecentProjectCard
          img={projects[1].img}
          title={projects[1].name}
          text={projects[1].text}
          link={projects[1].link}
        />
        <RecentProjectCard
          img={projects[2].img}
          title={projects[2].name}
          text={projects[2].text}
          link={projects[2].link}
        />
        <RecentProjectCard
          img={projects[3].img}
          title={projects[3].name}
          text={projects[3].text}
          link={projects[3].link}
        />
        <RecentProjectCard
          img={projects[4].img}
          title={projects[4].name}
          text={projects[4].text}
          link={projects[4].link}
        />
        <RecentProjectCard
          img={projects[0].img}
          title={projects[0].name}
          text={projects[0].text}
          link={projects[0].link}
        />
        <RecentProjectCard
          img={projects[1].img}
          title={projects[1].name}
          text={projects[1].text}
          link={projects[1].link}
        />
        <RecentProjectCard
          img={projects[2].img}
          title={projects[2].name}
          text={projects[2].text}
          link={projects[2].link}
        />
        <RecentProjectCard
          img={projects[3].img}
          title={projects[3].name}
          text={projects[3].text}
          link={projects[3].link}
        />
        <RecentProjectCard
          img={projects[4].img}
          title={projects[4].name}
          text={projects[4].text}
          link={projects[4].link}
        />
      </CardWrapper>
    </Wrapper>
  );
};

export default RecentProjects;

const Wrapper = styled.section`
  padding: 8rem 0;
  display: flex;
  align-items: center;
  max-width: 100vw;
  overflow-x: hidden;
  flex-shrink: 0;
  position: relative;
  height: 600px;
  /* width: 40rem; */

  .flex-1 {
    margin-right: 10rem;
    width: 40rem;
    height: 100%;
    padding: 8rem 7rem 0 6rem;
    background: #fff !important;
    position: absolute;
    z-index: 2;
    .logoWrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
      img {
        width: 80px;
      }
      .discover {
        color: #00a3ff !important;
        font-size: 1.5rem;
        font-family: "mollen-light";
        margin-left: 0.4rem;
      }
    }

    .title {
      font-weight: 600;
      font-size: 2.1rem;
      margin: 1rem 0 0 0rem;
    }

    .text-1 {
      margin-top: 2rem;
      color: #667085;
      font-size: 1rem;
      line-height: 1.9;
      font-family: "mollen-light";
    }
    .linkbtn {
      background: #0090ff;
      color: #fff !important;
      padding: 0.8rem 1rem;
      border-radius: 0.4rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.7rem;
      width: 140px;
      font-size: 0.8rem;
      margin-top: 1.4rem;

      img {
        width: 10px;
        margin-bottom: 3px;
        animation: bounce 2s infinite;
      }
    }
  }
  @media only screen and (max-width: 1100px) {
    padding: 8rem 0;
    display: flex;
    align-items: center;
    max-width: 100vw;
    overflow-x: hidden;
    flex-shrink: 0;
    position: relative;
    height: 600px;

    .flex-1 {
      margin-right: 10rem;
      width: 30rem;
      height: 100%;
      padding: 8rem 3rem 0 3rem;
      background: #fff !important;
    }
  }
  @media only screen and (max-width: 800px) {
    padding: 2rem 1rem 4rem;
    flex-direction: column;
    height: unset;
    flex-shrink: 1;
    max-width: 100vw;
    overflow-x: hidden;

    .flex-1 {
      margin-right: 0rem;
      padding: 0 1rem;
      width: 100%;
      position: static;
      margin-bottom: 3rem;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem 1rem 4rem;
    flex-direction: column;
    height: unset;
    flex-shrink: 1;
    max-width: 100vw;
    overflow-x: hidden;

    .flex-1 {
      margin-right: 0rem;
      padding: 0 1rem;
      width: 100%;
      position: static;
      margin-bottom: 3rem;
    }
  }
`;
