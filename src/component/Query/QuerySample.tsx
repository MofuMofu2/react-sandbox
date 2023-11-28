import React, { useEffect, useState } from "react";
import i18n from "../../i18n/i18n";

type User = {
  username: string;
  locale: string;
};

export default function QuerySample() {
  const [users, setUsers] = useState<User | undefined>(undefined);

  useEffect(() => {
    fetch("/user")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return await response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1>QuerySample</h1>
      <p>{users != null ? users.username : ""}</p>
      <p>{users != null ? users.locale : ""}</p>
      <p>{i18n.t("eggAndApple", { egg: 3, apple: 5 })}</p>
    </div>
  );
}
