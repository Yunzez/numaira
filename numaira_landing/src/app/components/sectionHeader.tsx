import React from "react";
import colors from "../colors";
import formats from "../formats";
import styled from "styled-components";

type ButtonTypes = {
    svg: React.ReactNode,
    title: string,
    [key: string]: any;
}

const SectionHeader = (props: ButtonTypes) => {
    const HeaderContainer = styled.div`
      display: flex;
      justify-content: center;
    `;

    const Svg = styled.div`
      display: flex;
      width: 24px;
      height: 24px;
      margin: auto 8px auto 0;

      @media (max-width: 393px) {
        // width: 16px;
        // height: 16px;
      }
    `;

    const StyledHeader = styled.div`
      background-color: ${colors.neutral};
      border: 1px solid ${colors.neutral100};
      border-radius: 100px;
      font-size: ${formats.textXL};
      font-weight: 600;
      padding: 8px 24px;
      display: flex;

      @media (max-width: 393px) {
        font-size: ${formats.textSM};
      }
    `;

  return (
    <HeaderContainer>
      <StyledHeader>
        <Svg>{props.svg}</Svg>
        {props.title}
      </StyledHeader>
    </HeaderContainer>
  );
};

export default SectionHeader;