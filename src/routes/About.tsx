import React from "react";
import "./Root.css";
import { NameContext } from "./RouterApp";

export default function About() {
  const nameContext = React.useContext(NameContext);
  if (nameContext === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }

  const { name, setName } = nameContext;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <h1>About</h1>
      <p>My name is {name}</p>
      <label htmlFor="name">Type Your Name</label>
      <input id="name" type="text" value={name} onInput={handleChange} />
    </>
  );
}
