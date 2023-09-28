import * as React from "react";
import { workPageNum } from "@/models/work/workPage";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

export const metadata: Metadata = {
  title: constants.createTitle("Work"),
};

const Work: React.FC = () => {
  return <InfoPageImgContainer pages={workPageNum} />;
};
export default Work;
