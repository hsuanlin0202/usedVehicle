import React, { useContext } from "react";
import DeviceType from "../hooks/useDevice";

function Header(): JSX.Element {
  const deviceType = useContext(DeviceType());
  console.log("isMobile: " + deviceType);

  const borderColor = "#0083c9";

  return (
    <>
      {deviceType === "Mobile" && (
        <div
          className="fixed top-0 h-16 w-full p-4 box-border flex justify-between items-center flex-nowrap border-solid"
          style={{ borderColor: borderColor, borderBottomWidth: "3px" }}
        >
          <div>X</div>
          <div>格上LOGO</div>
          <div></div>
        </div>
      )}
    </>
  );
}

export default Header;
