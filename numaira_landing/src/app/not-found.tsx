"use client";
import React from "react";
import Colors from "./colors";
import { StyledButton } from "./components/styled/StyledButton";
import { useRouter, usePathname } from "next/navigation";
const Custom404 = () => {
  const router = useRouter();
  return (
    <div style={{ height: "92vh" }} className="flex flex-col justify-center">
      <div>
        <div style={{ color: Colors.neutral300, fontSize: "4.5em" }}>404</div>
        <div className="font-bold  mb-5" style={{ fontSize: "2em" }}>
          Oops, page not found
        </div>
        <StyledButton
          onClick={() => {
            router.push("/");
          }}
        >
          Go back to home page
        </StyledButton>
      </div>
    </div>
  );
};

export default Custom404;
