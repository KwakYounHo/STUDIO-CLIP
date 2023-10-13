import * as React from "react";
import { impact, appleSD } from "@/utils/localFontManage";

type Props = {
  subTitle: string;
  imgWrap: string;
};

const PortContainer: React.FC<Props> = ({ subTitle, imgWrap }) => {
  return (
    <div className={"text-white p-8"}>
      <div className={"flex flex-col md:flex-row md:gap-10 md:items-end mb-8"}>
        <h1 className={`${impact.className} text-7xl uppercase`}>portfolio</h1>
        <h2 className={`${appleSD.className} text-3xl font-semibold md:pb-1`}>
          {subTitle}
        </h2>
      </div>

      <ul className={"grid gap-10 lg:grid-cols-3 py-8 md:p-8"}>
        <li>
          <img src={`/portfolio/${imgWrap}/01.png`} alt={`${imgWrap}01`} />
        </li>
        <li>
          <img src={`/portfolio/${imgWrap}/02.png`} alt={`${imgWrap}02`} />
        </li>
        <li>
          <img src={`/portfolio/${imgWrap}/03.png`} alt={`${imgWrap}03`} />
        </li>
        <li>
          <img src={`/portfolio/${imgWrap}/04.png`} alt={`${imgWrap}04`} />
        </li>
        <li>
          <img src={`/portfolio/${imgWrap}/05.png`} alt={`${imgWrap}05`} />
        </li>
        <li>
          <img src={`/portfolio/${imgWrap}/06.png`} alt={`${imgWrap}06`} />
        </li>
      </ul>
    </div>
  );
};
export default PortContainer;
