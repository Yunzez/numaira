"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
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
import { sendEmailSubscription } from "./context/addToSheet";

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
// FIXME: changed "The Problem" section cards' gap from auto to 40px
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
  margin: 40px 60px;
  width: calc(100% - 120px);
  text-align: left;

  @media (max-width: 768px) {
    margin: 40px 24px;
    width: calc(100% - 48px);
  }
`;

const MemberCompaniesContainer = styled.div`
  margin: 20px 200px 100px 200px;
  width: calc(100% - 400px);

  @media (max-width: 450px) {
    margin: 20px 24px 40px 24px;
    width: calc(100% - 48px);
  }
`;

const MemberCompaniesText = styled.p`
  color: ${Colors.neutral1000};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const IntroTitle = styled.h1`
  color: ${Colors.brand500};
  font-size: 48px;
  font-weight: 600;
  margin: 0 0 16px 0;

  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

const IntroDescr = styled.p`
  color: ${Colors.neutral1000};
  font-size: 24px;
  font-weight: 400;
  margin: 0 0 32px 0;
  line-height: 1.5;

  @media (max-width: 450px) {
    font-size: 18px;
  }
`;

const TryDescr = styled.div`
  color: ${Colors.brand500};
  font-size: 32px;
  font-weight: 600;
  margin: 24px 0 60px 0;

  @media (max-width: 450px) {
    font-size: 24px;
    margin: 12px 0 40px 0;
  }
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
  width: 100%;
  display: flex;
  justify-content: center;
`;

const QuoteContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
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

  @media (max-width: 450px) {
    width: auto;
    font-size: 16px;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  background-color: ${Colors.neutral100};
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 300px;
  height: 100%;
`;

const NewsCategory = styled.span`
  color: ${Colors.brand500};
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const NewsTitle = styled.h3`
  color: ${Colors.brand1000};
  font-size: 20px;
  font-weight: 700;
  margin: 0;
`;

const NewsDate = styled.span`
  color: ${Colors.neutral700};
  font-size: 14px;
`;

const NewsExcerpt = styled.p`
  color: ${Colors.neutral1000};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  flex-grow: 1;
`;

const ReadMoreButton = styled.button`
  background-color: ${Colors.brand500};
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Colors.brand800};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  background-color: ${Colors.neutral};
  border-radius: 12px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 280px;
  height: 100%;
  border: 2px solid ${Colors.neutral200};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  }
`;

const ProductStatus = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  width: fit-content;
  
  ${props => props.children === 'Available Now' && `
    background: ${Colors.brand};
    color: ${Colors.brand500};
    border: 1px solid ${Colors.brand200};
  `}
  
  ${props => props.children === 'Coming Soon' && `
    background: ${Colors.warning_background};
    color: ${Colors.warning};
    border: 1px solid ${Colors.warning};
  `}
  
  ${props => props.children === 'Enterprise' && `
    background: ${Colors.neutral100};
    color: ${Colors.neutral1000};
    border: 1px solid ${Colors.neutral300};
  `}
`;

const ProductTitle = styled.h3`
  color: ${Colors.brand1000};
  font-size: 22px;
  font-weight: 700;
  margin: 4px 0;
  line-height: 1.3;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px 0;
  color: ${Colors.neutral1000};
  font-size: 14px;
  line-height: 1.5;
  flex-grow: 1;
  
  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 6px;
    
    &:before {
      content: "✓";
      position: absolute;
      left: 0;
      color: ${Colors.brand500};
      font-weight: 700;
      font-size: 14px;
    }
  }
`;

const LearnMoreButton = styled.button`
  background: linear-gradient(135deg, ${Colors.brand500} 0%, ${Colors.brand800} 100%);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  margin-top: auto;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 102, 255, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const EmailFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  margin: 20px 60px;
  width: calc(100% - 120px);

  @media (max-width: 768px) {
    margin: 20px 24px;
    width: calc(100% - 48px);
  }
`;

const EmailFormDescription = styled.p`
  color: ${Colors.brand500};
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

const EmailFormWrapper = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  align-items: flex-start;

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid ${Colors.neutral200};
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;
  margin: 0;
  box-sizing: border-box;
  text-align: left;

  &:focus {
    border-color: ${Colors.brand500};
  }

  &::placeholder {
    color: ${Colors.neutral700};
  }
`;

const SubscribeButton = styled.button`
  background: ${Colors.brand500};
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: ${Colors.brand800};
  }

  &:disabled {
    background: ${Colors.neutral300};
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

const PrivacyText = styled.p`
  color: ${Colors.neutral700};
  font-size: 14px;
  font-weight: 400;
  margin: 2px 0 0 0;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const ErrorText = styled.p`
  color: ${Colors.warning};
  font-size: 14px;
  font-weight: 400;
  margin: 4px 0 0 0;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 12px;
  }
`;

const SuccessText = styled.p`
  color: ${Colors.brand500};
  font-size: 16px;
  font-weight: 600;
  margin: 8px 0 0 0;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const CyberportBadgeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0px;
  margin: 40px 60px 0 60px;
  width: calc(100% - 120px);

  @media (max-width: 768px) {
    margin: 30px 24px 0 24px;
    width: calc(100% - 48px);
    gap: 0px;
  }
`;

const CyberportLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    transform: scale(0.8);
    transform-origin: center;
  }
`;

const CyberportBadgeText = styled.p`
  color: ${Colors.neutral700};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  text-align: left;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    setError("");
    
    if (!email) {
      setError("Please enter an email address.");
      return;
    }
    
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      const result = await sendEmailSubscription(email);
      if (result.data === "Email subscription added successfully") {
        setIsSubscribed(true);
        setEmail(""); // Clear the input
      } else {
        setError("Failed to subscribe. Please try again.");
      }
    } catch (error) {
      setError("Failed to subscribe. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Content (2/3) */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-start">
        <SectionContainer>
          <IntroTitle>Numaira AI</IntroTitle>
          <IntroDescr>Create any document with AI</IntroDescr>
          <IntroButtonContainer>
            {/* <Button text={"Request A Demo"} variant={ButtonVariant.Primary} onClick={() => {console.log("hi")}}></Button>
            <Button text={"Solution"} variant={ButtonVariant.Secondary} onClick={() => {console.log("hi")}}></Button> */}
          </IntroButtonContainer>
          
        </SectionContainer>

        <EmailFormContainer>
          <EmailFormDescription>Stay in the loop</EmailFormDescription>
          <EmailFormWrapper>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubscribed}
            />
            <SubscribeButton onClick={handleSubscribe} disabled={isSubscribed || isLoading}>
              {isLoading ? "Subscribing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
            </SubscribeButton>
          </EmailFormWrapper>
          {error && <ErrorText>{error}</ErrorText>}
          {isSubscribed && <SuccessText>Thank you for subscribing! You&apos;ll receive product updates.</SuccessText>}
          {!isSubscribed && <PrivacyText>Your email will only be used for product updates.</PrivacyText>}
        </EmailFormContainer>

                  <CyberportBadgeContainer>
            <CyberportBadgeText>Backed by</CyberportBadgeText>
            <CyberportLogoContainer>
              <CyberportLogo />
            </CyberportLogoContainer>
          </CyberportBadgeContainer>
      </div>

      {/* Right side - Image (1/3) */}
      <div className="w-full md:w-1/3 h-64 md:h-auto relative">
        <Image 
          src={landingImage} 
          alt="Numaira Landing" 
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      
      {/* Hidden sections */}
      {/* <MemberCompaniesContainer>
        <MemberCompaniesText>Developed by top performers, for top performers</MemberCompaniesText>
        <Marquee Index={0} TotalItems={7}/>
      </MemberCompaniesContainer> */}

      {/* <SectionContainer style={{ marginTop: "60px", marginBottom: "60px" }}>
        <SectionHeader svg={<Pages/>} title={"Featured News"}></SectionHeader>
        <NewsGrid>
          <NewsCard>
            <NewsCategory>Funding</NewsCategory>
            <NewsTitle>Numaira Receives $100K Seed Funding from Cyberport</NewsTitle>
            <NewsDate>December 15, 2024</NewsDate>
            <NewsExcerpt>Finance automation startup Numaira secures significant seed funding to accelerate product development and market expansion.</NewsExcerpt>
            <ReadMoreButton onClick={() => router.push("/media")}>Read More</ReadMoreButton>
          </NewsCard>
          
          <NewsCard>
            <NewsCategory>Product Launch</NewsCategory>
            <NewsTitle>Numaira Announces March 2025 Product Launch</NewsTitle>
            <NewsDate>January 8, 2025</NewsDate>
            <NewsExcerpt>The highly anticipated finance automation platform will be available to early adopters and enterprise clients starting March 2025.</NewsExcerpt>
            <ReadMoreButton onClick={() => router.push("/media")}>Read More</ReadMoreButton>
          </NewsCard>
          
          <NewsCard>
            <NewsCategory>Partnerships</NewsCategory>
            <NewsTitle>Partnership with Leading Financial Institutions Drives Innovation</NewsTitle>
            <NewsDate>January 20, 2025</NewsDate>
            <NewsExcerpt>Numaira collaborates with top-tier banks and investment firms to refine AI automation solutions for financial document processing.</NewsExcerpt>
            <ReadMoreButton onClick={() => router.push("/media")}>Read More</ReadMoreButton>
          </NewsCard>
        </NewsGrid>
      </SectionContainer> */}

      {/* <SectionContainer style={{ marginTop: "60px" }}>
        <SectionHeader svg={<Sprout/>} title={"Product Offerings"}></SectionHeader>
        <ProductGrid>
          <ProductCard>
            <ProductStatus>Available Now</ProductStatus>
            <ProductTitle>SyncSpace</ProductTitle>
            <ProductFeatures>
              <li>Real-time collaboration</li>
              <li>Version control & history</li>
              <li>Data synchronization</li>
              <li>Team workspace management</li>
            </ProductFeatures>
            <LearnMoreButton onClick={() => router.push("/demo")}>Learn More</LearnMoreButton>
          </ProductCard>
          
          <ProductCard>
            <ProductStatus>Coming Soon</ProductStatus>
            <ProductTitle>AssemblyDoc</ProductTitle>
            <ProductFeatures>
              <li>AI-powered document generation</li>
              <li>Multi-source data integration</li>
              <li>Template customization</li>
              <li>Automated compliance checking</li>
            </ProductFeatures>
            <LearnMoreButton onClick={() => router.push("/demo")}>Learn More</LearnMoreButton>
          </ProductCard>
          
          <ProductCard>
            <ProductStatus>Enterprise</ProductStatus>
            <ProductTitle>Customized Solutions</ProductTitle>
            <ProductFeatures>
              <li>Custom workflow automation</li>
              <li>Specialized integrations</li>
              <li>Dedicated support team</li>
              <li>Enterprise-grade security</li>
            </ProductFeatures>
            <LearnMoreButton onClick={() => router.push("/contact")}>Get Started</LearnMoreButton>
          </ProductCard>
        </ProductGrid>
      </SectionContainer> */}

      {/* <SectionContainer>
        <SectionHeader svg={<SparkleDoc/>} title={"Solution Workflow"}></SectionHeader>
        <Descr>Scale and automate your data alignment needs using AI</Descr>
        <ImgContainer>
          <Image src={WorkflowPng} alt="Workflow Image" />
        </ImgContainer>
      </SectionContainer> */}

      {/* <SectionContainer>
        <SectionHeader svg={<Briefcase/>} title={"Use Cases"}></SectionHeader>
        <Descr>Numaira facilitates seamless data entry no matter your industry</Descr>
      </SectionContainer> */}

      {/* <SectionContainer>
        <SectionHeader svg={<Sprout/>} title={"Funding"}></SectionHeader>
        <Descr style={{ marginBottom: "60px"}}><BlackText>Numaira received</BlackText> $100,000 HKD ($13K USD) in seed funding <BlackText>from <Underline>Cyberport</Underline>, a cutting-edge technology incubator.</BlackText></Descr>
        <CyberportContainer>
          <CyberportLogo/>
        </CyberportContainer>
      </SectionContainer> */}

      {/* <SectionContainer>
        <SectionHeader svg={<Help/>} title={"FAQs"}></SectionHeader>
        <Descr>Frequently Asked Questions</Descr>
        <Accordion/>
        <EmailText><BlackText>Don't see your question(s) above? Get answers by sending a message to </BlackText><Underline><a href="mailto:numairaai@proton.me">numairaai@proton.me</a></Underline></EmailText>
      </SectionContainer> */}

      {/* <SectionContainer>
        <SectionHeader svg={<Book/>} title={"Try Numaira"}></SectionHeader>
        <TryDescr>Numaira is ready for testing. Book a demo today to start automating the future!</TryDescr>
        <ButtonContainer>
          <Button text={"Request A Demo"} variant={ButtonVariant.Primary} onClick={() => router.push("/demo")}
                className={pathname === "/demo" ? "active" : ""}></Button>
        </ButtonContainer>
      </SectionContainer> */}
    </div>
  );
}
