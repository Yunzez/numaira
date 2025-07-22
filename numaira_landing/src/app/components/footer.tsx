"use client";
import React from "react";
import { Colors } from "../colors";
import { Formats } from "../formats";
import styled from "styled-components";
import LinkedInSVG from "../asset/linkedin.svg";
import EmailSVG from "../asset/email.svg";
import { useRouter, usePathname } from "next/navigation";

const FooterBoldedFont = styled.div`
  font-weight: 600;
  color: ${Colors.neutral1000};
  text-align: left;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${Colors.brand500};
  }
`;

const FooterLessBolderFont = styled.div`
font-size: format.textXS  
font-weight: 600;
  color: ${Colors.neutral700};
  text-align: left;
`;

const FooterCoreLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: left;
  justify-content: flex-start;
`;

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div>
      {/* Desktop Navigation */}
      <section className="hidden sm:block">
        <div className="flex flex-col gap-16">

          <div
            className="flex justify-between items-center h-[80px] px-20"
            style={{
              width: "100%",
              color: Colors.neutral700,
              backgroundColor: Colors.neutral100,
            }}
          >
            <a style={{ fontSize: Formats.textLG, fontWeight: 400 }}>
              © 2025 Numaira. All rights are reserved
            </a>
            <div
              className="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
                maxHeight: "40px",
              }}
            >
              <a
                href="https://www.linkedin.com/company/104262671"
                className="px-1 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInSVG
                  length={20}
                  width={20}
                  alt="linkedin-icon"
                  fill={Colors.neutral700}
                />
              </a>
              {/* <div className="px-2">·</div> */}
              <a href="mailto:numairaai@proton.me" className="px-1 underline">
                <EmailSVG
                  length={20}
                  width={20}
                  alt="email-icon"
                  fill={Colors.neutral700}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Mobile Navigation */}
      <section className="block sm:hidden">
        <div className="flex flex-col gap-16">

          <div
            className="flex flex-col items-start px-6"
            style={{
              width: "auto",
              height: "auto",
              color: Colors.neutral700,
              backgroundColor: Colors.neutral100,
            }}
          >
            <div
              className="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: 20,
                maxHeight: "80px",
              }}
            >
              <a
                href="https://www.linkedin.com/company/104262671"
                className="px-1 underline "
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInSVG
                  length={20}
                  width={20}
                  alt="linkedin-icon"
                  fill={Colors.neutral700}
                />
              </a>
              {/* <div className="px-2">·</div> */}
              <a href="mailto:numairaai@proton.me" className="px-1 underline">
                <EmailSVG
                  length={20}
                  width={20}
                  alt="email-icon"
                  fill={Colors.neutral700}
                />
              </a>
            </div>
            <a
              className="mb-3"
              style={{ fontSize: Formats.textLG, fontWeight: 400 }}
            >
              © 2025 Numaira. All rights are reserved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
