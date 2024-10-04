"use client";
import React from "react";
import { Colors } from "../colors";
import { formats } from "../formats";
import styled from "styled-components";
import LogoSVG from "../asset/logo.svg";
import LinkedInSVG from "../asset/linkedin.svg";
import EmailSVG from "../asset/email.svg";
import { StyledButtonWhite } from "./styled/StyledButtonWhite";
import { useRouter, usePathname } from "next/navigation";

const FooterBoldedFont = styled.div`
  font-weight: 600;
  color: ${Colors.neutral1000};
  text-align: left;
  cursor: pointer;
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
          <div className="flex justify-between items-center gap-20 h-[320px] px-10">
            <div
              className="flex flex-col items-start"
              style={{ maxWidth: "800px" }}
            >
              <div
                className="flex flex-col justify-start items-start"
                style={{ gap: "20px" }}
              >
                <div className="flex flex-col gap-1 justify-start">
                  <div className="flex justify-start items-center gap-2">
                    <LogoSVG width={40} height={40} fill={Colors.brand500} />
                    <div
                      className="font-bold"
                      style={{
                        color: Colors.brand500,
                        fontSize: formats.textXL,
                      }}
                    >
                      Numaira
                    </div>
                  </div>
                  <div
                    className="text-left"
                    style={{
                      color: Colors.neutral700,
                      fontWeight: 500,
                      fontSize: formats.textXS,
                    }}
                  >
                    Automating finance one file at a time
                  </div>
                </div>
                <div className="items-start">
                  <StyledButtonWhite
                    onClick={() => router.push("/dashboard")}
                    className={pathname === "/contact" ? "active" : ""}
                  >
                    Request A Demo
                  </StyledButtonWhite>
                </div>
              </div>
            </div>
            <div className="flex justify-start" style={{ gap: "72px" }}>
              <FooterCoreLayout>
                <FooterLessBolderFont>
                  <h5>product</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>Features</FooterBoldedFont>
                <FooterBoldedFont>Use Cases</FooterBoldedFont>
                <FooterBoldedFont>Pricing</FooterBoldedFont>
                <FooterBoldedFont>FAQs</FooterBoldedFont>
              </FooterCoreLayout>
              <FooterCoreLayout>
                <FooterLessBolderFont>
                  <h5>company</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>About</FooterBoldedFont>
                <FooterBoldedFont>Contact</FooterBoldedFont>
                <FooterBoldedFont>Join Us</FooterBoldedFont>
              </FooterCoreLayout>
              <FooterCoreLayout>
                <FooterLessBolderFont>
                  <h5>Legal</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>Privacy</FooterBoldedFont>
                <FooterBoldedFont>Cookies</FooterBoldedFont>
                <FooterBoldedFont>Terms</FooterBoldedFont>
              </FooterCoreLayout>
            </div>
          </div>
          <div
            className="flex justify-between items-center h-[80px] px-20"
            style={{
              width: "100%",
              color: Colors.neutral700,
              backgroundColor: Colors.neutral100,
            }}
          >
            <a style={{ fontSize: formats.textLG, fontWeight: 400 }}>
              © 2024 Numaira. All rights are reserved
            </a>
            <div
              className="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
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
          <div className="flex flex-col justify-center items-start gap-20 px-6">
            <div
              className="flex flex-col items-start"
              style={{ width: "auto" }}
            >
              <div
                className="flex flex-col justify-start items-start"
                style={{ gap: "20px" }}
              >
                <div className="flex flex-col gap-1 justify-start">
                  <div className="flex justify-start items-center gap-2">
                    <LogoSVG width={40} height={40} fill={Colors.brand500} />
                    <div
                      className="font-bold"
                      style={{
                        color: Colors.brand500,
                        fontSize: formats.textXL,
                      }}
                    >
                      Numaira
                    </div>
                  </div>
                  <div
                    className="text-left"
                    style={{
                      color: Colors.neutral700,
                      fontWeight: 500,
                      fontSize: formats.textXS,
                    }}
                  >
                    Automating finance one file at a time
                  </div>
                </div>
                <div className="items-start">
                  <StyledButtonWhite
                    onClick={() => router.push("/dashboard")}
                    className={pathname === "/contact" ? "active" : ""}
                  >
                    Request A Demo
                  </StyledButtonWhite>
                </div>
              </div>
            </div>
            <div
              className="grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gridTemplateRows: "repeat(2, auto)",
                gap: "72px",
                // width: "100%",
              }}
            >
              <FooterCoreLayout style={{ gridColumn: "1", gridRow: 1 }}>
                <FooterLessBolderFont>
                  <h5>product</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>Features</FooterBoldedFont>
                <FooterBoldedFont>Use Cases</FooterBoldedFont>
                <FooterBoldedFont>Pricing</FooterBoldedFont>
                <FooterBoldedFont>FAQs</FooterBoldedFont>
              </FooterCoreLayout>
              <FooterCoreLayout style={{ gridColumn: "2", gridRow: 1 }}>
                <FooterLessBolderFont>
                  <h5>company</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>About</FooterBoldedFont>
                <FooterBoldedFont>Contact</FooterBoldedFont>
                <FooterBoldedFont>Join Us</FooterBoldedFont>
              </FooterCoreLayout>
              <FooterCoreLayout style={{ gridColumn: "1", gridRow: 2 }}>
                <FooterLessBolderFont>
                  <h5>Legal</h5>
                </FooterLessBolderFont>
                <FooterBoldedFont>Privacy</FooterBoldedFont>
                <FooterBoldedFont>Cookies</FooterBoldedFont>
                <FooterBoldedFont>Terms</FooterBoldedFont>
              </FooterCoreLayout>
            </div>
          </div>
          <div
            className="flex flex-col items-start px-6"
            style={{
              width: "auto",
              color: Colors.neutral700,
              backgroundColor: Colors.neutral100,
            }}
          >
            <div
              className="flex justify-center items-center h-[80px] "
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                gap: 20,
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
              style={{ fontSize: formats.textLG, fontWeight: 400 }}
            >
              © 2024 Numaira. All rights are reserved
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
