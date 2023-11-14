import React, { useEffect, useState } from "react";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";

interface Data {
  username: "string";
  locale: "ja" | "en";
}

export default function Root() {
  const [data, setData] = useState<Data | undefined>(undefined);
  const { t } = useTranslation();

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

  return <span>{data === undefined ? t("nodata") : t("welcome")}</span>;
}
