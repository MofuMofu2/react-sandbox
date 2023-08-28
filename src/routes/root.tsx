import React, { useState } from "react";
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
