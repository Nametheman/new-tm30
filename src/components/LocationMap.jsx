import React from "react";
import styled from "styled-components";
import location from "../assets/icon/location.png";
import phone from "../assets/icon/phone.png";
import email from "../assets/icon/email.png";

const LocationMap = ({ background }) => {
  return (
    <Wrapper $background>
      <div className="locationWrapper">
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=29 Berkley St, Lagos Island 102273, Lagos&t=&z=14&ie=UTF8&iwloc=&output=embed"
        ></iframe>{" "}
      </div>
      <div className="addressWrapper">
        <div className="addIt addIt1">
          <img src={location} alt="" />
          <b className="addName">Location</b>
          <p className="addInfo">29A Berkley Street, Lagos Island, Lagos</p>
        </div>
        <div className="addIt addIt2">
          <img src={phone} alt="" />
          <b className="addName">Phone Number</b>
          <p className="addInfo">+2348182504430</p>
          <p className="addInfo">+2348035283267</p>
          <p className="addInfo">+2348034678549</p>
        </div>
        <div className="addIt addIt3">
          <img src={email} alt="" />
          <b className="addName">Mail</b>
          <p className="addInfo">info@tm30.net</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LocationMap;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${(props) => (props.$background ? "#F9FAFB" : "#fff")};
  padding: 0 0 3rem;
  .locationWrapper {
    width: 85%;
    height: 500px;
  }
  .addressWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: wrap;

    .addIt {
      display: flex;
      /* justify-content: center; */
      align-items: center;
      flex-direction: column;
      gap: 1rem;
      height: 200px;

      .addName {
        color: #101828;
      }
      .addInfo {
        color: #24b0ff;
        font-size: 1rem;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .addressWrapper {
      .addIt {
        img {
          width: 30px;
        }
        .addInfo {
          color: #24b0ff;
          font-size: 0.8rem;
        }
      }
    }
  }
`;
