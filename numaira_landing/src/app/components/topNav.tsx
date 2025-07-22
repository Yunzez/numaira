"use client";
import { useRouter, usePathname } from "next/navigation";
import styled from "styled-components";
import Colors from "../colors";
import formats from "../formats";

import LogoSVG from "../asset/logo.svg";
import MenuSVG from "../asset/menu.svg";
import CloseSVG from "../asset/close.svg";
import { useState, useEffect } from "react";
import { StyledButton } from "./styled/StyledButton";

// Styled full-screen mobile menu
const MobileMenu = styled.div<{ menuOpen: boolean }>`
  position: fixed;
  top: 12vh;
  right: 0;
  height: 88vh;
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

// Enhanced Navbar with scroll effects
const Navbar = styled.div<{ isScrolled: boolean }>`
  height: 12vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  background-color: ${({ isScrolled }) => 
    isScrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0)"};
  border-bottom: ${({ isScrolled }) => 
    isScrolled ? "1px solid rgba(255, 255, 255, 0.2)" : "1px solid transparent"};
  transition: all 0.3s ease-in-out;
  padding: 20px 0;
`;

const TopNav: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Check if the component has mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMounted) return null; // Don't render anything until hydration

  return (
    <Navbar isScrolled={isScrolled}>
      {/* Desktop Navigation */}
      <section className="hidden md:block h-full">
        <div
          className="flex justify-between gap-5 px-12 items-center h-full"
          style={{ width: "100%" }}
        >
          <div 
            className="flex justify-center gap-3 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <LogoSVG width={50} height={50} fill={Colors.brand500} />
            <div
              className="font-bold"
              style={{ color: Colors.brand500, fontSize: formats.displaySM }}
            >
              Numaira
            </div>
          </div>
          {/* Removed Home navigation item */}
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className="block md:hidden h-full">
        <div className="flex justify-between gap-2 items-center px-6 h-full">
          <div 
            className="flex justify-center gap-3 items-center cursor-pointer"
            onClick={() => router.push("/")}
          >
            <LogoSVG width={45} height={45} fill={Colors.brand500} />
            <div 
              className="font-bold" 
              style={{ color: Colors.brand500, fontSize: formats.textXL || "20px" }}
            >
              Numaira
            </div>
          </div>
          {/* Menu/Close Button */}
          <div
            className="relative flex items-center justify-center w-12 h-12"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuSVG
              width={45}
              height={45}
              fill={Colors.brand500}
              className={`cursor-pointer absolute transition-all duration-500 ${
                menuOpen ? "opacity-0 scale-50" : "opacity-100 scale-100"
              }`}
              style={{ transitionTimingFunction: "ease-in-out" }}
            />
            <CloseSVG
              width={45}
              height={45}
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
          {/* Removed Home navigation item from mobile menu as well */}
        </MobileMenu>
      </section>
    </Navbar>
  );
};

export default TopNav;
