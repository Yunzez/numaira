"use client";
import React from "react";
import Colors from "@/app/colors";
import Formats from "@/app/formats";
import styled from "styled-components";
const page = () => {
  return (
    <div className="flex justify-start">
      <section
        style={{ maxWidth: "50%", textAlign: "left", paddingRight: "10%", paddingLeft:"5%" }}
        className="p-5 flex flex-col gap-4"
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
      <section style={{ maxWidth: "50%" }} className="p-5">
        <ContactCard className="p-12">
          <div className="flex flex-col justify-around gap-4">
            <div>
              <div style={{ textAlign: "left" }} className="ps-2">
                First Name
              </div>
              <CustomInputBox
                type="text"
                id="firstName"
                style={{ width: "100%" }}
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
              />
            </div>
            <div>
              <div style={{ textAlign: "left" }} className="ps-2">
                Phone Number
              </div>
              <CustomInputBox
                type="tel"
                id="phoneNumber"
                style={{ width: "100%" }}
              />
            </div>
            <div className="flex justify-start " style={{ textAlign: "left" }}>
              <CustomInputBox
                type="checkbox"
                id="productUpdates"
                style={{ maxWidth: "20px" }}
              />
              <div>
                Yes, I’d like to receive product updates regarding Numaira. (You
                can opt out any time). View our privacy policy.
              </div>
            </div>
          </div>
        </ContactCard>
      </section>
    </div>
  );
};

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
  box-shadow: 0 12px 10px ${Colors.neutral200}, 0 10px 6px ${Colors.neutral200};
  border-radius: ${Formats.roundmd};
  margin: 10px;
`;

const CustomInputBox = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: ${Formats.roundmd};
  border: 1.2px solid ${Colors.neutral300};
  margin: 5px;
`;

export default page;
