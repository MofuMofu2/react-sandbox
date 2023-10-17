import React from "react";
import { Animal } from "./animal";

export default function AnimalOptions(props: Animal) {
  return <option value={props.value}>{props.name}</option>;
}
