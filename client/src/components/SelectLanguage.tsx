import * as React from "react";
import { language } from "@/models/language";
import toast from "react-hot-toast";

type Props = React.ComponentProps<"div"> & {
  setter: React.Dispatch<React.SetStateAction<string>>;
};

const SelectLanguage: React.FC<Props> = ({ className, setter }) => {
  return (
    <div
      className={`${className} flex flex-col justify-center items-center text-center mt-4 md:mt-7`}
    >
      <p
        className={
          "w-full border-b-2 border-content-text font-bold text-xl p-2"
        }
      >
        Language
      </p>
      <div className={"flex gap-7 py-2"}>
        {language.map((lang) => {
          const onClickHandle = (): void => {
            setter(lang.shortcut);
            toast.success(`Toggled Language: ${lang.langName}`);
          };
          return (
            <React.Fragment key={lang.type}>
              <button onClick={onClickHandle}>
                <p>{lang.langName}</p>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
export default SelectLanguage;
