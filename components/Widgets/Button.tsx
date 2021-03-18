import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
function Button({ children }: Props): JSX.Element {
  const buttonColor = "#2664cb";
  return (
    <button
      className="w-full rounded-md h-16 text-white lg:max-w-150"
      style={{ backgroundColor: buttonColor }}
    >
      {children}
    </button>
  );
}

export default Button;
