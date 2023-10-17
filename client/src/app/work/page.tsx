import * as React from "react";
import type { Metadata } from "next";
import { constants } from "@/app/common/domain/models/headTitle";

import WorkContainer from "@/app/work/containers/workContainer";

export const metadata: Metadata = {
  title: constants.createTitle("Work"),
};

const Work: React.FC = () => {
  return <WorkContainer />;
};
export default Work;
