import * as React from "react";
import { aboutPageLanguage } from "@/app/about/models/language";

type Props = React.ComponentProps<"div"> & {
  lang: string;
};

const HistoryBar: React.FC<Props> = ({ className, lang }) => {
  return (
    <div className={`${className ? className : ""} flex flex-col gap-7`}>
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] bg-content-text relative after:content-[''] after:w-[0.1rem] after:absolute after:h-20 after:bg-content-text after:left-1/2 after:-bottom-[4.5rem] after:-translate-x-1/2">
          <div
            className={
              "rounded-full bg-slate-700 w-[25px] h-[25px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            }
          />
        </div>

        {/* 01 */}
        <div className={"relative left-5 font-bold text-xl"}>
          <h1 className={"capitalize"}>
            {aboutPageLanguage[lang].article03.first.first}
          </h1>
          <h2 className={"capitalize"}>
            {aboutPageLanguage[lang].article03.first.second}
          </h2>
          <h3 className={"text-4xl"}>
            {aboutPageLanguage[lang].article03.first.third}
          </h3>
        </div>
      </div>

      {/* 02 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.second.first}</p>
          <p>{aboutPageLanguage[lang].article03.second.second}</p>
          <p>{aboutPageLanguage[lang].article03.second.third}</p>
        </div>
      </div>

      {/* 03 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.third.first}</p>
          <p>{aboutPageLanguage[lang].article03.third.second}</p>
          <p>{aboutPageLanguage[lang].article03.third.third}</p>
        </div>
      </div>

      {/* 04 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.fourth.first}</p>
          <p>{aboutPageLanguage[lang].article03.fourth.second}</p>
        </div>
      </div>

      {/* 05 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.fiveth.first}</p>
          <p>{aboutPageLanguage[lang].article03.fiveth.second}</p>
          <p>{aboutPageLanguage[lang].article03.fiveth.third}</p>
        </div>
      </div>

      {/* 06 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.sixth.first}</p>
          <p>{aboutPageLanguage[lang].article03.sixth.second}</p>
        </div>
      </div>

      {/* 07 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.seventh.first}</p>
          <p>{aboutPageLanguage[lang].article03.seventh.second}</p>
          <p>{aboutPageLanguage[lang].article03.seventh.third}</p>
        </div>
      </div>

      {/* 08 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.eighth.first}</p>
          <p>{aboutPageLanguage[lang].article03.eighth.second}</p>
        </div>
      </div>

      {/* 09 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage[lang].article03.nineth.first}</p>
          <p>{aboutPageLanguage[lang].article03.nineth.second}</p>
        </div>
      </div>

      {/* 10 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] bg-content-text">
          <div
            className={
              "rounded-full bg-slate-700 w-[25px] h-[25px] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            }
          />
        </div>
        <div className={"relative left-5 font-bold text-xl"}>
          <h3 className={"text-4xl"}>
            {aboutPageLanguage[lang].article03.tenth.first}
          </h3>
          <h2 className={"capitalize"}>
            {aboutPageLanguage[lang].article03.tenth.second}
          </h2>
          <h1 className={"capitalize"}>
            {aboutPageLanguage[lang].article03.tenth.third}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HistoryBar;
