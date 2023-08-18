import React, { useState } from "react";

type AddColorFormProps = {
  onNewColor: (title: string, color: string) => void;
};

export default function AddColorFormProps({ ...props }: AddColorFormProps) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    props.onNewColor(title, color);
    setTitle("");
    setColor("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        type="text"
        placeholder="color"
        required
      />
      <button>ADD</button>
    </form>
  );
}
