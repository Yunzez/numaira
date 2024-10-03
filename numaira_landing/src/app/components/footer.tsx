"use client";
import React from "react";
import { Colors } from "../colors";
import styled from "styled-components";

const FooterBoldedFont = styled.div`
    font-weight: bold;
    text-decoration: underline;
`
const Footer = () => {
  return (
    <div>
        {/* your code goes here qiming  */}
        <FooterBoldedFont>
            <h1>© 2024 Numaira</h1>
        </FooterBoldedFont>
      <div
        className="flex justify-around items-center h-16 "
        style={{
          width: "100%",
          color: Colors.neutral700,
          backgroundColor: Colors.neutral100,
        }}
      >
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
    </div>
  );
};

export default Footer;
