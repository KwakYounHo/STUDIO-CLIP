import * as React from "react";
import { impact } from "@/utils/localFontManage";

const FirstPage: React.FC = () => {
  return (
    <>
      <div id="title01" className={"text-center mt-10 relative"}>
        <h1 className={`${impact.className} text-7xl md:text-9xl uppercase`}>
          studio clip
        </h1>
        <h2
          className={`${impact.className} uppercase text-2xl font-light tracking-[2.2rem] leading-none ml-6 md:text-5xl md:tracking-[4.2rem] md: pl-8`}
        >
          myanmar
        </h2>
      </div>
      <div
        id="subTitle01"
        className={`text-center flex flex-col gap-4 md:gap-0 relative`}
      >
        <p className={"text-xl"}>STUDIO CLIP Corp.</p>
        <p className={"capitalize md:text-xl"}>
          Royal Mg Bamar Residence, Dhamar Yone Street, Hlaing, Yangon, Myanmar
        </p>
        <div className={"text-sm md:text-xl md:flex md:justify-center"}>
          <p>https://studioclip.video</p>
          <p>https://facebook.com/studioclip.Official</p>
          <p>09 88413 9136</p>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
