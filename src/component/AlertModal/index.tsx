import React from "react";

type AlertModalProps = {
  /**
   * dialogを切り替える
   */
  open?: boolean;
};

export default function AlertModal({ open = true }: AlertModalProps) {
  return (
    <dialog open={open}>
      <p>アラートテキストを表示</p>
      <button type="button">OK</button>
    </dialog>
  );
}
