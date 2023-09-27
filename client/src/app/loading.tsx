"use client";

import * as React from "react";
import Lottie from "react-lottie-player";

import loadingAniFile from "@pub/loadingAni.json";

const Loading: React.FC = () => {
  return (
    <div className={"w-full h-full bg-white/50 relative flex justify-center items-center"}>
      <div>
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
