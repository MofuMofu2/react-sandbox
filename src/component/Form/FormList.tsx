import React, { useState } from "react";

import { animals } from "./animal";
import AnimalOptions from "./AnimalOptions";

export default function FormList() {
  const [form, setForm] = useState({
    animal: ["dog", "hamster"],
  });

  const handleFormList = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const data = [];
    const opts = e.target.options;

    for (const opt of opts) {
      if (opt.selected) {
        data.push(opt.value);
      }
    }

    setForm({
      ...form,
      [e.target.name]: data,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="animal">好きなどうぶつは？</label>
        <select
          id="animal"
          name="animal"
          value={form.animal}
          size={4}
          multiple={true}
          onChange={handleFormList}
        >
          {animals.map((animal) => (
            <AnimalOptions
              name={animal.name}
              value={animal.value}
              key={animal.value}
            />
          ))}
        </select>
      </form>
      <p>{`好きな動物は ${form.animal} です。`}</p>
    </>
  );
}
