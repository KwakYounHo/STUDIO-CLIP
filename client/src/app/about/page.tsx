import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import { aboutPageNum } from "@/models/about/aboutPage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";
import getDownloadImgURL from "@/utils/infoPageImgGetDownloadURL";
import type { SelectLanguage } from "@/utils/types";

export const metadata: Metadata = {
  title: constants.createTitle("About"),
};

const language: () => Promise<SelectLanguage> = async () => {
  return {
    en: await getDownloadImgURL({ pages: aboutPageNum, lang: "English" }),
    my: await getDownloadImgURL({ pages: aboutPageNum, lang: "Burmese" }),
    ko: await getDownloadImgURL({ pages: aboutPageNum, lang: "Korean" }),
  };
};

const About: React.FC = async () => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <InfoPageImgContainer imgObject={await language()} />
    </main>
  );
};
export default About;
