import React, { useState } from "react";

interface UserInfo {
  lastName: string;
  firstName: string;
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
        <label htmlFor="lastName">苗字</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleForm}
          value={form.lastName}
        />
      </div>
      <div>
        <label htmlFor="firstName">名前</label>
        <input
          id="firstName"
          name="firstName"
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
