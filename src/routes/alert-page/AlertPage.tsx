import React, { useState } from "react";
import AlertModal from "../../component/AlertModal";

export default function AlertPage() {
  const [showModal, setShowModal] = useState(false);

  const handleEvent = () => {
    setShowModal(true);
  };

  return (
    <>
      <h3>ボタンクリックでモーダルダイアログ表示を切り替える</h3>
      <button onClick={handleEvent}>モーダル表示</button>
      <AlertModal open={showModal} />
    </>
  );
}
