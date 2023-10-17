import React, { useState } from "react";

export default function FormSelect() {
  const [form, setForm] = useState({
    animal: "",
  });

  return (
    <form>
      <label htmlFor="animal">好きなどうぶつは？</label>
      <select id="animal" name="animal"></select>
    </form>
  );
}
