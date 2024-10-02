"use client";
import React, { ReactNode } from "react";
import TopNav from "./components/topNav";
import Footer from "./components/footer";
import { GlobalProvider } from "./context/GlobalProviders";

interface CustomLayoutProps {
  children: ReactNode;
}

const CustomLayout: React.FC<CustomLayoutProps> = ({ children }) => {
  return (
    <main
      className="min-h-screen min-w-screen flex flex-col items-center justify-start text-center"
      style={{ overflowY: "scroll" }}
    >
      <GlobalProvider>
        <div>
          <TopNav />
          {children}
          <Footer />
        </div>
      </GlobalProvider>
    </main>
  );
};

export default CustomLayout;