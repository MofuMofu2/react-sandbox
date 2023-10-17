import React, { useState } from "react";
import { animals } from "./animal";
import AnimalOptions from "./AnimalOptions";

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: "",
  });

  return (
    <form>
      <label htmlFor="animal">好きなどうぶつは？</label>
      <select id="animal" name="animal">
        {animals.map((animal) => (
          <AnimalOptions
            name={animal.name}
            value={animal.value}
            key={animal.value}
          />
        ))}
      </select>
    </form>
  );
}
