import React, { forwardRef, useImperativeHandle, useRef } from "react";

const MyTextBox = forwardRef((props, ref) => {
  const input = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          input.current?.focus();
        },
      };
    },
    [input]
  );

  return (
    <>
      <label>{props.label}</label>
      <input type="text" size={15} ref={input} />
    </>
  );
});

MyTextBox.displayName = "MyTextBox";

export default MyTextBox;
