"use client";

import * as React from "react";
import Lottie from "react-lottie-player";

import imgLoadingFile from "@pub/imgLoading.json";

type Props = {
  url: string;
};

const InfoPageImgRenderer: React.FC<Props> = ({ url }) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const imgEl = React.useRef<HTMLImageElement>(null);

  const handleLoading = React.useCallback(()=>{
    setIsLoading(false)
  }, [])

  React.useEffect(() => {
    if (imgEl.current && imgEl.current.complete) {
      handleLoading();
    }
  }, [imgEl.current?.complete]);

  return (
    <div className={"relative"}>
      <img
        ref={imgEl}
        src={url}
        width={2160}
        height={1495}
        alt={"introduceIMG"}
        onLoad={handleLoading}
        className={"w-screen"}
      />
      {isLoading && (
        <div
        className={
          "bg-white/50 absolute inset-0 flex justify-center items-center"
        }
        >
          <Lottie loop play animationData={imgLoadingFile} />
        </div>
      )}
    </div>
  );
};
export default InfoPageImgRenderer;
