import React, { useEffect, useState } from "react";

interface Data {
  username: "string";
  locale: "ja" | "en";
}

export default function Root() {
  const [data, setData] = useState<Data | undefined>(undefined);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const param = await response.json();
      setData(param as Data);
    } catch (error) {
      setData(undefined);
      console.error(error);
    }
  };

  useEffect(() => {
    // 初回マウント時に実行
    void fetchData();
  }, []);

  return (
    <span>{data === undefined ? "データがありません" : data.username}</span>
  );
}
