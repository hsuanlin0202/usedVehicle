import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
function Headline({ children }: Props): JSX.Element {
  const borderColor = "#0083c9";

  return (
    <div
      className="px-4 mb-4 text-black"
      style={{
        borderColor: borderColor,
        borderLeftWidth: "6px",
        fontSize: "24px",
      }}
    >
      {children}
    </div>
  );
}

export default Headline;
