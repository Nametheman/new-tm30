// import React from "react";
import styled from "styled-components";
import facebook from "../assets/icon/facebook.png";
import linkedin from "../assets/icon/linkedin.png";
import youtube from "../assets/icon/youtube.png";
import twitter from "../assets/icon/twitter.png";

const Socials = () => {
  return (
    <SocialsWrapper>
      <div className="socials">
        <a
          href="https://www.facebook.com/TM30Global?mibextid=LQQJ4d"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="linkedin" />
        </a>
        <a
          href="https://x.com/tm30global?s=21&t=Xg0EEv2tUcBlJbvhI3PvGw"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="linkedin" />
        </a>
        <a
          href="https://www.linkedin.com/company/tm30/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="instagram" />
        </a>
        <a
          href="https://instagram.com/tm30global?igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtube} alt="twitter" />
        </a>
      </div>
    </SocialsWrapper>
  );
};

export default Socials;

const SocialsWrapper = styled.div`
  margin-top: 40px;

  .socials {
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 0.3rem;

    .holder {
      background: #415061;
      padding: 20px;
      height: 35px;
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;

      a {
        text-decoration: none;

        img {
          width: 15px !important;
          height: 13px !important;
        }
      }
    }
  }
`;
