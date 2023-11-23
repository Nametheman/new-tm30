import React from "react";
import styled from "styled-components";
import ServicesCard from "./ServicesCard";
import softwareIco from "../assets/icon/custom-software.png";
import integrationIco from "../assets/icon/software-integration.png";
import enterpriseIco from "../assets/icon/enterprise.png";
import telecomIco from "../assets/icon/telecom-vas.png";
import qualityIco from "../assets/icon/excellence.png";
import consultingIco from "../assets/icon/consulting-strategy.png";
import analyticsIco from "../assets/icon/data-analytics.png";

const Services = () => {
  const servicesArr = [
    {
      name: "Custom Software Development",
      img: softwareIco,
      text: "Creating bespoke software solutions tailored to meet specific business requirements. This includes web applications, mobile apps, enterprise software, customer relationship management (CRM) systems, content management systems (CMS), and more.",
      iconWidth: "35px",
      iconHeight: "30px",
    },
    {
      name: "Software Integration",
      img: integrationIco,
      text: "Integrating diverse software applications and systems within an organization to enable seamless data flow and process automation. This includes integrating enterprise resource planning (ERP) systems, customer relationship management (CRM) systems, payment gateways, third-party APIs, and legacy systems.",
      iconWidth: "35px",
      iconHeight: "30px",
    },
    {
      name: "Enterprise Solution",
      img: enterpriseIco,
      text: "Designing comprehensive ERP systems to streamline and integrate key business functions such as finance, Human resources, supply chain management, inventory control, and manufacturing.",
      iconWidth: "35px",
      iconHeight: "25px",
    },
    {
      name: "Telecom VAS",
      img: telecomIco,
      text: "Building secure mobile payment platforms and mobile wallet solutions that enable subscribers to make payments, transfer funds, and conduct financial transactions using their mobile devices. This can include peer-to-peer (P2P) payments, bill payments, mobile banking, and mobile money services.",
      iconWidth: "35px",
      iconHeight: "25px",
    },
    {
      name: "Quality Assurance and Testing",
      img: qualityIco,
      text: "We Conduct thorough testing and quality assurance processes to ensure the software meets high standards of functionality, reliability, performance, and security. This includes test planning, test execution, bug tracking, and automated testing.",
      iconWidth: "38px",
      iconHeight: "38px",
    },
    {
      name: "IT Consulting & Strategy",
      img: consultingIco,
      text: "We Provide expert guidance & consultation on software development strategies, architecture design, project planning, and feasibility analysis. This helps businesses make informed decisions and maximize the potential of their software projects.",
      iconWidth: "34px",
      iconHeight: "34px",
    },
    {
      name: "Data Analytics and Business Intelligence",
      img: analyticsIco,
      text: "Implementing solutions for collecting, analyzing, and visualizing data to derive valuable insights for businesses. This includes data warehousing, data mining, reporting dashboards, and predictive analytics.",
      iconWidth: "36px",
      iconHeight: "36px",
    },
  ];
  return (
    <Wrapper>
      <h3 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="400">
        Our Key Services
      </h3>
      <p data-aos="fade-down" data-aos-easing="linear" data-aos-duration="400">
        We tailor our Key services to meet the unique needs and goals of each
        client, providing end-to-end software development and support throughout
        the project lifecycle. We offer a diverse range of services to cater to
        the specific needs of businesses and organizations. Which includes the
        following:
      </p>
      <div className="cardContainer">
        {servicesArr.map((service, idx) => {
          return (
            <ServicesCard
              key={idx * 353}
              icon={service.img}
              text={service.text}
              height={service.iconHeight}
              width={service.iconWidth}
              title={service.name}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Services;

const Wrapper = styled.div`
  background: #f9fafb;
  padding: 6rem 8rem;
  h3 {
    color: #101828;
    font-weight: 600;
    font-size: 1.5rem;
    width: 45%;
    margin-bottom: 2rem;
  }
  p {
    color: #667085;
    width: 69%;
    line-height: 1.9;
    font-family: "mollen-light", sans-serif;
  }
  .cardContainer {
    max-width: 100%;
    overflow-x: scroll;
    display: grid;
    grid-template-columns: repeat(minmax(200, 1fr));
    grid-auto-flow: column;
    grid-gap: 2.2rem;
    align-items: center;
    margin-top: 2rem;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 3rem 2rem;

    h3 {
      text-align: center;
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
  @media only screen and (max-width: 450px) {
    padding: 2rem;

    h3 {
      text-align: center;
      width: 100%;
    }
    p {
      width: 100%;
    }
  }
`;
