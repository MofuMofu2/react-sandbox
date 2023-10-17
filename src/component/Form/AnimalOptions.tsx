import React from "react";
import { Animal } from "./animal";

export default function AnimalOptions({ name, value }: Animal) {
  return <option value={value}>{name}</option>;
}
