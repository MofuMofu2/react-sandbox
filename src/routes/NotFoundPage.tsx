import React from "react";
import { useParams } from "react-router-dom";

export default function NotFoundPage() {
  const { "*": paths } = useParams();
  return <p>指定された {paths} は存在しません。</p>;
}
