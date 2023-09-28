import * as React from "react";
import { portfolioPageNum } from "@/models/portfolio/portfolioPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

export const metadata: Metadata = {
  title: constants.createTitle("Portfolio"),
};

const portfolio: React.FC = () => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <InfoPageImgContainer pages={portfolioPageNum} lang="English" />
    </main>
  );
};
export default portfolio;
