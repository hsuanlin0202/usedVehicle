import React from "react";
type Props = {
  selectWidth: string;
};
function Select({ selectWidth }: Props): JSX.Element {
  return (
    <select
      className="h-16 md:w-3/12 mb-4 rounded-md shadow-md"
      style={{ width: selectWidth }}
    ></select>
  );
}

export default Select;
