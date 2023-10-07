import React from "react";

type StyledPanelProps = {
  children: JSX.Element;
};

export default function StyledPanel({ children }: StyledPanelProps) {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {children}
    </div>
  );
}
