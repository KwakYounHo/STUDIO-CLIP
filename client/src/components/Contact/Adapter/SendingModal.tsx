"use client";

import * as React from "react";
import Lottie from "react-lottie-player";

import sendMailLoadingFile from "@pub/sendMailLoading.json";
import sendMailSuccessFile from "@pub/sendMailSuccess.json";

const SendMailLoading: React.FC = () => {
  return (
    <div className="modalWrapper">
      <div className="modalBackground">
        <div className="modalContent">
          <Lottie
            loop
            animationData={sendMailLoadingFile}
            play
            className={"w-40 h-40 md:w-80 md:h-80 m-7 md:m-0"}
          />
          <p className={"text-xl font-semibold m-7 md:m-0"}>Sending email...</p>
        </div>
      </div>
    </div>
  );
};

type SuccessProps = {
  sendState: React.Dispatch<React.SetStateAction<boolean>>;
};

const SendMailSuccess: React.FC<SuccessProps> = ({ sendState }) => {
  const clickButton = React.useCallback(() => {
    sendState(false);
  }, [sendState]);
  return (
    <div className="modalWrapper">
      <div className="modalBackground">
        <div className="modalContent">
          <Lottie
            loop
            animationData={sendMailSuccessFile}
            play
            className={"w-40 h-40 md:w-80 md:h-80 m-7 md:m-0"}
          />
          <div className={"m-7 md:m-0"}>
            <h1 className={"text-xl md:text-4xl font-black"}>
              Successfully send Email
            </h1>
            <p className={"text-base md:text-xl font-semibold text-center mt-4"}>
              We will contact you
              <br />
              as soon as we check your email
            </p>
          </div>
          <button
            onClick={clickButton}
            className={
              " bg-black text-white rounded-lg hover:bg-black/50 w-20 h-10 mb-7 md:mb-0"
            }
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export { SendMailLoading, SendMailSuccess };
