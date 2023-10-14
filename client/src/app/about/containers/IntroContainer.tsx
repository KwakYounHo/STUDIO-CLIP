"use client";

import * as React from "react";
import SelectLanguage from "@/components/SelectLanguage";
import AboutPage from "@/app/about/components/AboutPage";

const IntroContainer: React.FC = () => {
  const [lang, setLang] = React.useState<string>("en");
  return (
    <>
      <SelectLanguage setter={setLang} className={"text-white"} />
      <AboutPage lang={lang} />
    </>
  );
};
export default IntroContainer;
