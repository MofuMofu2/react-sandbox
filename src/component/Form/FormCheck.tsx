import React, { useState } from "react";

export default function FormCheck() {
  const [form, setForm] = useState({
    agreement: true,
  });

  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      <form>
        <label htmlFor="agreement">同意します</label>
        <input
          id="agreement"
          name="agreement"
          type="checkbox"
          checked={form.agreement}
          onChange={handleFormCheck}
        />
      </form>
      <p>{form.agreement ? "同意する" : "同意しない"}</p>
    </>
  );
}
