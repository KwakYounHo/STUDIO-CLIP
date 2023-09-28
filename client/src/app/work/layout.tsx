import * as React from "react";
import SelectLanguage from "@/utils/SelectLanguage";

const AboutLayout = async ({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.JSX.Element> => {
  return (
    <main
      className={
        "flex flex-col gap-10 items-center justify-center text-content-text"
      }
    >
      <SelectLanguage page={"work"} className={"w-10/12"} />
      {children}
    </main>
  );
};
export default AboutLayout;
