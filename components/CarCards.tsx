import React from "react";
import CarCard from "./CarCard";
import Headline from "./Widgets/Headline";

function CarCards(): JSX.Element {
  return (
    <>
      <div className="w-full px-4 flex flex-no-wrap items-center justify-between">
        <Headline>全部一手中古車</Headline>
        <a
          href="#"
          className="text-black hover:text-gray-800 focus::bg-gray-800 hover:bg-white focus:bg-white cursor-pointer"
        >
          顯示更多&gt;&gt;&gt;
        </a>
      </div>
      <CarCard></CarCard>
    </>
  );
}

export default CarCards;
