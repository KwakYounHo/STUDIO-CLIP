import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";
import { aboutPageNum } from "@/models/about/aboutPage";
import InfoPageImgContainer from "@/containers/InfoPageImgContainer";

export const metadata: Metadata = {
  title: constants.createTitle("About"),
};

const About: React.FC = () => {
  return <InfoPageImgContainer pages={aboutPageNum} />;
};
export default About;
