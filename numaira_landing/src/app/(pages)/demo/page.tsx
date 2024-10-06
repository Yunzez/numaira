"use client";
import React, { useState } from "react";
import Colors from "@/app/colors";
import Formats from "@/app/formats";
import styled from "styled-components";
import PhoneNumberInput from "@/app/components/phoneNumberInput";
import { StyledButton } from "@/app/components/styled/StyledButton";
import RocketSVG from "@/app/asset/rocket.svg";
const page = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);
  const isValidResponse = () => {
    return firstName && lastName && email && phoneNumber;
  };

  return (
    <div className="md:flex justify-start mt-10">
      <section
        style={{ textAlign: "left" }}
        className="p-5 flex flex-col gap-4 md:ps-5 md:pe-20 flex-grow md:w-1/2"
      >
        <div
          style={{
            color: Colors.brand500,
            fontSize: Formats.displayXL,
            fontWeight: 600,
            paddingBottom: "10px",
          }}
        >
          Get A Demo of Numaira
        </div>
        <DesTextBlock
          text=" Experience solutions in action and discover how we can streamline your
                                    document workflows. With just a few clicks, our platform automates the
                                    creation, updating, and management of financial reports, saving you
                                    hours of manual work."
        />
        <div
          style={{
            border: "1px dotted black",
            borderRadius: Formats.roundmd,
            padding: "5%",
          }}
        >
          <DesTextBlock text="What to Expect in the Demo" />
          <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
            <li>
              Presentation of Numaira’s seamless integration into your current
              processes
            </li>
            <li>
              AI-powered Smart Templates overview to eliminate manual
              copy-pasting for good
            </li>
            <li>
              Key feature walkthrough:
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                <li>1-click document generation</li>
                <li>Data mapping</li>
              </ul>
            </li>
            <li>A personalized Q&A session</li>
          </ul>
        </div>

        <DesTextBlock
          text="  Ready to see how we can make your document workflow smarter and faster?
                                    Fill out the form, and one of our team members will be in touch to
                                    schedule your demo."
        />
      </section>
      <section className="p-5 flex-grow md:w-1/2">
        {error && (
          <div className="text-red-500 p-5">Please fill out all fields</div>
        )}
        <ContactCard className="p-12" style={{ minHeight: "50vh" }}>
          {requestSent ? (
            <div
              className="flex flex-col justify-center"
              style={{ minHeight: "50vh" }}
            >
              <div className="flex justify-center">
                <RocketSVG />
              </div>
              <div
                style={{ fontSize: Formats.displaySM, color: Colors.brand500 }}
                className="py-5 font-bold"
              >
                Your request is sent!
              </div>
              <div style={{ fontSize: Formats.textSM }}>
                A Numaira team member will be reaching out to you within 24
                hours.
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-around gap-4">
                <div>
                  <div style={{ textAlign: "left" }} className="ps-2">
                    First Name
                  </div>
                  <CustomInputBox
                    type="text"
                    id="firstName"
                    style={{ width: "100%" }}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }} className="ps-2">
                    Last Name
                  </div>
                  <CustomInputBox
                    type="text"
                    id="lastName"
                    style={{ width: "100%" }}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }} className="ps-2">
                    Email
                  </div>
                  <CustomInputBox
                    type="email"
                    id="email"
                    style={{ width: "100%" }}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <div style={{ textAlign: "left" }} className="ps-2">
                    Phone Number
                  </div>
                  <div className="flex">
                    <PhoneNumberInput />
                    <CustomInputBox
                      type="tel"
                      id="phoneNumber"
                      style={{ width: "100%" }}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  className="flex justify-start "
                  style={{ textAlign: "left" }}
                >
                  <CheckboxContainer htmlFor={"productUpdates"}>
                    <HiddenCheckbox id={"productUpdates"} />
                    <CustomCheckbox />
                  </CheckboxContainer>

                  <div>
                    Yes, I’d like to receive product updates regarding Numaira.
                    (You can opt out any time). View our privacy policy.
                  </div>
                </div>
              </div>
              <StyledButton
                onClick={() => {
                  console.log("Request A Demo");
                  if (isValidResponse()) {
                    setRequestSent(true);
                  } else {
                    setError(true);
                  }
                }}
              >
                Request A Demo
              </StyledButton>
            </>
          )}
        </ContactCard>
      </section>
    </div>
  );
};

const CheckboxContainer = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding-left: 30px; /* Spacing for the custom checkbox */
  font-size: 16px;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const CustomCheckbox = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${Colors.neutral};
  border-radius: ${Formats.roundmd};
  border: 1.5px solid ${Colors.neutral1000};

  /* When the checkbox is checked, apply different styles */
  ${HiddenCheckbox}:checked + & {
    background-color: ${Colors.brand500};
    border-color: ${Colors.brand200};
  }
`;

const CheckboxLabel = styled.span`
  margin-left: 8px; /* Adjust if needed */
`;

const DesTextBlock = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        color: Colors.neutral1000,
        fontSize: Formats.textMD,
        fontWeight: 400,
      }}
    >
      {text}
    </div>
  );
};

const ContactCard = styled.div`
  background: ${Colors.neutral};
  color: ${Colors.neutral1000};
  border: 1px solid ${Colors.neutral200};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);

  border-radius: ${Formats.roundmd};
  margin: 10px;
`;

const CustomInputBox = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: ${Formats.roundmd};
  border: 1.5px solid ${Colors.neutral300};
  margin: 5px;
`;

export default page;
