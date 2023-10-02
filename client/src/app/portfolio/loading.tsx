"use client";

import * as React from "react";
import Lottie from "react-lottie-player";
import imgComponentLoadingFile from "@pub/imgComponentLoading.json";

const PortfolioLoading: React.FC = (async) => {
  return (
    <div
      className={
        "w-full h-full mt-auto bg-white/75 relative flex justify-center items-center flex-col"
      }
    >
      <div>
        <Lottie
          loop
          play
          animationData={imgComponentLoadingFile}
          className={"w-80 h-80"}
        />
      </div>
      <p className={"text-black text-lg"}>images loading...</p>
    </div>
  );
};
export default PortfolioLoading;
