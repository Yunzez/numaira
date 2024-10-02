'use client'
import React, { ReactNode } from "react";
import TopNav from "./components/topNav";
import Footer from "./components/footer";

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <main
      className="min-h-screen min-w-screen flex flex-col items-center justify-start text-center p-5"
      style={{ overflowY: "hidden" }}
    >
      <div>
        <TopNav />
        {children}
        <Footer />
      </div>
     
    </main>
  );
};

export default CustomLayout;
