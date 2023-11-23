import React, { useState } from "react";
import styled from "styled-components";
import CoreValues from "../components/CoreValues";
import DirectorsMain from "../components/DirectorsMain";
import Hero from "../components/Hero";
import ManagementMain from "../components/ManagementMain";
import arrow from "../assets/icon/openArrow.svg";
import LocationMap from "../components/LocationMap";
import contactImg from "../assets/images/contact.png";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  var onlyNumbers = /^[0-9]*$/;

  const name = "123";
  console.log(onlyNumbers.test(name));

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setUserDetails({ ...userDetails, firstName: value });
  };
  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setUserDetails({ ...userDetails, lastName: value });
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setUserDetails({ ...userDetails, email: value });
  };
  const handlePhoneChange = (e) => {
    let key = e.keyCode || e.which;
    // let onlyNumbers = /^[0-9]+$/;
    const { value } = e.target;
    if (!onlyNumbers.test(value)) {
      return;
    }
    setUserDetails({ ...userDetails, phone: value });
  };
  const handleMessageChange = (e) => {
    const { value } = e.target;
    setUserDetails({ ...userDetails, message: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_o3yrw1i",
        "template_rkktbq4",
        userDetails,
        "OpsWMwoR_EF6bZWiK"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setUserDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus("SUCCESS");
          setLoading(false);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error);
          setLoading(false);
          toast.error("Something went wrong, please try again.");
        }
      );
  };
  return (
    <Wrapper>
      <div className="whoWeAre">
        <Hero
          title="Contact Us"
          intro=""
          text="Are you ready to start your next project, Contact us below."
        />
      </div>
      <FormSection>
        <div className="formWrapper">
          <h3 className="title">Get in touch</h3>
          <p className="text">
            Our friendly team would love to hear from you about your next
            Project.
          </p>
          <form action="#" onSubmit={sendEmail}>
            <div className="section">
              <div className="field">
                <label htmlFor="firstName">First name</label>
                <input
                  type="text"
                  value={userDetails.firstName}
                  id="firstName"
                  onChange={handleFirstNameChange}
                  placeholder="First name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last name</label>
                <input
                  type="text"
                  value={userDetails.lastName}
                  id="lastName"
                  placeholder="Last name"
                  onChange={handleLastNameChange}
                  required
                />
              </div>
            </div>
            <div className="section">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  value={userDetails.email}
                  id="email"
                  placeholder="you@example.com"
                  onChange={handleEmailChange}
                  required
                />
              </div>
            </div>
            <div className="section">
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="phone"
                  value={userDetails.phone}
                  id="phone"
                  placeholder="234 (81) 000-0000"
                  onChange={handlePhoneChange}
                  required
                />
              </div>
            </div>
            <div className="section">
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  type="phone"
                  value={userDetails.message}
                  id="phone"
                  placeholder=""
                  onChange={handleMessageChange}
                  required
                />
              </div>
            </div>
            <input type="submit" value={loading ? "Sending..." : "Submit"} />
          </form>
        </div>
        <img src={contactImg} alt="" />
      </FormSection>
      <LocationMap background="#F9FAFB" />
    </Wrapper>
  );
};

export default Contact;

const Wrapper = styled.div`
  margin-top: 80px;

  .whoWeAre {
    padding: 3% 10%;
    width: 100%;
  }
`;

const FormSection = styled.section`
  padding: 5.7rem 9rem;
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-between;
  align-items: center;
  img {
    width: 50%;
  }
  .formWrapper {
    /* border: 1px solid; */
    .title {
      font-family: "generalsans-semibold";
      font-size: 1.8rem;
      margin: 1rem 0;
      color: #101828;
    }
    .text {
      margin-top: 1.3rem;
      font-family: "mollen-light";
      line-height: 1.7;
      font-size: 0.9rem;
      margin: auto;
      color: #667085;
    }
    form {
      margin-top: 3rem;

      input[type="submit"] {
        width: 100%;
        height: 39px;
        background: #24b0ff;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        margin-top: 1rem;
        border-radius: 5px;
      }
      .section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 1.8rem;

        .field {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 5px;

          label {
            color: #344054;
            font-size: 0.9rem;
          }
          input,
          textarea {
            border: 1px solid #d0d5dd;
            height: 38px;
            width: 100%;
            padding: 0 10px;
            font-size: 0.8rem;
            border-radius: 5px;

            &::placeholder {
              font-family: "mollen-light";
              color: #667085;
            }

            &:hover,
            &:active,
            &:focus {
              border: 1px solid #24b0ff;
            }
          }
          textarea {
            padding: 10px;
            height: 200px; /* Set the initial height */
            resize: none; /* Disable resizing */
            font-family: "mollen-light";
            font-size: 1rem;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1300px) {
    padding: 2rem 9rem 5rem;
    img {
      width: 45%;
    }
  }
  @media only screen and (max-width: 900px) {
    padding: 2rem 6rem 5rem;
    img {
      width: 45%;
    }
  }
  @media only screen and (max-width: 750px) {
    padding: 2rem 4rem 5rem;
    flex-direction: column-reverse;
    img {
      width: 100%;
      height: 550px;
    }
  }
  @media only screen and (max-width: 500px) {
    padding: 2rem 3rem 5rem;
    flex-direction: column-reverse;
    img {
      width: 100%;
      height: 300px;
    }
    .formWrapper {
      form {
        .section {
          flex-direction: column;
        }
      }
    }
  }
`;
