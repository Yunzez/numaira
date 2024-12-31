"use client";
import React from "react";
import styled from "styled-components";
import Colors from "@/app/colors";
import formats, { Formats } from "@/app/formats";
import ComingSoon from "@/app/components/comming-soon";

import SectionHeader from "@/app/components/sectionHeader";
import Button from "@/app/components/ButtonComponent";
import { ButtonVariant } from "@/app/components/ButtonComponent";

import Globe from "@/app/asset/globe.svg";
import Home from "@/app/asset/Home.svg";
import Thumb from "@/app/asset/thumb.svg";
import TheTeam from "@/app/asset/theTeam.png";
import FoundingStory from "@/app/asset/foundingStory.png";
import TheTeamMobile from "@/app/asset/theTeamMobile.svg";
import FoundingStoryMobile from "@/app/asset/foundingStoryMobile.svg";
import Image from "next/image";
import Camera from "@/app/asset/camera.svg";
// import TheTeamPng from "@/app/asset/theTeam.png";
// import FoundingStoryPng from "@/app/asset/foundingStory.png";
const Credits: React.FC<{ name: string; source?: string }> = ({
  name,
  source,
}) => {
  if (source === undefined) {
    source = "Unsplash";
  }
  const Wrapper = styled.div`
    gap: 8px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: fit-content;
    background-color: ${Colors.neutral200};
    padding: 8px 16px;
    margin-top: 20px;

    @media (max-width: 450px) {
      margin-top: 12px;
    }
  `;
  const Credit = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 60
    color: ${Colors.neutral1000};
    margin-top: 4px;

    @media (max-width: 450px) {
      font-size: 12px;
    }
  `;
  return (
    <Wrapper>
      <Camera width={25} height={20} />
      <Credit>
        Photo by <div style={{ textDecoration: "underline" }}>{name}</div>
        on
        <div style={{ textDecoration: "underline" }}> {source}</div>
      </Credit>
    </Wrapper>
  );
};
const SectionContainer = styled.div`
  margin: 100px 200px;
  width: calc(100% - 400px);

  @media (max-width: 450px) {
    margin: 40px 24px;
    width: calc(100% - 48px);
  }

  // @media (max-width: 850px) {
  //   margin: 40px 24px;
  //   width: calc(100% - 88px);
  // }
`;

const Descr = styled.div`
  color: ${Colors.brand500};
  font-size: 32px;
  font-weight: 600;
  margin: 24px 0 80px 0;

  @media (max-width: 450px) {
    font-size: 24px;
    margin: 12px 0 40px 0;
  }
`;

const InfoContainer = styled.div<{ reverse?: boolean }>`
  background-color: ${Colors.neutral50};
  padding: 40px;
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 450px) {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  }
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;

  @media (max-width: 450px) {
    width: auto;
  }
`;

const InfoText = styled.p`
  color: ${Colors.neutral1000};
  font-size: 18px;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const ImgColContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  @media (max-width: 450px) {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 50%;
  }

  @media (max-width: 1400px) {
    width: 40%;
  }
`;

// const ImgContainerMobile = styled.div<{ width: number; height: number }>`
//   display: none;

//   @media (max-width: 450px) {
//     display: block
//      width: ${({ width }) => width}px;
//   height: ${({ height }) => height}px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   }
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const page = () => {
  return (
    <div>
      <SectionContainer>
        <SectionHeader svg={<Globe />} title={"The Team"}></SectionHeader>
        <Descr>
          We are a dedicated team with experience in the finance and technology
          industry
        </Descr>
        <InfoContainer>
          <InfoTextContainer>
            <InfoText>
              Numaira’s team is a dynamic group of professionals with expertise
              spanning finance, business, AI, design, engineering, and
              management.
            </InfoText>
            <InfoText>
              This diverse mix of skills gives the team a holistic perspective
              on building AI-powered solutions for financial data automation.
            </InfoText>
            <InfoText>
              Uniquely, every team member at Numaira is hands-on, contributing
              to code, solving complex problems, and aligning their individual
              roles to drive the company’s vision forward.
            </InfoText>
            <InfoText>
              This collective commitment to innovation and collaboration ensures
              that every aspect of Numaira’s solutions reflects the technical
              and creative talents of its multidisciplinary team.
            </InfoText>
          </InfoTextContainer>
          <ImgColContainer>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={TheTeam}
                alt="The Team"
                fill={true}
                 layout='fill'
                objectFit='cover'
                style={{ borderRadius: formats.roundmd }}
              />
            </div>

            <div className="w-100 flex justify-center">
              <Credits name={"NASA"} />
            </div>
          </ImgColContainer>
        </InfoContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader svg={<Home />} title={"Founding Story"}></SectionHeader>
        <Descr>
          We saw a problem and wanted to solve it with grace and elegance
        </Descr>
        <InfoContainer reverse={true}>
          <ImgColContainer>
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Image
                src={FoundingStory}
                alt="Founding Story"
                layout='fill'
                objectFit='cover'
                style={{ borderRadius: formats.roundmd }}
              />
            </div>
            <div className="w-100 flex justify-center">
              <Credits name={"Manson Yim"} />
            </div>
          </ImgColContainer>
          <InfoTextContainer>
            <InfoText>
              We believe that technology should make life easier, and we’re here
              to do just that for the financial world. Imagine a world where
              financial reports, statements, and analyses are auto-generated,
              freeing up time for the work that really matters—strategy,
              innovation, and creativity.
            </InfoText>
            <InfoText>
              Whether you&apos;re an analyst, an auditor, or part of a finance
              team, Numaira is your AI sidekick, automating boring stuff so you
              can focus on what you do best.
            </InfoText>
          </InfoTextContainer>
        </InfoContainer>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader svg={<Thumb />} title={"Join Us"}></SectionHeader>
        <Descr>Be part of the team and let us innovate finance together!</Descr>
        <ButtonContainer>
          <Button
            text={"See Open Positions"}
            variant={ButtonVariant.Primary}
            onClick={() => {
              console.log("hi");
            }}
          ></Button>
        </ButtonContainer>
      </SectionContainer>
      {/* <div style={{height: "90vh"}}><ComingSoon/></div> */}
    </div>
  );
};

export default page;
