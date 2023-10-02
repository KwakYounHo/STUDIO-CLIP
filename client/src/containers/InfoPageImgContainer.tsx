"use client";

import * as React from "react";

import InfoPageImgRenderer from "@/components/InfoPageImgRenderer";
import SelectLanguage from "@/components/SelectLanguage";

const InfoPageImgContainer = ({
  imgObject,
}: {
  imgObject: { [key: string]: string[] };
}): React.JSX.Element => {
  const [setLang, setSetLang] = React.useState<string>("en");

  return (
    <>
      {imgObject.ko && imgObject.my && (
        <SelectLanguage setter={setSetLang} className={"w-10/12"} />
      )}
      {imgObject[setLang].map((url) => {
        return <InfoPageImgRenderer url={url} />;
      })}
    </>
  );
};
export default InfoPageImgContainer;
