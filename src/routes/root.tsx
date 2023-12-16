import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import i18n from "../i18n/i18n";

interface Data {
  username: "string";
  locale: "ja" | "en";
}

export default function Root() {
  const [data, setData] = useState<Data | undefined>(undefined);
  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      // この結果は子コンポーネントにPropsしつつ、i18n定義も更新したい。
      const response = await fetch("http://localhost:3000/user");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      if (response.ok) {
        const param = await response.json();
        setData(param as Data);
        await i18n.changeLanguage(param.locale);
      }
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
