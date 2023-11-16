import React, { forwardRef } from "react";

interface MyTextBoxProps {
  label: string;
}

const MyTextBox = forwardRef<HTMLInputElement, MyTextBoxProps>(
  ({ label }, ref) => (
    <label>
      {label}: <input type="text" size={15} ref={ref} />
    </label>
  )
);

export default MyTextBox;
