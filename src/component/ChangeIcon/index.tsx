import React, { useState } from "react";
import { faMusic, faImage, faTent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChangeIcon() {
  const [icon, setIcon] = useState({ value: faMusic, text: "音楽" });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "music") {
      setIcon({ value: faMusic, text: "音楽" });
    } else if (value === "image") {
      setIcon({ value: faImage, text: "画像" });
    } else if (value === "tent") {
      setIcon({ value: faTent, text: "テント" });
    }
  };

  return (
    <section>
      <h2>アイコンを選ぶ</h2>
      <select onChange={handleChange}>
        <option value="music">音楽</option>
        <option value="image">画像</option>
        <option value="tent">テント</option>
      </select>
      <div>
        <span>選択しているアイコンは{icon.text}です</span>
        <FontAwesomeIcon icon={icon.value} />
      </div>
    </section>
  );
}
