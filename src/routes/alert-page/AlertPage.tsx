import React from "react";
import AlertModal from "../../component/AlertModal";

export default function AlertPage() {
  return (
    <>
      <h3>ボタンクリックでモーダルダイアログ表示を切り替える</h3>
      <button>モーダル表示</button>
      <AlertModal open={false} />
    </>
  );
}
