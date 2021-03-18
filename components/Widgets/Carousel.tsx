import React, { useEffect } from "react";
import CarouselOrigin from "react-material-ui-carousel";
import autoBind from "auto-bind";

export default function Carousel(): JSX.Element {
  useEffect(() => {
    autoBind(setup);
  }, []);

  const setup = {
    autoPlay: false,
    animation: "slide",
    indicators: false,
    timeout: 500,
    navButtonsAlwaysVisible: false,
  };

  return (
    <CarouselOrigin
      className="w-full px-10 py-4 bg-red-700"
      autoPlay={setup.autoPlay}
      animation="slide"
      indicators={setup.indicators}
      timeout={setup.timeout}
      navButtonsAlwaysVisible={setup.navButtonsAlwaysVisible}
    >
      <div className="w-full" style={{ height: "200px" }}></div>
    </CarouselOrigin>
  );
}
