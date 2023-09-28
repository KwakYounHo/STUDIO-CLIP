import * as React from "react";
import { workPageNum } from "@/models/work/workPage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";
import { constants } from "@/app/common/domain/models/headTitle";
import { Metadata } from "next";

type LangProps = {
  params: {
    language: string;
  };
};

export const generateMetadata = async ({
  params,
}: LangProps): Promise<Metadata> => {
  return {
    title: constants.createTitle(`work - ${params.language}`),
  };
};

const Work: React.FC<LangProps> = ({ params }) => {
  return <InfoPageImgContainer pages={workPageNum} lang={params.language} />;
};
export default Work;
