import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import closeBtn from "../assets/icon/plus.png";
import image from "../assets/images/bukks.svg";
import Select from "react-select";
import { countriesArray } from "../dummy/countries";
import { solutionsArr } from "../dummy/products";
import { toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import emailjs from "@emailjs/browser";
import demoLeft from "../assets/images/demoLeft.svg";

const DemoModal = ({ isShow, setIsShow }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    businessEmail: "",
    companyName: "",
    country: "",
    solution: "",
    message: "",
  });
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = null;
      document.body.style.position = null;
    }
    return () => {
      document.body.style.overflow = null;
      document.body.style.position = null;
    };
  }, [isShow]);

  useEffect(() => {
    console.log(selectedCountry);
    setForm((prev) => ({
      ...prev,
      country: selectedCountry?.value,
      solution: selectedSolution?.value,
    }));
  }, [selectedCountry, selectedSolution]);

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name);

    if (name === "name") {
      setForm((prev) => ({
        ...prev,
        fullName: value,
      }));
      console.log(form);
    } else if (name === "email") {
      setForm((prev) => ({
        ...prev,
        businessEmail: value,
      }));
    } else if (name === "company") {
      setForm((prev) => ({
        ...prev,
        companyName: value,
      }));
    } else if (name === "message") {
      setForm((prev) => ({
        ...prev,
        message: value,
      }));
    }
  };

  const selectCountryHandler = (selected) => {
    setSelectedCountry(selected);
    const value = selected;
    console.log(value);
    setForm((prev) => ({
      ...prev,
      country: value.value,
    }));
  };
  const selectSolutionHandler = (selected) => {
    setSelectedSolution(selected);
    const { value } = selected;
    setForm((prev) => ({
      ...prev,
      solution: value,
    }));
  };

  const sendEmail = () => {
    setLoading(true);

    emailjs
      .send("service_o3yrw1i", "template_rkktbq4", form, "OpsWMwoR_EF6bZWiK")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setForm({
            fullName: "",
            businessEmail: "",
            companyName: "",
            country: "",
            solution: "",
            message: "",
          });
          setLoading(false);
          toast.success(
            "We have received your request and you will be replied shortly",
            {
              duration: 4000,
              position: "top-center",

              // Custom Icon
              icon: "👏",

              // Change colors of success/error/loading icon
              iconTheme: {
                primary: "#000",
                secondary: "#fff",
              },

              // Aria
              ariaProps: {
                role: "status",
                "aria-live": "polite",
              },
            }
          );
        },
        (error) => {
          console.log(error);
          setLoading(false);
          toast.error("Something went wrong, please try again.");
        }
      );
  };
  const onFormSubmitHandler = (e) => {
    if (
      form.businessEmail === "" ||
      form.companyName === "" ||
      form.fullName === "" ||
      form.solution === "" ||
      form.country === ""
    ) {
      return;
    }
    e.preventDefault();
    console.log(form);
    sendEmail();
  };

  return createPortal(
    <Container>
      <Content>
        <div className="content">
          <div className="demoLeft">
            <img src={demoLeft} className="demoleft" alt="secretary_image" />
          </div>
          <div className="formRight">
            <div
              style={{
                position: "absolute",
                right: "2rem",
              }}
            >
              <img
                src={closeBtn}
                alt="closeBtn"
                className="closeBtn"
                width="15px"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setIsShow(false);
                }}
              />
            </div>
            <h3 className="title">Request a demo</h3>
            <p className="text">Send a message to get started</p>
            <div className="formWrapper">
              <form className="formContainer" action="#">
                <div className="inputTab">
                  <label htmlFor="name">
                    Full Name<span>*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={form.fullName}
                    onChange={handleFormChange}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="inputTab">
                  <label htmlFor="email">
                    Email<span>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.businessEmail}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your business email"
                  />
                </div>
                <div className="inputTab">
                  <label htmlFor="company">
                    Phone Number<span>*</span>
                  </label>
                  <input
                    type="number"
                    name="company"
                    value={form.companyName}
                    onChange={handleFormChange}
                    required
                    placeholder="Enter your company name"
                  />
                </div>

                <div className="inputTab">
                  <label htmlFor="company">
                    Solution<span>*</span>
                  </label>
                  <Select
                    className="select"
                    classNamePrefix="selectInner"
                    placeholder="Select solution"
                    required
                    value={selectedSolution}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: state.isFocused ? null : null,
                        height: "42px",
                      }),
                    }}
                    onChange={selectSolutionHandler}
                    options={solutionsArr}
                  />
                </div>
                <div className="inputTab">
                  <label htmlFor="company">Message</label>
                  <textarea
                    type="phone"
                    value={form.message}
                    id="phone"
                    name="message"
                    placeholder=""
                    onChange={handleFormChange}
                  />
                </div>
                <div className="submitWrapper">
                  <button
                    disabled={loading ? true : false}
                    className="submit"
                    onClick={onFormSubmitHandler}
                  >
                    {loading ? (
                      <TailSpin
                        height="20"
                        width="20"
                        wrapperStyle={{
                          display: "flex",
                          justifyContent: "center",
                        }}
                        color="#fff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        visible={true}
                      />
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Content>
    </Container>,
    document.getElementById("demoModal")
  );
};

export default DemoModal;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.429);
  z-index: 1000;
`;

const Content = styled.div`
  position: absolute;
  z-index: 1100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 55%;
  height: 90%;
  animation: fadeIn 0.3s ease-in-out forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
  .content {
    display: flex;
    height: 100%;
    max-height: 100%;

    .demoLeft {
      .demoleft {
        width: 300px;
        flex: 1;
        height: 100%;
        object-fit: cover;
      }
    }
    .formRight {
      background-color: #ffffff;
      flex: 1;
      padding: 1.4rem 5rem;
      position: relative;
      /* height: 50px; */
      /* max-height: 520px; */
      overflow-y: scroll;

      .title,
      .text {
        text-align: center;
      }
      .title {
        margin: 30px 0 10px;
        color: #333333;
        font-size: 1.5rem;
        font-family: "generalsans-medium";
      }
      .text {
        font-family: "generalsans-extralight";
        font-size: 1.1rem;
        color: #6f7896;
      }

      .formWrapper {
        height: 520px;

        margin-top: 30px;

        scrollbar-width: none;

        &::-webkit-scrollbar {
          display: none;
        }

        .formContainer {
          flex: 1;
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          overflow-y: scroll;

          .submitWrapper {
            display: flex;
            justify-content: center;
            .submit {
              /* margin: 0 auto; */
              background-color: #00a9ff;
              color: #ffffff;
              border: none;
              outline: none;
              color: #f2f2f2;
              border-radius: 3px;
              padding: 1rem;
              cursor: pointer;
              width: 100%;

              &:disabled {
                background-color: #022c41;
                cursor: not-allowed;
              }
            }
          }

          .inputTab {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            gap: 0.3rem;
            margin-bottom: 1rem;

            label {
              color: #6f7896;
              flex-wrap: nowrap;
              font-family: "generalsans-medium";
              font-size: 0.8rem;

              span {
                color: #ff0000;
              }
            }
            input {
              /* flex: 1; */
              width: 100%;
              border-radius: 5px;
              border: 1px solid #696969;
              height: 42px;
              padding: 0.6rem;
              /* color: #989898; */

              &::placeholder {
                color: #989898;
                font-family: "generalsans-extralight";
              }
              &:active {
                border: 1px solid #696969;
                outline: none;
                box-shadow: none;
              }
              &:focus {
                border: 1px solid #696969;
                outline: none;
                box-shadow: none;
              }
            }
            .select {
              width: 100%;
              color: #989898;
            }
            textarea {
              padding: 10px;
              width: 100%;
              height: 100px; /* Set the initial height */
              resize: none; /* Disable resizing */
              font-family: "mollen-light";
              font-size: 1rem;
              border-radius: 5px;
              border: 1px solid #696969;
              &::placeholder {
                color: #989898;
                font-family: "generalsans-extralight";
              }
              &:active {
                border: 1px solid #696969;
                outline: none;
                box-shadow: none;
              }
              &:focus {
                border: 1px solid #696969;
                outline: none;
                box-shadow: none;
              }
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1268px) {
    .content {
      .demoLeft {
        .demoleft {
          width: 250px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media only screen and (max-width: 1181px) {
    .content {
      .demoLeft {
        .demoleft {
          width: 250px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
      .formRight {
        padding: 1.4rem 3rem;
      }
    }
  }
  @media only screen and (max-width: 1010px) {
    .content {
      .demoLeft {
        .demoleft {
          width: 200px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
      .formRight {
        padding: 1.4rem 3rem;
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .content {
      .demoLeft {
        display: none;
        .demoleft {
          width: 200px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
      .formRight {
        padding: 1.4rem 3rem;
        .formWrapper {
          max-height: 450px;
          overflow-y: scroll;
        }
      }
    }
  }
  @media only screen and (max-width: 650px) {
    width: 75%;

    .content {
      .demoLeft {
        display: none;
        .demoleft {
          width: 200px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
      .formRight {
        padding: 1.4rem 3rem;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    width: 85%;

    .content {
      .demoLeft {
        display: none;
        .demoleft {
          width: 200px;
          flex: 1;
          height: 100%;
          object-fit: cover;
        }
      }
      .formRight {
        padding: 1.4rem 3rem;
      }
    }
  }
`;
