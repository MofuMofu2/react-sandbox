import React from "react";

type AlertModalProps = {
  /**
   * dialogを切り替える
   */
  open?: boolean;
  /**
   * ボタンコンポーネントのイベント発火を検証する
   */
  onButtonClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function AlertModal({ open = true, ...props }: AlertModalProps) {
  return (
    <dialog open={open}>
      <p>アラートテキストを表示</p>
      <button type="button" onClick={props.onButtonClick}>
        OK
      </button>
    </dialog>
  );
}
