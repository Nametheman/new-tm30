import React from "react";
import styled from "styled-components";
import mastercard from "../assets/images/mastercard.png";
import up from "../assets/images/up.png";
import hope from "../assets/images/hope.png";
import payattitude from "../assets/images/payattitude.png";
import rent4less from "../assets/images/rent4less.png";
import tmsaas from "../assets/images/tmsaas.png";
import visa from "../assets/images/visa.png";
import edu from "../assets/images/edu.png";

const Partners = () => {
  return (
    <Wrapper>
      <div className="partners">
        <div className="section1">
          <p>Trusted partners worldwide</p>
        </div>
        <div className="marquee">
          <div className="exts">
            <div className="flex1">
              <img src={up} alt="" />
              <img src={hope} alt="" />
              <img src={payattitude} alt="" />
              <img src={rent4less} alt="" />
              <img src={tmsaas} alt="" />
              <img src={edu} alt="" />
            </div>
            <div className="flex1">
              <img src={up} alt="" />
              <img src={hope} alt="" />
              <img src={payattitude} alt="" />
              <img src={rent4less} alt="" />
              <img src={tmsaas} alt="" />
              <img src={edu} alt="" />
            </div>
            <div className="flex1">
              <img src={up} alt="" />
              <img src={hope} alt="" />
              <img src={payattitude} alt="" />
              <img src={rent4less} alt="" />
              <img src={tmsaas} alt="" />
              <img src={edu} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 199;
  display: flex;
  top: -6rem;
  left: 0;
  justify-content: center;
  padding: 0 3rem;

  .partners {
    overflow-x: scroll;
    display: flex;
    align-items: center;
    background: #fff;
    flex-shrink: 1 0 auto;
    padding: 2rem 1rem;
    border: 1px solid #ededed;
    box-shadow: 0px 34px 74px rgba(80, 86, 141, 0.15);
    border-radius: 20px;
    gap: 1rem;
    .section1 {
      padding: 1rem 2rem 1rem 0.5rem;
      color: #7e7e7e;
      border-right: 1px solid #7e7e7e5a !important;
    }
    .marquee {
      width: 80%;
      padding: 0 1rem !important;
      overflow-x: hidden;

      /* border: 1px solid #7e7e7e5a !important; */
      padding-left: 1rem;

      .exts {
        width: 200%;
        display: flex;
        align-items: center;
        gap: 8rem;
        justify-content: space-between;
        padding-left: 1rem;
        animation: 80s marquee infinite linear;

        .flex1 {
          display: flex;
          width: 50%;
          align-items: center;
          gap: 5rem;
        }
        &:hover {
          animation-play-state: paused;
        }
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    top: -2rem;
    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 2rem;
          width: 570%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 418px) {
    padding: 0 1rem;
    top: -2rem;
    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 5rem;
          width: 640%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
`;
