import * as React from "react";
import { language } from "@/models/language";
import Link from "next/link";

type Props = React.ComponentProps<"div"> & {
  page: string
};

const SelectLanguage: React.FC<Props> = ({ className, page }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center text-center mt-4 md:mt-7`}
    >
      <p className={"w-full border-b-2 border-content-text font-bold text-xl p-2"}>
        Language
      </p>
      <div className={"flex"}>
        {language.map((lang) => {
          return (
            <React.Fragment key={lang.type}>
              <Link href={`/${page}/view/${lang.type}`}>
                <p className={"p-2 md:p-4"}>{lang.langName}</p>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default SelectLanguage;
