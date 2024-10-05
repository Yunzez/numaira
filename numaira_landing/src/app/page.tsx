"use client";

import Image from "next/image";
import styled from "styled-components";
import LogoSVG from "./asset/logo.svg";
import landingImage from "./asset/landing.png";
import Colors from "./colors";
import Footer from "./components/footer";
// import TopNav from "./components/topNav";
const Header = styled.div`
  color: ${Colors.brand500};
  maxwidth: 600px;
  font-size: 2em;
  font-weight: 650;
  &:hover {
    color: #0066ff;
  }
`;

export default function Home() {
  return (
    <div className=" flex flex-col items-center justify-start text-center w-100 h-screen">
      <div style={{ maxHeight: "350px", maxWidth: "600px" }}>
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
      </div>
    </div>
  );
}
