import React from "react";
import AgreementCheckbox from "../../component/AgreementCheckbox/AgreementCheckbox";
import StayExtensionOptionsRadio from "../../component/StayExtensionOptionsRadio/StayExtensionOptionsRadio";

export default function FormPage() {
  return (
    <>
      <h3>フォームページ</h3>
      <StayExtensionOptionsRadio />
      <AgreementCheckbox />
    </>
  );
}
