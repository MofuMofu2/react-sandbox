import React from "react";

type StyledPanelProps = {
  children: JSX.Element[];
};

export default function StyledPanel(children: StyledPanelProps) {
  const title = children.children.find((element) => element.key === "title");
  const body = children.children.find((element) => element.key === "body");
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
      {title}
      <hr />
      {body}
    </div>
  );
}
