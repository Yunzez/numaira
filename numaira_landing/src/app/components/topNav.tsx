"use client";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import Colors from "../colors";
import formats from "../formats";
import UpdateBanner from "./UpdateBanner";
import LogoSVG from "../asset/logo.svg";
import MenuSVG from "../asset/menu.svg";
import CloseSVG from "../asset/close.svg";
import { useState, useEffect } from "react";
import { StyledButton } from "./styled/StyledButton";

// Styled full-screen mobile menu
const MobileMenu = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  top: 8vh;
  right: 0;
  height: 92vh;
  width: 100vw;
  background-color: white;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  transform: ${({ menuOpen }) =>
    menuOpen ? "translateX(0)" : "translateX(100%)"};
`;

// Blurry Navbar
const Navbar = styled.div`
  height: 8vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Optional border */
`;

const TopNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Check if the component has mounted
  useEffect(() => {
    setIsMounted(true); // Once mounted, set isMounted to true
  }, []);

  if (!isMounted) return null; // Don't render anything until hydration

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <section className="hidden md:block">
        <UpdateBanner message="🚀 Numaira Version 1.0 Launches In March 2025" />
        <div
          className="flex justify-between gap-5 px-10 items-center"
          style={{ width: "100%" }}
        >
          <div className="flex justify-center gap-2 items-center">
            <LogoSVG width={40} height={40} fill={Colors.brand500} />
            <div
              className="font-bold cursor-pointer"
              style={{ color: Colors.brand500, fontSize: formats.textXL }}
              onClick={() => router.push("/")}
            >
              Numaira
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <div>
              <div
                onClick={() => router.push("/")}
                className={pathname === "/" ? "font-bold" : ""}
                style={{
                  cursor: "pointer",
                }}
              >
                Product
              </div>
            </div>
            <div>
              <div
                onClick={() => router.push("/about")}
                className={pathname === "/about" ? "font-bold" : ""}
                style={{
                  cursor: "pointer",
                }}
              >
                About
              </div>
            </div>
            <div>
              <div
                onClick={() => router.push("/pricing")}
                className={pathname === "/pricing" ? "font-bold" : ""}
                style={{
                  cursor: "pointer",
                }}
              >
                Pricing
              </div>
            </div>
            <div>
              <div
                onClick={() => router.push("/contact")}
                className={pathname === "/contact" ? "font-bold" : ""}
                style={{
                  cursor: "pointer",
                }}
              >
                Contact
              </div>
            </div>
            <div>
              <StyledButton
                onClick={() => router.push("/demo")}
                className={pathname === "/demo" ? "active" : ""}
              >
                Request a Demo
              </StyledButton>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className="block md:hidden">
        <div className="flex justify-between gap-2 items-center p-4">
          <div className="flex justify-center gap-2 items-center">
            <LogoSVG width={40} height={40} fill={Colors.brand500} />
            <div className="font-bold" style={{ color: Colors.brand500 }}>
              Numaira
            </div>
          </div>
          {/* Menu/Close Button */}
          <div
            className="relative flex items-center justify-center w-10 h-10"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuSVG
              width={40}
              height={40}
              fill={Colors.brand500}
              className={`cursor-pointer absolute transition-all duration-500 ${
                menuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            />
            <CloseSVG
              width={40}
              height={40}
              fill={Colors.brand500}
              className={`cursor-pointer absolute transition-all duration-500 ${
                menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            />
          </div>
        </div>

        {/* Sliding Mobile Menu */}
        <MobileMenu menuOpen={menuOpen}>
          <div className="flex flex-col gap-8 items-center">
            <div
              onClick={() => {
                router.push("/");
                setMenuOpen(false);
              }}
              className={pathname === "/" ? "font-bold text-lg" : "text-lg"}
              style={{ cursor: "pointer" }}
            >
              Product
            </div>
            <div
              onClick={() => {
                router.push("/about");
                setMenuOpen(false);
              }}
              className={
                pathname === "/about" ? "font-bold text-lg" : "text-lg"
              }
              style={{ cursor: "pointer" }}
            >
              About
            </div>
            <div
              onClick={() => {
                router.push("/pricing");
                setMenuOpen(false);
              }}
              className={
                pathname === "/pricing" ? "font-bold text-lg" : "text-lg"
              }
              style={{ cursor: "pointer" }}
            >
              Pricing
            </div>
            <div
              onClick={() => {
                router.push("/contact");
                setMenuOpen(false);
              }}
              className={
                pathname === "/contact" ? "font-bold text-lg" : "text-lg"
              }
              style={{ cursor: "pointer" }}
            >
              Join Us
            </div>
          </div>
        </MobileMenu>
      </section>
    </Navbar>
  );
};

export default TopNav;
