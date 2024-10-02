import React from "react";
import Colors from "../colors";
const UpdateBanner = ({ message }: { message: string }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        padding: "5px",
        marginBottom: "5px",
        color: Colors.brand800,
        background: Colors.brand,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {message}
    </div>
  );
};

export default UpdateBanner;
