import React, { useState } from "react";

export default function FormTextarea() {
  const [form, setForm] = useState({ comment: "さまざまなフォーム要素を" });
  const [text, setText] = useState("");

  const handleForm = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const show = () => {
    setText(form.comment);
  };

  return (
    <>
      <form>
        <label htmlFor="comment">コメント</label>
        <textarea
          id="comment"
          name="comment"
          cols={30}
          rows={7}
          value={form.comment}
          onChange={handleForm}
        />
        <button type="button" onClick={show}>
          送信
        </button>
      </form>
      <p>{text}</p>
    </>
  );
}
