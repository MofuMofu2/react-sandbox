import React from "react";
import { useInput } from "../../hooks/inputHooks";
import { useColors } from "../ColorProvider";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const AddColor = (title: string, color: string) => useColors();

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    AddColor(titleProps.value, colorProps.value);
    resetTitle();
    resetColor();
  };

  return (
    <form onSubmit={submit}>
      <input
        {...titleProps}
        type="text"
        placeholder="color title"
        aria-label="title"
        required
      />
      <input {...colorProps} type="color" aria-label="color" required />
      <button>ADD</button>
    </form>
  );
}
