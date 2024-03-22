import React, { useState } from "react";
interface Data {
  username: "string";
  locale: "ja" | "en";
}

export default function UserPage() {
  const [data, setData] = useState<Data | undefined>(undefined);

  const handleClick = () => {
    fetchData()
      .then((response) => {
        if (response.ok) {
          void response.json().then((json) => {
            setData(json);
          });
        }
      })
      .catch((error) => {
        setData(undefined);
        console.error("Error:", error);
      });
  };

  const fetchData = async () => {
    return await fetch(`${window.location.origin}/user`);
  };

  return (
    <>
      <div>
        {data !== undefined ? (
          <div>
            <div>{data.username}</div>
            <div>{data.locale}</div>
          </div>
        ) : (
          <div>No data</div>
        )}
      </div>
      <button onClick={handleClick}>Fetch Data</button>
    </>
  );
}
