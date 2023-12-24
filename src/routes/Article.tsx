import React from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const params = useParams();
  return <div>{params.id != null ? "始まり" : params.id} のページです</div>;
}
