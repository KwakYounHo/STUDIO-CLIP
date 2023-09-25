"use client";

import * as React from "react";
import Lottie from "react-lottie-player";

import loadingAniFile from "@pub/loadingAni.json";

const Loading: React.FC = () => {
  return (
    <div className={"w-full h-full bg-white/50"}>
      <div
        className={
          "flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      >
        <Lottie
          loop
          play
          animationData={loadingAniFile}
          className={"w-80 h-80"}
        />
      </div>
    </div>
  );
};
export default Loading;
