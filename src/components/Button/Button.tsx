import React from "react";

function Button({ text, className }: any) {
  return (
    <div
      className={`border border-4 rounded-md border-amber-300  w-32 p-2 text-center ${className} hover:bg-amber-300 hover:text-black  font-medium`}
    >
      <button>{text}</button>
    </div>
  );
}

export default Button;
