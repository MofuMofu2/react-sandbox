import React, { useState } from "react";

type UserInfo = {
  name: string;
  age: number;
};

export default function StateForm() {
  const [form, setForm] = useState<UserInfo>({ name: "山田太郎", age: 18 });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
        />
      </div>
      <div>
        <label htmlFor="age">名前</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.age}
        />
      </div>
      <p>
        こんにちは、{form.name} {`${form.age} 歳`}さん！
      </p>
    </form>
  );
}
