import React from "react";
import AgreementCheckbox from "../../component/AgreementCheckbox/AgreementCheckbox";
import NameForm from "../../component/Form/NameForm";
import StayExtensionMultipleSelectBox from "../../component/StayExtensionMultipleSelectBox/StayExtensionMultipleSelectBox";
import StayExtensionOptionsRadio from "../../component/StayExtensionOptionsRadio/StayExtensionOptionsRadio";
import StayExtensionSelectBox from "../../component/StayExtensionSelectBox/StayExtensionSelectBox";

export default function FormPage() {
  return (
    <>
      <h3>フォームページ</h3>
      <StayExtensionOptionsRadio />
      <StayExtensionSelectBox />
      <StayExtensionMultipleSelectBox />
      <AgreementCheckbox />
      <NameForm />
    </>
  );
}
