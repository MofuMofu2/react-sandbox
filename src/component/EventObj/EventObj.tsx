import React from "react";

export default function EventObj() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    console.log(e);

  return <button onClick={handleClick}>クリック</button>;
}
