"use client";
import React from "react";
import SectionHeader from "@/app/components/sectionHeader";
import Globe from "@/app/asset/thumb.svg";
import Formats from "@/app/formats";
import Colors from "@/app/colors";
import styled from "styled-components";
import Pin from "@/app/asset/location.svg";
import ComingSoon from "@/app/components/comming-soon";
// import IntroDescr from "@/app/components/introDescr";
const page = () => {
  const IntroDescr = styled.div`
    color: ${Colors.brand500};
    font-size: 45px;
    font-weight: 600;
    margin: 12px 0 24px 0;

    @media (max-width: 450px) {
      font-size: 36px;
    }
  `;

  const JobSectionContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    margin-top: 20px;
  `;

  const JobContainer = styled.div`
    border-radius: ${Formats.roundlg};
    background-color: ${Colors.neutral50};
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
  `;

  const JobDesColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
  `;

  const JobTitle = styled.div`
    font-size: ${Formats.textLG};
    color: ${Colors.brand500};
  `;

  const JobLoc = ({
    svg,
    location,
  }: {
    svg: React.ReactNode;
    location: string;
  }) => {
    const JobLocContainer = styled.div`
      display: flex;
      align-items: center;
      gap: 2px;
    `;

    const JobLocText = styled.div`
      font-size: ${Formats.textSM};
      color: ${Colors.neutral700};
    `;

    return (
      <JobLocContainer>
        <div style={{ width: "15px", height: "15px" }}>{svg}</div>
        <JobLocText>Localtion: {location}</JobLocText>
      </JobLocContainer>
    );
  };

  return (
    <section className="w-full max-w-screen-lg mx-auto px-5 sm:px-8 lg:px-10">
      <SectionHeader title={"Join Us"} svg={<Globe />}></SectionHeader>
      <IntroDescr>
        Be part of the team and innovate finance together!
      </IntroDescr>
      {/* <JobSectionContainer>
        <JobContainer>
          <JobDesColumn>
            <JobTitle>Front-end Engineer</JobTitle>
            <JobLoc svg={<Pin />} location="remote" />
          </JobDesColumn>
        </JobContainer>
      </JobSectionContainer> */}
      <ComingSoon/>
      {/* <Descr>
          We are a dedicated team with experience in the finance and technology
          industry
        </Descr> */}
    </section>
  );
};

export default page;
