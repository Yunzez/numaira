"use client";
import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { StyledButton } from "../../components/styled/StyledButton";
import Colors from "../../colors";
import formats from "../../formats";
import AboutOne from "../../asset/about-1.png";
import AboutTwo from "../../asset/about-2.png";
import EarthSVG from "../../asset/earth.svg";
import CameraSVG from "../../asset/camera.svg";
import HouseSVG from "../../asset/house.svg";
import ThumbUpSVG from "../../asset/thumbUp.svg";

const GreyCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${Colors.neutral50};
  width: 1040px;
  gap: 40px;
  border-radius: 10px;
`;

const GreyerContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  background: ${Colors.neutral200};
`;

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-16">
        <div
          className="flex flex-row gap-2"
          style={{ marginBottom: "-20px", marginTop: "100px" }}
        >
          <EarthSVG />
          <div>The team</div>
        </div>

        <div
          style={{
            color: Colors.primary,
            fontSize: formats.displayMD,
            fontWeight: "600",
          }}
        >
          <p>We are a dedicated team with experience in </p>
          <p>the finance and technology industry</p>
        </div>
        <GreyCard style={{ width: "1040px", height: "530px" }}>
          <div
            style={{
              width: "460px",
              height: "390px",
              textAlign: "left",
              marginTop: "-50px",
            }}
          >
            <p>
              Numaira’s team is a dynamic group of professionals with expertise
              spanning finance, business, AI, design, engineering, and
              management.
            </p>
            <p>&nbsp;</p>
            <p>
              This diverse mix of skills gives the team a holistic perspective
              on building AI-powered solutions for financial data automation.
            </p>
            <p>&nbsp;</p>
            <p>
              Uniquely, every team member at Numaira is hands-on, contributing
              to code, solving complex problems, and aligning their individual
              roles to drive the company’s vision forward.{" "}
            </p>
            <p>&nbsp;</p>
            <p>
              This collective commitment to innovation and collaboration ensures
              that every aspect of Numaira’s solutions reflects the technical
              and creative talents of its multidisciplinary team.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={AboutOne}
              alt="About-universe"
              style={{ width: "460px", height: "391px" }}
            />
            <GreyerContainer>
              <div
                className="flex flex-row items-center gap-2"
                style={{ padding: "10px 20px 10px 20px" }}
              >
                <CameraSVG style={{ width: "24px", height: "24px" }} />
                <div
                  style={{
                    fontSize: formats.textSM,
                  }}
                >
                  Photo by NASA on Unsplash
                </div>
              </div>
            </GreyerContainer>
          </div>
        </GreyCard>

        <div className="flex flex-row gap-2" style={{ marginTop: "100px" }}>
          <HouseSVG />
          <div>Founding Story</div>
        </div>
        <div
          style={{
            color: Colors.primary,
            fontSize: formats.displayMD,
            fontWeight: "600",
          }}
        >
          <p>We saw a problem and wanted to solve it with </p>
          <p>grace and elegance</p>
        </div>
        <GreyCard style={{ width: "1040px", height: "530px" }}>
          <div className="flex flex-col items-center gap-4">
            <Image
              src={AboutTwo}
              alt="About-city"
              style={{ width: "460px", height: "391px" }}
            />
            <GreyerContainer>
              <div
                className="flex flex-row items-center gap-2"
                style={{ padding: "10px 20px 10px 20px" }}
              >
                <CameraSVG style={{ width: "24px", height: "24px" }} />
                <div
                  style={{
                    fontSize: formats.textSM,
                  }}
                >
                  Photo by Manson Yim on Unsplash
                </div>
              </div>
            </GreyerContainer>
          </div>
          <div
            style={{
              width: "460px",
              height: "390px",
              textAlign: "left",
              marginTop: "-50px",
            }}
          >
            <p>
              We believe that technology should make life easier, and we’re here
              to do just that for the financial world. Imagine a world where
              financial reports, statements, and analyses are auto-generated,
              freeing up time for the work that really matters—strategy,
              innovation, and creativity.
            </p>
            <p>&nbsp;</p>
            <p>
              Whether you're an analyst, an auditor, or part of a finance team,
              Numaira is your AI sidekick, automating boring stuff so you can
              focus on what you do best.
            </p>
          </div>
        </GreyCard>

        <div
          className="flex flex-col items-center gap-4"
          style={{ marginTop: "100px", marginBottom: "100px" }}
        >
          <div className="flex flex-row gap-2">
            <ThumbUpSVG />
            <div>Join Us</div>
          </div>
          <div
            style={{
              color: Colors.primary,
              fontSize: formats.displayMD,
              fontWeight: "600",
            }}
          >
            <p>Be part of the team and let us innovate</p>

            <p>finance together!</p>
          </div>
          <StyledButton>See Open Positions</StyledButton>
        </div>
      </div>
    </div>
  );
};

export default page;
