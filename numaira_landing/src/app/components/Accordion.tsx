import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import Minus from "../asset/Minus.svg";
import Plus from "../asset/Plus.svg";
import MinusPng from "../asset/Minus.png";
import PlusPng from "../asset/Plus.png";
import colors from "../colors";

const Accordion = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setIsActive(isActive === index ? null : index);
  };

  const accordionData = [
    {
        header: "Lorem ipsum dolor sit amet consectetur Vulputate sed?",
        content:
            "Lorem ipsum dolor sit amet consectetur. Risus ultricies ultrices tempor ligula nunc ipsum. Mauris dis urna aliquam suspendisse leo vulputate tincidunt. Amet id in in duis quam consectetur urna tempor.",
    },
    {
        header: "Lorem ipsum dolor sit amet consectetur Vulputate sed?",
        content:
            "Lorem ipsum dolor sit amet consectetur. Risus ultricies ultrices tempor ligula nunc ipsum. Mauris dis urna aliquam suspendisse leo vulputate tincidunt. Amet id in in duis quam consectetur urna tempor.",
    },
    {
        header: "Lorem ipsum dolor sit amet consectetur Vulputate sed?",
        content:
            "Lorem ipsum dolor sit amet consectetur. Risus ultricies ultrices tempor ligula nunc ipsum. Mauris dis urna aliquam suspendisse leo vulputate tincidunt. Amet id in in duis quam consectetur urna tempor.",
    },
    {
        header: "Lorem ipsum dolor sit amet consectetur Vulputate sed?",
        content:
            "Lorem ipsum dolor sit amet consectetur. Risus ultricies ultrices tempor ligula nunc ipsum. Mauris dis urna aliquam suspendisse leo vulputate tincidunt. Amet id in in duis quam consectetur urna tempor.",
    },
    {
        header: "Lorem ipsum dolor sit amet consectetur Vulputate sed?",
        content:
            "Lorem ipsum dolor sit amet consectetur. Risus ultricies ultrices tempor ligula nunc ipsum. Mauris dis urna aliquam suspendisse leo vulputate tincidunt. Amet id in in duis quam consectetur urna tempor.",
    }
  ];

  const Container = styled.div`
    margin: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const AccordionContainer = styled.div`
    display: flex;
    flex-direction: column;
    
  `;

  const AccordionHeader = styled.button<{ isActive: boolean }>`
    background-color: ${colors.neutral50};
    cursor: pointer;
    text-align: left;
    display: flex;
    padding: 24px;
    padding-bottom: ${({ isActive }) => (isActive ? "12px" : "24px")};
    align-items: center;
    border: none;
    transition: padding-bottom 0.3s ease;
    border-radius: ${({ isActive }) => (isActive ? "8px 8px 0 0" : "8px")};
  `;

  const PlusMinus = styled.div`
    margin: 10px;
    width: 12px;
    height: 12px;

    @media (max-width: 393px) {
      width: 24px;
      height: 24px;
    }
  `;

  const HeaderText = styled.p`
    color: ${colors.brand1000};
    font-size: 24px;
    font-weight: 600;
    margin-left: 12px;
    text-align: left;

    @media (max-width: 393px) {
      font-size: 18px;
      font-weight: 700;
    }
  `;

  const Panel = styled.div<{ isVisible: boolean }>`
    background-color: ${colors.neutral50};
    display: ${({ isVisible }) => (isVisible ? "block" : "none")};
    overflow: hidden;
    transition: max-height 0.6s ease;
    border-radius: 0 0 8px 8px;
  `;

  const PanelText = styled.p`
    color: ${colors.neutral700};
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    padding: 0px 24px 24px 68px;
  `;

  return (
    <Container>
      {accordionData.map((item, index) => (
        <AccordionContainer key={index}>
          <AccordionHeader
            onClick={() => toggleAccordion(index)}
            isActive={isActive === index}
          >
            {/* <PlusMinus as={isActive === index ? Minus : Plus}></PlusMinus> */}
            <PlusMinus>
              <Image
                src={isActive === index ? MinusPng : PlusPng}
                alt={isActive === index ? "Minus icon" : "Plus icon"}
              />
            </PlusMinus>
            <HeaderText>{item.header}</HeaderText>
          </AccordionHeader>
          <Panel isVisible={isActive === index}>
            <PanelText>{item.content}</PanelText>
          </Panel>
        </AccordionContainer>
      ))}
    </Container>
  );
};

export default Accordion;