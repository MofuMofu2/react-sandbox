import React, { forwardRef, useImperativeHandle, useRef } from "react";

interface MyTextBoxInstance {
  focus: () => void;
}

interface MyTextBoxProps {
  label: string;
}

const MyTextBox = forwardRef<MyTextBoxInstance, MyTextBoxProps>(
  (props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      },
    }));

    return (
      <>
        <label>{props.label}</label>
        <input type="text" size={15} ref={inputRef} />
      </>
    );
  }
);

MyTextBox.displayName = "MyTextBox";

export default MyTextBox;
