"use client";

import Image from "next/image";
import styled from "styled-components";
import LogoSVG from "./asset/logo.svg";
import landingImage from "./asset/landing.png";
import Colors from "./colors";
import Footer from "./components/footer";
import TopNav from "./components/topNav";
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
        <div className="mb-5 font-semibold" >Introducing Numaira</div>

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
      </div>
     
    </main>
  );
}



