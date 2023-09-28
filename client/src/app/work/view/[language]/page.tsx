"use client";

import * as React from "react";
import { workPageNum } from "@/models/work/workPage";
import SelectLanguage from "@/utils/SelectLanguage";
import { usePathname } from "next/navigation";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

const Work: React.FC = () => {
  const pathname = usePathname();
  const language = pathname.split("/")[3];

  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"work"} className={"w-10/12"} />
      <InfoPageImgContainer pages={workPageNum} lang={language} />
    </main>
  );
};
export default Work;
