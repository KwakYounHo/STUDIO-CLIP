import * as React from "react";
import { constants } from "@/app/common/domain/models/headTitle";
import type { Metadata } from "next";

import IntroContainer from "@/app/about/containers/IntroContainer";

import "@/app/about/test/about.css";

export const metadata: Metadata = {
  title: constants.createTitle("About"),
};

const About: React.FC = async () => {
  return <IntroContainer />;
};
export default About;
