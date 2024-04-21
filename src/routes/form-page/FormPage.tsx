import React from "react";
import AgreementCheckbox from "../../component/AgreementCheckbox/AgreementCheckbox";
import Color from "../../component/Color/Color";
import NameForm from "../../component/Form/NameForm";
import StarRating from "../../component/StarRating";
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
      <Color />
      <StarRating color="red" count={3} />
    </>
  );
}
