import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import { aboutPageNum } from "@/models/about/aboutPage";
import SelectLanguage from "@/utils/SelectLanguage";
import Image from "next/image";

export const metadata: Metadata = {
  title: constants.createTitle("About"),
};

const About: React.FC = () => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"about"} className={"w-10/12"} />
      {aboutPageNum.range.map((element) => {
        return (
          <Image
            src={`/info/English/infoPage${element}.png`}
            width={2160}
            height={1495}
            alt={`${element}page IMG`}
            key={element}
            className={"w-screen"}
            priority
          />
        );
      })}
    </main>
  );
};
export default About;
