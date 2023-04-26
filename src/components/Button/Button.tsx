import React from "react";
interface ButtonProps {
  text: string;
  className?: string;
  callBack: () => void;
}
function Button({ text, className, callBack }: ButtonProps) {
  return (
    <div
      className={`rounded-md   p-2 text-center ${className} hoverable  font-medium`}
    >
      <button onClick={callBack}>{text}</button>
    </div>
  );
}

export default Button;
