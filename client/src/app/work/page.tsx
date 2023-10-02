import * as React from "react";
import { workPageNum } from "@/models/work/workPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";
import type { SelectLanguage } from "@/utils/types";
import getDownloadImgURL from "@/utils/infoPageImgGetDownloadURL";

export const metadata: Metadata = {
  title: constants.createTitle("Work"),
};

const language: () => Promise<SelectLanguage> = async () => {
  return {
    en: await getDownloadImgURL({ pages: workPageNum, lang: "English" }),
    my: await getDownloadImgURL({ pages: workPageNum, lang: "Burmese" }),
    ko: await getDownloadImgURL({ pages: workPageNum, lang: "Korean" }),
  };
};

const Work: React.FC = async () => {
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
export default Work;
