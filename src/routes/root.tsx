import React, { useState } from "react";
import colorData from "../assets/color-data.json";
import ColorList from "../component/ColorList";
import AddColorForm from "../component/AddColorForm";
import ColorProvider from "../component/ColorProvider";

export default function Root() {
  return (
    <ColorProvider>
      <AddColorForm />
      <ColorList />
    </ColorProvider>
  );
}
