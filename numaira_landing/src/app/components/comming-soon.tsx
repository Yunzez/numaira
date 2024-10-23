import React from "react";
import Colors from "../colors";
import LogoSVG from "../asset/logo.svg";
import formats from "../formats";

const ComingSoon = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-96">
        <LogoSVG width={80} height={80} fill={Colors.brand500} />
        <div className="flex flex-col gap-2">
          <div style={{ fontSize: formats.displayMD, fontWeight: "600" }}>
            Coming Soon
          </div>
          <div>
            <p>Numaira’s SaaS model and pricing is </p>
            <p>currently under development.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
