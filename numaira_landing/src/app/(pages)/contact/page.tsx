"use client";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Colors from "../../colors";
import formats from "../../formats";
import CopySVG from "../../asset/copy.svg";
import TickSVG from "../../asset/tick.svg";
import DropDownUp from "../../asset/dropDownUp.svg";
import DropDownDown from "../../asset/dropDownDown.svg";
import { StyledButtonWhite } from "../../components/styled/StyledButtonWhite";

const ContactCard = styled.div`
  width: 610px;
  max-height: 500px;
  border-radius: 9px;
  background: ${Colors.neutral50};
  display: flex;
  align-items: flex-start;
`;

const page = () => {
  const [upDownClicked, setUpDownClicked] = useState(false);
  const alwaysTrue = useState(true);
  const [timeZone, setTimeZone] = useState({
    // First true/false is for mouse hovering at timezone showing the "TickSVG" or not.
    // Second true/false is for clicking timezone and make it shown on Dropdown menu
    "Asia-Pacfic": [false, false],
    EMEA: [false, false],
    Americas: [false, false],
  });

  const handleMouseEnter = (key, index) => {
    setTimeZone((prev) => ({
      ...prev,
      [key]: prev[key].map((value, i) => (i === index ? true : value)),
    }));
  };

  const handleMouseLeave = (key, index) => {
    setTimeZone((prev) => ({
      ...prev,
      [key]: prev[key].map((value, i) => (i === index ? false : value)),
    }));
  };

  const setItemSelected = (key, index) => {
    // console.log(
    //   `key is ${key}, index is ${index}, timeZone[key] is ${timeZone[key][index]}`
    // );
    Object.keys(timeZone).map((item) => {
      timeZone[item][index] = item === key ? true : false;
    });
  };

  if (upDownClicked === false) {
    timeZone["Asia-Pacfic"][0] = false;
    timeZone["EMEA"][0] = false;
    timeZone["Americas"][0] = false;
  }

  return (
    <div>
      <section className="hidden sm:block">
        <div>
          <div className="flex flex-col gap-12">
            <div
              className="flex flex-col items-start"
              style={{ marginLeft: "9%", marginTop: "3%" }}
            >
              <div
                style={{
                  color: Colors.primary,
                  fontSize: formats.displayLG,
                  fontWeight: "600",
                }}
              >
                Contact Us
              </div>
              <div
                style={{
                  color: Colors.neutral1000,
                  fontWeight: "300",
                  marginTop: "8px",
                }}
              >
                We're here to help answer questions about Numaira’s digital
                software solutions, services, and offerings.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-5">
              <ContactCard
                className="justify-center items-center"
                style={{ height: "330px" }}
              >
                <div className="flex flex-col gap-2 items-start justify-center">
                  <div
                    style={{
                      color: Colors.primary,
                      fontSize: formats.displayMD,
                      marginTop: "45px",
                    }}
                  >
                    Call Us
                  </div>
                  <div
                    style={{
                      fontSize: formats.displaySM,
                      fontWeight: "600",
                      color: Colors.neutral1000,
                    }}
                  >
                    +852 5644 7891
                  </div>
                  <div style={{ fontWeight: "300", fontSize: formats.textSM }}>
                    9:00-17:30 (MOM 8:00-17:00)
                  </div>
                  <div style={{ color: Colors.neutral700, marginTop: "30px" }}>
                    Find a phone number near you
                  </div>
                  <div className="flex flex-col w-96 items-start">
                    <div className="w-96 mt-2 absolute">
                      <button
                        type="button"
                        className="relative w-full rounded-md bg-white py-1.5 pl-1 pr-3 h-10 text-left hover:cursor-pointer flex flex-row justify-between items-center"
                        onClick={() => {
                          setUpDownClicked((prev) => !prev);
                        }}
                      >
                        <span
                          className="ml-3"
                          style={{
                            fontWeight: "600",
                            fontSize: formats.textXL,
                          }}
                        >
                          {Object.keys(timeZone).map((item) =>
                            timeZone[item][1] ? <div>{item}</div> : ""
                          )}
                        </span>
                        {upDownClicked ? <DropDownUp /> : <DropDownDown />}
                      </button>

                      {upDownClicked ? (
                        <button
                          className="w-full"
                          onClick={() => {
                            setUpDownClicked((prev) => !prev);
                          }}
                        >
                          {Object.keys(timeZone).map((item) => (
                            <div
                              className="flex flex-col items-start width-96 bg-white hover:cursor-pointer"
                              key={item}
                              onMouseEnter={() => handleMouseEnter(item, 0)}
                              onMouseLeave={() => handleMouseLeave(item, 0)}
                              onClick={() => setItemSelected(item, 1)}
                            >
                              <div className="flex flex-row p-2">
                                {timeZone[item][0] ? (
                                  <TickSVG />
                                ) : (
                                  <TickSVG className="opacity-0" />
                                )}
                                <span
                                  className="ml-2 text-left"
                                  style={{
                                    fontWeight: "300",
                                    fontSize: formats.textSM,
                                  }}
                                >
                                  {item}
                                </span>
                              </div>
                            </div>
                          ))}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </ContactCard>
              <ContactCard
                className="justify-center items-center"
                style={{ height: "330px" }}
              >
                <div className="flex flex-col items-start justify-center gap-2 ">
                  <div
                    style={{
                      color: Colors.primary,
                      fontSize: formats.displayMD,
                      marginTop: "45px",
                    }}
                  >
                    Email Us
                  </div>
                  <div
                    className="flex flex-col items-start"
                    style={{
                      color: Colors.neutral700,
                      fontSize: formats.textSM,
                    }}
                  >
                    <p>
                      Have questions about Numaira? Get answers within 1
                      business
                    </p>
                    <p>day by sending a message to:</p>
                  </div>
                  <StyledButtonWhite style={{ marginTop: "30px" }}>
                    <div className="flex flex-row h-8 w-56">
                      <CopySVG width={30} height={30} />
                      <div style={{ fontSize: formats.textLG }}>
                        numairaai@proton.me
                      </div>
                    </div>
                  </StyledButtonWhite>
                </div>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>
      <section className="block sm:hidden">
        <div>
          <div className="flex flex-col gap-12">
            <div
              className="flex flex-col items-start"
              style={{ marginLeft: "9%", marginTop: "15%", marginRight: "9%" }}
            >
              <div
                style={{
                  color: Colors.primary,
                  fontSize: formats.displayLG,
                  fontWeight: "600",
                }}
              >
                Contact Us
              </div>
              <div
                style={{
                  textAlign: "left",
                  color: Colors.neutral1000,
                  fontWeight: "300",
                  marginTop: "8px",
                }}
              >
                We're here to help answer questions about Numaira’s digital
                software solutions, services, and offerings.
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5"
              style={{
                width: "350px",
                marginLeft: "5%",
                marginTop: "5%",
                marginRight: "5%",
                marginBottom: "10%",
              }}
            >
              <ContactCard
                className="justify-center items-center"
                style={{ height: "400px", width: "350px" }}
              >
                <div className="flex flex-col gap-2 items-start justify-center">
                  <div
                    style={{
                      color: Colors.primary,
                      fontSize: formats.displayMD,
                      marginTop: "30px",
                    }}
                  >
                    Call Us
                  </div>
                  <div
                    style={{
                      fontSize: formats.displaySM,
                      fontWeight: "600",
                      color: Colors.neutral1000,
                    }}
                  >
                    +852 5644 7891
                  </div>
                  <div style={{ fontWeight: "300", fontSize: formats.textSM }}>
                    9:00-17:30 (MOM 8:00-17:00)
                  </div>
                  <div
                    className="items-start"
                    style={{ color: Colors.neutral700, marginTop: "30px" }}
                  >
                    Find a phone number near you
                  </div>
                  <div className="flex flex-col w-64 items-center">
                    <div className="w-72 mt-2">
                      <button
                        type="button"
                        className="relative w-full rounded-md bg-white py-1.5 pl-1 pr-3 h-10 text-left hover:cursor-pointer flex flex-row justify-between items-center"
                        onClick={() => {
                          setUpDownClicked((prev) => !prev);
                        }}
                      >
                        <span
                          className="ml-3"
                          style={{
                            fontWeight: "600",
                            fontSize: formats.textXL,
                          }}
                        >
                          {Object.keys(timeZone).map((item) =>
                            timeZone[item][1] ? <div>{item}</div> : ""
                          )}
                        </span>
                        {upDownClicked ? (
                          <DropDownUp
                            style={{ width: "30px", height: "30px" }}
                          />
                        ) : (
                          <DropDownDown
                            style={{ width: "30px", height: "30px" }}
                          />
                        )}
                      </button>

                      {upDownClicked ? (
                        <button
                          className="w-full"
                          onClick={() => {
                            setUpDownClicked((prev) => !prev);
                          }}
                        >
                          {Object.keys(timeZone).map((item) => (
                            <div
                              className="flex flex-col items-start width-96 bg-white hover:cursor-pointer"
                              key={item}
                              onMouseEnter={() => handleMouseEnter(item, 0)}
                              onMouseLeave={() => handleMouseLeave(item, 0)}
                              onClick={() => setItemSelected(item, 1)}
                            >
                              <div className="flex flex-row p-2">
                                {timeZone[item][0] ? (
                                  <TickSVG />
                                ) : (
                                  <TickSVG className="opacity-0" />
                                )}
                                <span
                                  className="ml-2 text-left"
                                  style={{
                                    fontWeight: "300",
                                    fontSize: formats.textSM,
                                  }}
                                >
                                  {item}
                                </span>
                              </div>
                            </div>
                          ))}
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </ContactCard>
              <ContactCard
                className="justify-center items-center"
                style={{ height: "330px", width: "350px" }}
              >
                <div className="flex flex-col gap-2 items-start justify-center">
                  <div
                    style={{
                      color: Colors.primary,
                      fontSize: formats.displayMD,
                      marginTop: "30px",
                      marginLeft: "13%",
                    }}
                  >
                    Email Us
                  </div>
                  <div
                    style={{
                      textAlign: "left",
                      color: Colors.neutral700,
                      fontSize: formats.textSM,
                      marginLeft: "13%",
                      marginRight: "5%",
                    }}
                  >
                    Have questions about Numaira? Get answers within 1 business
                    day by sending a message to:
                  </div>
                  <StyledButtonWhite
                    className="ml-2"
                    style={{ marginTop: "30px", marginLeft: "13%" }}
                  >
                    <div className="flex flex-row h-8 w-56">
                      <CopySVG width={30} height={30} />
                      <div style={{ fontSize: formats.textLG }}>
                        numairaai@proton.me
                      </div>
                    </div>
                  </StyledButtonWhite>
                </div>
              </ContactCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
