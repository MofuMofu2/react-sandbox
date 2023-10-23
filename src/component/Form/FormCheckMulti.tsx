import React, { useState } from "react";

export default function FormCheckMulti() {
  const [form, setForm] = useState({
    os: ["windows", "mac"],
  });

  const handleFormCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fa = form.os;

    if (e.target.checked) {
      fa.push(e.target.value);
    } else {
      fa.splice(fa.indexOf(e.target.value), 1);
    }

    setForm({
      ...form,
      [e.target.name]: fa,
    });
  };

  return (
    <>
      <form>
        <fieldset>
          <legend>使用OS</legend>
          <label htmlFor="os_win">Windows</label>
          <input
            id="os_win"
            name="os"
            type="checkbox"
            value={"windows"}
            checked={form.os.includes("windows")}
            onChange={handleFormCheck}
          />
          <label htmlFor="os_mac">Mac</label>
          <input
            id="os_mac"
            name="os"
            type="checkbox"
            value={"mac"}
            checked={form.os.includes("mac")}
            onChange={handleFormCheck}
          />
          <label htmlFor="os_linux">Linux</label>
          <input
            id="os_linux"
            name="os"
            type="checkbox"
            value={"linux"}
            checked={form.os.includes("linux")}
            onChange={handleFormCheck}
          />
        </fieldset>
      </form>
      <p>
        {form.os.map((key, index) => (
          <span key={index}>{key}</span>
        ))}
      </p>
    </>
  );
}
