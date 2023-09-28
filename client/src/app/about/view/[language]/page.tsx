import * as React from "react";
import { aboutPageNum } from "@/models/about/aboutPage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";
import { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";

type LangProps = {
  params: {
    language: string;
  };
};

export const generateMetadata = async ({
  params,
}: LangProps): Promise<Metadata> => {
  return {
    title: constants.createTitle(`About - ${params.language}`),
  };
};

const Language: React.FC<LangProps> = async ({ params }) => {
  return <InfoPageImgContainer pages={aboutPageNum} lang={params.language} />;
};
export default Language;
