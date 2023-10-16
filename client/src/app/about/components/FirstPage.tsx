import * as React from "react";
import { impact } from "@/utils/localFontManage";
import Link from "next/link";

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
        <div
          className={"text-sm md:text-xl md:flex md:justify-center md:gap-3"}
        >
          <Link href="http://studioclip.video" target="_blank">
            <p>https://studioclip.video</p>
          </Link>
          <Link href="https://facebook.com/studioclip.Official" target="_blank">
            <p>https://facebook.com/studioclip.Official</p>
          </Link>
          <p>09 88413 9136</p>
        </div>
      </div>
    </>
  );
};
export default FirstPage;
