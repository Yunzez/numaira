"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import landingImage from "./asset/landing.png";
import Colors from "./colors";
import formats from "./formats";
import Footer from "./components/footer";
import SectionHeader from "./components/sectionHeader";
import Button from "./components/ButtonComponent";
import Quote from "./components/QuoteComponent";
import Accordion from "./components/Accordion";
import { ButtonVariant } from "./components/ButtonComponent";
import Marquee from "./components/MarqueeComponent";
import QuoteCarousel from "./components/QuoteCarousel";

// svg imports
import LogoSVG from "./asset/logo.svg";
import Pages from "./asset/pages.svg";
import SparkleDoc from "./asset/SparkleDoc.svg";
import Briefcase from "./asset/briefcase.svg";
import Sprout from "./asset/sprout.svg";
import Help from "./asset/Help.svg";
import Book from "./asset/book.svg";
import CyberportLogo from "./asset/CyberportLogo.svg";
import CMBILogo from "./asset/logo_cmbi.svg";
import PWCLogo from "./asset/PWCLogo.svg";
import SyncSpace from "./asset/SyncSpace.svg";
import SolutionWorkflow from "./asset/SolutionWorkflow.svg";
import SyncSpacePng from "./asset/SyncSpace.png";
import WorkflowPng from "./asset/Workflow.png";

// notes:
// changed "The Problem" section cards' gap from auto to 40px
// changed font sizes in Descr from 'format' to 'px'
// changed font size of p element in MemberCompaniesContainer
// need to test carousel if it can be swiped on mobile
// carousel dots not exact same design as figma
// plusMinus on accordion changed from svg to png, transition between the two is not smooth

// can't change sectionHeader svg to 16px for mobile screen

// to-do:
// marquee infinite scrolling
// transition for opening FAQ accordion panels
// use cases section

const Header = styled.div`
  color: ${Colors.brand500};
  maxwidth: 600px;
  font-size: 2em;
  font-weight: 650;
  &:hover {
    color: #0066ff;
  }
`;

const SectionContainer = styled.div`
  margin: 100px 200px;
  width: calc(100% - 400px);

  @media (max-width: 393px) {
    margin: 40px 24px;
    width: calc(100% - 48px);
  }
`;

const MemberCompaniesContainer = styled.div`
  margin: 20px 200px 100px 200px;
  width: calc(100% - 400px);

  @media (max-width: 393px) {
    margin: 20px 24px 40px 24px;
    width: calc(100% - 48px);
  }
`;

const MemberCompaniesText = styled.p`
  color: ${Colors.neutral1000};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 393px) {
    font-size: 14px;
  }
`;

const IntroTitle = styled.p`
  color: ${Colors.brand1000};
  font-size: 24px;
  font-weight: 600;

  @media (max-width: 393px) {
    font-size: 18px;
  }
`;

const IntroDescr = styled.div`
  color: ${Colors.brand500};
  font-size: 48px;
  font-weight: 600;
  margin: 12px 0 24px 0;

  @media (max-width: 393px) {
    font-size: 36px;
  }
`;

const TryDescr = styled.div`
  color: ${Colors.brand500};
  font-size: 32px;
  font-weight: 600;
  margin: 24px 0 60px 0;

  @media (max-width: 393px) {
    font-size: 24px;
    margin: 12px 0 40px 0;
  }
`;

const Descr = styled.div`
  color: ${Colors.brand500};
  font-size: 32px;
  font-weight: 600;
  margin: 24px 0 80px 0;

  @media (max-width: 393px) {
    font-size: 24px;
    margin: 12px 0 40px 0;
  }
`;

const SectionImg = styled.svg`
  margin: 80px auto 0 auto;
  // width: 100%;
  // height: auto;
  // margin-top: 80px;
  // width: 50%;
  // height: 50%;
  // width: 100px;
  // display: flex;
  // justify-content: center;
`;

const ImgContainer = styled.div`
  margin-top: 80px;
`;

const QuoteContainer = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 393px) {
    display: none;
  }
`;

const BlackText = styled.span`
  color: ${Colors.neutral1000};
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const CyberportContainer = styled.div`
  width: 140px;
  margin: 0 auto;
`;

const IntroButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  @media (max-width: 393px) {
    gap: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const EmailText = styled.div`
  color: ${Colors.brand500};
  font-size: 18px;
  font-weight: 600;
  justify-content: center;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 393px) {
    width: auto;
    font-size: 16px;
  }
`;

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-start text-center w-100">
      {/* <div style={{ maxHeight: "350px", maxWidth: "600px" }}>
        <div className="mb-5 font-semibold mt-5">Introducing Numaira</div>

        <Header>Automate data entry for financial documents in 1-click</Header>
        <div
          style={{
            color: Colors.brand1000,
            fontSize: "15px",
            fontWeight: "500",
          }}
          className="p-2"
        >
          Launching in October 2024
        </div>

        <div
          className="flex justify-center mb-10"
          style={{
            color: Colors.neutral700,
            display: "flex",
            justifyContent: "center",
          }}
        ></div>
        <Image src={landingImage} alt="Landing Image" />
      </div> */}

      <SectionContainer style={{ marginTop: "80px", marginBottom: "80px"}}>
        <IntroTitle>Introducing Numaira</IntroTitle>
        <IntroDescr>Automate data entry for financial documents in 1-click</IntroDescr>
        <IntroButtonContainer>
          <p>Launching in December 2024</p>
          {/* <Button text={"Request A Demo"} variant={ButtonVariant.Primary} onClick={() => {console.log("hi")}}></Button>
          <Button text={"Solution"} variant={ButtonVariant.Secondary} onClick={() => {console.log("hi")}}></Button> */}
        </IntroButtonContainer>
        {/* <SectionImg as={SyncSpace}></SectionImg> */}
        <ImgContainer>
          <Image src={SyncSpacePng} alt="Landing Image" />
        </ImgContainer>
        
      </SectionContainer>
      
      <MemberCompaniesContainer>
        <MemberCompaniesText>Developed by top performers, for top performers</MemberCompaniesText>
        <Marquee Index={0} TotalItems={7}/>
      </MemberCompaniesContainer>

      <SectionContainer>
        <SectionHeader svg={<Pages/>} title={"The Problem"}></SectionHeader>
        <Descr>Manual data alignment for documents is inefficient and repetitive</Descr>
        <QuoteContainer>
          <Quote quote={"The most time-consuming part is finding and picking data from sources."} source={"Equity Researcher"} svg={<CMBILogo/>}></Quote>
          <Quote quote={"Updating numbers is a frequent demand involving repetitive work."} source={"Investment Banker"} svg={<CMBILogo/>}></Quote>
          <Quote quote={"Auditing is constantly short staffed with tight deadlines and repetitive work."} source={"ESG Auditor"} svg={<PWCLogo style={{width: "80px"}}/>}></Quote>
        </QuoteContainer>
        <QuoteCarousel/>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader svg={<SparkleDoc/>} title={"Solution Workflow"}></SectionHeader>
        <Descr>Scale and automate your data alignment needs using AI</Descr>
        {/* <ImgContainer>
          <Image src={WorkflowPng} alt="Workflow Image" />
        </ImgContainer> */}
      </SectionContainer>

      <SectionContainer>
        <SectionHeader svg={<Briefcase/>} title={"Use Cases"}></SectionHeader>
        <Descr>Numaira facilitates seamless data entry no matter your industry</Descr>
      </SectionContainer>

      <SectionContainer>
        <SectionHeader svg={<Sprout/>} title={"Funding"}></SectionHeader>
        <Descr style={{ marginBottom: "60px"}}><BlackText>Numaira received</BlackText> $100,000 HKD ($13K USD) in seed funding <BlackText>from <Underline>Cyberport</Underline>, a cutting-edge technology incubator.</BlackText></Descr>
        <CyberportContainer>
          <CyberportLogo/>
        </CyberportContainer>
      </SectionContainer>

      {/* <SectionContainer>
        <SectionHeader svg={<Help/>} title={"FAQs"}></SectionHeader>
        <Descr>Frequently Asked Questions</Descr>
        <Accordion/>
        <EmailText><BlackText>Don’t see your question(s) above? Get answers by sending a message to </BlackText><Underline><a href="mailto:numairaai@proton.me">numairaai@proton.me</a></Underline></EmailText>
      </SectionContainer> */}

      <SectionContainer>
        <SectionHeader svg={<Book/>} title={"Try Numaira"}></SectionHeader>
        <TryDescr>Numaira is ready for testing. Book a demo today to start automating the future!</TryDescr>
        <ButtonContainer>
          <Button text={"Request A Demo"} variant={ButtonVariant.Primary} onClick={() => router.push("/demo")}
                className={pathname === "/demo" ? "active" : ""}></Button>
        </ButtonContainer>
      </SectionContainer>
    </div>
  );
}
