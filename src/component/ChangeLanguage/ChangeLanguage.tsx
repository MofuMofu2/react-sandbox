import React from "react";

import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const [t] = useTranslation();
  return <h1>{t("welcome")}</h1>;
}
