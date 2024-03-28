import React from "react";

export async function loader() {
  const response = await fetch("/user");
  const data = await response.json();
  return data;
}

export default function LoaderPage() {
  return (
    <div>
      <h2>React RouterのLoaderを使う</h2>
      <p>ここにAPIレスポンスパラメータを表示</p>
    </div>
  );
}
