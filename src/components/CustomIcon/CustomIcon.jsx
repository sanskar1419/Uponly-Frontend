import React from "react";

const CustomIcon = ({
  width,
  height,
  bgColor,
  padding,
  borderRadius,
  children,
  color,
}) => {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        borderRadius,
        padding: padding || "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default CustomIcon;
