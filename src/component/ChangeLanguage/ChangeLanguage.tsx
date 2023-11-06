import React from "react";

import { WithTranslation, withTranslation } from "react-i18next";

function Language({ t }: WithTranslation) {
  return <h1>{t("welcome")}</h1>;
}

const ChangeLanguage = withTranslation()(Language);

export default ChangeLanguage;
