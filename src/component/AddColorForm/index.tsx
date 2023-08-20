import React from "react";
import { useInput } from "../../hooks/inputHooks";

type AddColorFormProps = {
  onNewColor: (titleProps: string, colorProps: string) => void;
};

export default function AddColorForm({ ...props }: AddColorFormProps) {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onNewColor(titleProps.value, colorProps.value);
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
