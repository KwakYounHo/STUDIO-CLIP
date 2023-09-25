"use client";

import * as React from "react";
import Image from "next/image";
import { workPageNum } from "@/models/work/workPage";
import SelectLanguage from "@/utils/SelectLanguage";
import { usePathname } from "next/navigation";

const Work: React.FC = () => {
  const pathname = usePathname();

  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"work"} className={"w-10/12"} />
      {workPageNum.range.map((element) => {
        return (
          <Image
            src={`/info/${pathname.split("/")[3]}/infoPage${element}.png`}
            width={2160}
            height={1495}
            alt={`${element}page IMG`}
            key={element}
            className={"w-screen"}
            priority
          />
        );
      })}
    </main>
  );
};
export default Work;
