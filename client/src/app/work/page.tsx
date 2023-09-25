import * as React from "react";
import Image from "next/image";
import { workPageNum } from "@/models/work/workPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import SelectLanguage from '@/utils/SelectLanguage'

export const metadata: Metadata = {
  title: constants.createTitle("Work"),
};

const Work: React.FC = () => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"work"} className={"w-10/12"} />
      {workPageNum.range.map((element) => {
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
export default Work;
