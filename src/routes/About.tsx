import React, { useState } from "react";
import "./Root.css";

export default function About() {
  const [name, setName] = useState("");

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
