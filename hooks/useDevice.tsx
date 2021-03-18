import { createContext } from "react";
import useResize from "./useResize";

const DeviceType = () => {
  const [width] = useResize();
  let temp = "Mobile";
  if (width > 768) {
    temp = "Desktop";
  } else if (width <= 375) {
    temp = "Mobile";
  } else {
    temp = "Tablet";
  }

  return createContext(temp);
};

export default DeviceType;
