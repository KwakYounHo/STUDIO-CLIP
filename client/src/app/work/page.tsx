import * as React from "react";
import Image from "next/image";
import { workPageNum } from "@/models/work/workPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import SelectLanguage from '@/utils/SelectLanguage'
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

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
      <InfoPageImgContainer pages={workPageNum} lang="English" />
    </main>
  );
};
export default Work;
