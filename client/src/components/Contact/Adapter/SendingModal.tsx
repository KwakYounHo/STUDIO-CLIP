import * as React from "react";
import Lottie from 'react-lottie-player'

import sendMailAniFile from "@pub/sendMailLoading.json";

const SendingModal: React.FC = () => {
  return (
    <div className="modalWrapper">
      <div className="modalBackground">
        <div className="modalContent">
          <Lottie
            loop
            animationData={sendMailAniFile}
            play
            className={'w-80 h-80'}
          />
          <p className={'text-xl font-semibold'}>Sending email...</p>
        </div>
      </div>
    </div>
  );
};
export default SendingModal;
