"use client";

import * as React from "react";
import { aboutPageNum } from "@/models/about/aboutPage";
import SelectLanguage from "@/utils/SelectLanguage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";
import { usePathname } from "next/navigation";

const Language: React.FC = () => {
  const lang = usePathname().split("/")[3];
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"about"} className={"w-10/12"} />
      <InfoPageImgContainer pages={aboutPageNum} lang={lang} />
    </main>
  );
};
export default Language;
