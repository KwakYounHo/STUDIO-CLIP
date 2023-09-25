import * as React from "react";
import { language } from "@/models/language";
import Link from "next/link";

type Props = React.ComponentProps<"div">;

const SelectLanguage: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center text-center mt-4 md:mt-7 w-10/12`}
    >
      <p className={"p-2 md:p-4 w-full border-b-2 border-content-text"}>
        Language
      </p>
      <div className={"grid md: grid-cols-3"}>
        {language.map((lang) => {
          return (
            <React.Fragment key={lang.type}>
              <Link href={`/about/view/${lang.type}`}>
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
