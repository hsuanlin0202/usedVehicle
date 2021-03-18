import React, { useContext } from "react";
import DeviceType from "../hooks/useDevice";
import Button from "./Widgets/Button";
import Headline from "./Widgets/Headline";
import Select from "./Widgets/Select";

function SearchBox(): JSX.Element {
  const deviceType = useContext(DeviceType());

  const selectWidth = deviceType === "Mobile" ? "48%" : "23%";
  return (
    <div
      className="rounded-md m-4 p-4 h-60 box-border"
      style={{ backgroundColor: "#efefef" }}
    >
      <Headline>進階搜尋</Headline>
      <div className="w-full lg:flex lg:flex-nowrap">
        <div className="w-full flex flex-wrap justify-between">
          <Select selectWidth={selectWidth} />
          <Select selectWidth={selectWidth} />
          <Select selectWidth={selectWidth} />
          <Select selectWidth={selectWidth} />
        </div>
        <div className="lg:w-4"></div>
        <Button>進階搜尋</Button>
      </div>
    </div>
  );
}

export default SearchBox;
