"use client";

import Image from "next/image";
import styled from "styled-components";
import LogoSVG from "./asset/logo.svg";
import landingImage from "./asset/landing.png";
const Colors = {
  neutral: "#FFFFFF",
  neutral100: "#F6F6F6",
  neutral200: "#EDEDED",
  neutral700: "#767676",
  neutral1000: "#212121",
  primary: "#0066FF",
  neutral_dark: "#1E1E1E",
  neutral100_dark: "#2C2C2C",
  neutual200_dark: "#444444",
  neutral700_dark: "#ADADAD",
  neutral1000_dark: "#FFFFFF",
  primary_dark: "#4E95FF",

  brand: "#E2EEFF",
  brand200: "#7FB2FF",
  brand500: "#0066FF",
  brand800: "#003589",
  brand1000: "#001331",
  brand0_dark: "#002355",
  brand200_dark: "#A1C7FF",
  brand500_dark: "#5598FD",
  brand800_dark: "#7FB2FF",
  brand1000_dark: "#E2EEFF",
};
const Header = styled.div`
  color: ${Colors.brand500};
  width: 600px;
  font-size: 3vw;
  font-weight: 650;
  &:hover {
    color: #0066ff;
  }
`;

export default function Home() {
  return (
    <main
      className="min-h-screen min-w-screen flex flex-col items-center justify-start text-center p-5"
      style={{ overflowY: "hidden" }}
    >
      <div style={{ maxHeight: "350px", maxWidth: "600px" }}>
        <div className="flex justify-center">
          <LogoSVG width={80} height={80} />
        </div>
        <div className="mb-5 font-semibold" >Numaira</div>

        <Header>Automating Finance One File At A Time</Header>
        <div style={{ color: Colors.brand1000, fontSize: '30px', fontWeight: '500'}} className="p-2">
          Launching in October 2024
        </div>

        <div
          className="flex justify-center mb-10"
          style={{
            color: Colors.neutral700,
            display: "flex",
            justifyContent: "center",
          }}
        >
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", border: `${"1px bold " + Colors.brand500 }`, borderRadius: '8px', width: "80%"}}>
        <Image
          src={landingImage}
          alt="Picture of the author"
          className="pt-4"
          style={{ width: "auto", maxHeight: "55vh !important"}} // ensures the image is responsive
        />
      </div>
      <div style={{position: 'absolute', bottom: 0, left: 0}}>
      <Footer/>
      </div>
     
    </main>
  );
}


const Footer = () => {
  return (
    <div className="flex justify-around items-center h-16" style={{width: '100vw', color: Colors.neutral700}}>
      <a>© 2024 Numaira</a>
      <div
            className="flex justify-center items-center"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href="https://www.linkedin.com/company/104262671"
              className="px-1 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <div className="px-2">·</div>
            <a href="mailto:numairaai@proton.me" className="px-1 underline">
              numairaai@proton.me
            </a>
          </div>
    </div>
  );
}
