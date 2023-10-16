"use client";

import * as React from "react";
import WorkPage from "@/app/work/components/workPage";
import SelectLanguage from "@/components/SelectLanguage";

const WorkContainer: React.FC = () => {
  const [lang, setLang] = React.useState<string>("en");
  return (
    <>
      <SelectLanguage setter={setLang} className={"text-white"} />
      <WorkPage lang={lang} />
    </>
  );
};
export default WorkContainer;
