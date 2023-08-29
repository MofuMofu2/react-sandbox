import React, { useEffect, useState } from "react";

type Data = {
  username: "string";
};

export default function Root() {
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/api/user");
    const param = await response.json();
    setData(param as Data);
  };

  useEffect(() => {
    // 初回マウント時に実行
    fetchData();

    // 10秒ごとに実行
    const interval = setInterval(fetchData, 10000);

    // コンポーネントがアンマウントされたときに実行
    return () => clearInterval(interval);
  }, []);

  return (
    <span>{data === undefined ? "データがありません" : data.username}</span>
  );
}
