import React, { useState } from "react";

export default function StateNext() {
  const [form, setForm] = useState({
    name: "山田太郎",
    address: {
      prefecture: "静岡県",
      city: "榛原町",
    },
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormNest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      address: {
        ...form.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  return (
    <>
      <form>
        <p>
          <label htmlFor="name">名前</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleForm}
            value={form.name}
          />
        </p>
        <p>
          <label htmlFor="prefecture">名前</label>
          <input
            type="text"
            id="prefecture"
            name="prefecture"
            onChange={handleFormNest}
            value={form.address.prefecture}
          />
        </p>
        <p>
          <label htmlFor="city">名前</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={handleFormNest}
            value={form.address.city}
          />
        </p>
      </form>
      <p>{`${form.name} ${form.address.prefecture} ${form.address.city}`}</p>
    </>
  );
}
