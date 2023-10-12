import * as React from "react";
import { constants } from "@/app/common/domain/models/headTitle";
import type { Metadata } from "next";

import PortContainer from "@/app/portfolio/components/PortContainer";

export const metadata: Metadata = {
  title: constants.createTitle("Portfolio"),
};

const Portfolio: React.FC = () => {
  return (
    <main>
      <ul>
        <li>
          <PortContainer
            subTitle="Entertainment & SNS Contents"
            imgWrap="enterSns"
          />
        </li>
        <li>
          <PortContainer
            subTitle="Public Organization/ Companies"
            imgWrap="publicComp"
          />
        </li>
        <li>
          <PortContainer subTitle="Interview / Event" imgWrap="interEvent" />
        </li>
      </ul>
    </main>
  );
};
export default Portfolio;
