import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import SelectLanguage from "@/utils/SelectLanguage";
import { aboutPageNum } from "@/models/about/aboutPage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

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
      <InfoPageImgContainer pages={aboutPageNum} lang="English" />
    </main>
  );
};
export default About;
