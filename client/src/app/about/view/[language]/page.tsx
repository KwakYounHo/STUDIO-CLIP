"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { aboutPageNum } from "@/models/about/aboutPage";
import SelectLanguage from "@/utils/SelectLanguage";
import Image from "next/image";
import ImageRenderer from "@/utils/imageRenderer";

const Language: React.FC = () => {
  const pathname = usePathname();
  const language = pathname.split("/")[3]

  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"about"} className={"w-10/12"} />
      <ImageRenderer page={aboutPageNum} lang={language} />
    </main>
  );
};
export default Language;
