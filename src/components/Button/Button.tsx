import React from "react";
interface ButtonProps {
  text: string;
  className?: string;
  callBack: () => void;
}
function Button({ text, className, callBack }: ButtonProps) {
  return (
    <div
      className={`border border-4 rounded-md border-amber-300  p-2 text-center ${className} hover:bg-amber-300 hover:text-black  font-medium`}
    >
      <button onClick={callBack}>{text}</button>
    </div>
  );
}

export default Button;
