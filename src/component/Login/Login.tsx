import React from "react";

export const Login = () => {
  // ログイン用APIの呼び出し
  const handleLogin = () => {
    fetch("/login", {
      method: "POST",
    }).then((response) => {
      console.info(`login response: ${response.status}`);
    });
  };

  // 本当はログインフォームを作るべきだがリダイレクト検証のため簡略化
  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};
