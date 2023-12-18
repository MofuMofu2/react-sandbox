import React from "react";
import useForm from "./UseForm";

export default function FormRadio() {
  // useFormの引数に初期値を渡す
  const { values: form, handleChange: handleForm } = useForm({ os: "windows" });

  return (
    <>
      <form>
        <fieldset>
          <legend>使用OS</legend>
          <label htmlFor="os_win">Windows</label>
          <input
            id="os_win"
            name="os"
            type="radio"
            value={"windows"}
            checked={form.os === "windows"}
            onChange={handleForm}
          />
          <label htmlFor="os_mac">Mac</label>
          <input
            id="os_mac"
            name="os"
            type="radio"
            value={"mac"}
            checked={form.os === "mac"}
            onChange={handleForm}
          />
          <label htmlFor="os_linux">Linux</label>
          <input
            id="os_linux"
            name="os"
            type="radio"
            value={"linux"}
            checked={form.os === "linux"}
            onChange={handleForm}
          />
        </fieldset>
      </form>
      <p>{form.os}</p>
    </>
  );
}
