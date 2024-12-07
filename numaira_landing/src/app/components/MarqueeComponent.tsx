import React, { useState } from "react";
import styled from "styled-components";
import Minus from "../asset/Minus.svg";
import Plus from "../asset/Plus.svg";
import colors from "../colors";

import GoogleLogo from "../asset/GoogleLogo.svg";
import MillimanLogo from "../asset/MillimanLogo.svg";
import BainLogo from "../asset/BainCompanyLogo.svg";
import MoodysLogo from "../asset/MoodysLogo.svg";
import TiktokLogo from "../asset/tiktokLogo.svg";
import WestMonroeLogo from "../asset/WestMonroeLogo.svg";
import AlibabaLogo from "../asset/AlibabaLogo.svg";

import { keyframes } from "styled-components";

interface MarqueeItemProps {
    Index: number;
    TotalItems: number;
}

const Go = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  width: 100%;
  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
`;

const MarqueeTrack = styled.div`
  display: flex;
  animation: ${Go} linear var(--Marquee-duration, 16s) infinite;
`;

const MarqueeItem = styled.img<MarqueeItemProps>`
    flex-shrink: 0;
    margin-inline: 40px;
    animation-delay: ${({ Index, TotalItems }) =>
    `calc(${Index} * (var(--Marquee-duration, 16s) / ${TotalItems}))`};
`;

const Marquee = (props: MarqueeItemProps) => {
    const logos = [
        GoogleLogo,
        MillimanLogo,
        BainLogo,
        MoodysLogo,
        TiktokLogo,
        WestMonroeLogo,
        AlibabaLogo,
      ];
      
    return (
        <MarqueeContainer>
            <MarqueeTrack>
                {logos.map((Logo, index) => (
                    <MarqueeItem
                        as={Logo}
                        index={index}
                        totalItems={logos.length}
                        key={index}
                    />
                ))}
            </MarqueeTrack>
        </MarqueeContainer>
    );

};

export default Marquee;