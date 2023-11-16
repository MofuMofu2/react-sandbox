import React, { forwardRef } from "react";

interface MyTextBoxProps {
  label: string;
}

const MyTextBox = forwardRef<HTMLInputElement, MyTextBoxProps>(
  function MyTextBox(props, ref) {
    return (
      <div>
        <label>{props.label}</label>
        <input type="text" ref={ref} />
      </div>
    );
  }
);

MyTextBox.displayName = "MyTextBox";

export default MyTextBox;
