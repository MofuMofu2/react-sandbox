import React, { useState } from "react";
import colorData from "../assets/color-data.json";
import ColorList from "../component/ColorList";
import AddColorForm from "../component/AddColorForm";

export default function Root() {
  return (
    <>
      <AddColorForm />
      <ColorList />
    </>
  );
}
