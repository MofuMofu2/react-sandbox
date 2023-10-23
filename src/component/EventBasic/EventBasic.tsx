import React, { useState } from "react";

export default function EventBasic() {
  const [now, setNow] = useState("click button");
  const current = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: "date" | "time"
  ) => {
    const d = new Date();
    switch (type) {
      case "date":
        setNow(d.toLocaleDateString());
        break;
      case "time":
        setNow(d.toLocaleTimeString());
        break;
    }
  };
  return (
    <div>
      <button onClick={(e) => current(e, "date")}>現在時刻を取得</button>
      <button onClick={(e) => current(e, "time")}>現在時間を取得</button>
      <p>{now}</p>
    </div>
  );
}
