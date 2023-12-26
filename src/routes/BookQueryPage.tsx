import React from "react";
import { useLocation } from "react-router-dom";

export default function BookQueryPage() {
  const { state: isbn = "978-4-8156-0182-5" } = useLocation();
  return <p> ISBNコード {isbn} のページです</p>;
}
