import React, { useState } from "react";

import { animals } from "./animal";
import AnimalOptions from "./AnimalOptions";

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: "",
  });

  const handleForm = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const searchName = (animal: string) => {
    const param = animals.find((param) => param.value === animal);

    return param !== undefined ? param.name : "まだ決めてない";
  };

  return (
    <>
      <form>
        <label htmlFor="animal">好きなどうぶつは？</label>
        <select id="animal" name="animal" onChange={handleForm}>
          {animals.map((animal) => (
            <AnimalOptions
              name={animal.name}
              value={animal.value}
              key={animal.value}
            />
          ))}
        </select>
      </form>
      <p>{`好きな動物は ${searchName(form.animal)} です。`}</p>
    </>
  );
}
