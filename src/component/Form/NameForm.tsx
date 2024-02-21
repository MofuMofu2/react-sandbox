import React, { useState } from "react";

interface UserInfo {
  lastName: string;
  firstName: number;
}

export default function NameForm() {
  const [form, setForm] = useState<UserInfo>({
    lastName: "山田",
    firstName: "太郎",
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="last-name">苗字</label>
        <input
          id="last-name"
          name="last-name"
          type="text"
          onChange={handleForm}
          value={form.lastName}
        />
      </div>
      <div>
        <label htmlFor="age">名前</label>
        <input
          id="age"
          name="age"
          type="text"
          onChange={handleForm}
          value={form.firstName}
        />
      </div>
      <p>
        こんにちは、{form.lastName} {form.firstName}さん！
      </p>
    </form>
  );
}
