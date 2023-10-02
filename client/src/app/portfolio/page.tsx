import * as React from "react";
import { portfolioPageNum } from "@/models/portfolio/portfolioPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import getDownloadImgURL from "@/utils/infoPageImgGetDownloadURL";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

export const metadata: Metadata = {
  title: constants.createTitle("Portfolio"),
};

const img: () => Promise<{ en: string[] }> = async () => {
  return { en: await getDownloadImgURL({ pages: portfolioPageNum }) };
};

const portfolio: React.FC = async () => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <InfoPageImgContainer imgObject={await img()} />
    </main>
  );
};
export default portfolio;
