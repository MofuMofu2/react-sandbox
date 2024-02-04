import React, { useState } from "react";
import AlertModal from "../../component/AlertModal";

export default function AlertPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <h3>ボタンクリックでモーダルダイアログ表示を切り替える</h3>
      <button onClick={handleClick}>モーダル表示</button>
      {showModal ? (
        <AlertModal open={true} onButtonClick={handleClick} />
      ) : (
        <></>
      )}
    </>
  );
}
