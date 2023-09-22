"use client";

import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import { useRouter } from "next/navigation";
import Lottie from "react-lottie-player";

import nonPageAniFile from "@pub/404page.json";

export const metadata: Metadata = {
  title: constants.createTitle("Does not exist page"),
};

const NotFound: React.FC = () => {
  const [count, setCount] = React.useState<number>(5);
  const router = useRouter();
  const intervalID = React.useRef<number | NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    intervalID.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (count === 0) {
      console.log(count);
      router.push("/");
      if (intervalID.current) {
        clearInterval(intervalID.current);
      }
    }
  }, [count]);

  return (
    <div
      className={
        "text-content-text w-full my-auto flex flex-col justify-center items-center"
      }
    >
      <Lottie
        loop
        animationData={nonPageAniFile}
        play
        className={"w-60 h-60"}
      />
      <div className={"flex flex-col text-center"}>
        <div className={"w-full"}>
          <h1 className={"text-3xl md:text-5xl font-black"}>
            404 Not Found
          </h1>
          <p className={"mt-7 md:text-lg"}>Does not exist page</p>
          <div className={"md:text-lg"}>
            Go to main page after{" "}
            {<span className={"text-2xl md:text-3xl"}>{count}</span>} seconds
          </div>
          <div className={"text-xs md:text-base mt-7"}>
            If you want Return to previous page,{" "}
            <button onClick={router.back} className={"text-xl md:text-2xl"}>
              click here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
