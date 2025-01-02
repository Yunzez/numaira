import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import colors from "../colors";
import Quotation from "../asset/quotation.svg";
import CMBILogoPng from "../asset/logo_cmbi.png";
import PWCLogoPng from "../asset/PWCLogo.png";

const CarouselWrapper = styled.div`
    display: none;

    @media (max-width: 393px) {
        display: block;
    }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Slides = styled.div<{ activeIndex: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.activeIndex * -100}%);
  width: 100%;
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  padding: 32px;
  background-color: ${colors.neutral50};
  border-radius: 12px;
  flex-direction: column;
`;

const QuoteText = styled.p`
  color: ${colors.neutral1000};
  font-size: 24px;
  line-height: 32px;
  font-weight: bold;
  text-align: left;
  margin: 20px 0 40px 0;
`;

const SourceText = styled.p`
  color: ${colors.brand500};
  font-size: 16px;
  line-height: 24px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 8px;
`;

const LogoContainer = styled.div`
  width: 100px;
  // margin-top: auto;
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#0066FF" : "#E2EEFF")};
  margin: 0 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #000;
  }
`;

import { useEffect } from "react";

const QuoteCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;

    if (isSwipe) {
      if (distance > 0) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      } else {
        setActiveIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
      }
    }

    setTouchStart(null);
    setTouchEnd(null);

    // Reset the interval
    if (intervalId) {
      clearInterval(intervalId);
    }
    const newIntervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    const newIntervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);
    setIntervalId(newIntervalId);

    return () => clearInterval(newIntervalId);
  }, []);

  return (
    <CarouselWrapper
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselContainer>
        <Slides activeIndex={activeIndex}>
          {/* Slide 1 */}
          <Slide>
            <Quotation style={{ width: "52px", height: "52px" }} />
            <QuoteText>
              The most time-consuming part is finding and picking data from sources.
            </QuoteText>
            <SourceText>Equity Researcher</SourceText>
            {/*<LogoContainer>
              <Image src={CMBILogoPng} alt="CMBI Logo" width={100} height={50} />
            </LogoContainer>*/}
          </Slide>

          {/* Slide 2 */}
          <Slide>
            <Quotation style={{ width: "52px", height: "52px" }} />
            <QuoteText>
              Updating numbers is a frequent demand involving repetitive work.
            </QuoteText>
            <SourceText>Investment Banker</SourceText>
            {/*<LogoContainer>
              <Image src={CMBILogoPng} alt="CMBI Logo" width={100} height={50} />
            </LogoContainer>*/}
          </Slide>

          {/* Slide 3 */}
          <Slide>
            <Quotation style={{ width: "52px", height: "52px" }} />
            <QuoteText>
              Auditing is constantly short staffed with tight deadlines and repetitive work.
            </QuoteText>
            <SourceText>ESG Auditor</SourceText>
            {/*<LogoContainer>
              <Image src={PWCLogoPng} alt="PWC Logo" width={100} height={50} />
            </LogoContainer>*/}
          </Slide>
        </Slides>
      </CarouselContainer>

      {/* Dots */}
      <Dots>
        {[0, 1, 2].map((index) => (
          <Dot
            key={index}
            active={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </Dots>
    </CarouselWrapper>
  );
};

export default QuoteCarousel;
