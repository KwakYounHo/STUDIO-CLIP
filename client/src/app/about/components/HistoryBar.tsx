import * as React from "react";
import { aboutPageLanguage } from "@/app/about/models/language";

type Props = React.ComponentProps<"div"> & {};

const HistoryBar: React.FC<Props> = ({ className }) => {
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
            {aboutPageLanguage.en.article03.first.first}
          </h1>
          <h2 className={"capitalize"}>
            {aboutPageLanguage.en.article03.first.second}
          </h2>
          <h3 className={"text-4xl"}>
            {aboutPageLanguage.en.article03.first.third}
          </h3>
        </div>
      </div>

      {/* 02 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage.en.article03.second.first}</p>
          <p>{aboutPageLanguage.en.article03.second.second}</p>
          <p>{aboutPageLanguage.en.article03.second.third}</p>
        </div>
      </div>

      {/* 03 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage.en.article03.third.first}</p>
          <p>{aboutPageLanguage.en.article03.third.second}</p>
          <p>{aboutPageLanguage.en.article03.third.third}</p>
        </div>
      </div>

      {/* 04 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>{aboutPageLanguage.en.article03.fourth.first}</p>
          <p>{aboutPageLanguage.en.article03.fourth.second}</p>
        </div>
      </div>

      {/* 05 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Video Production For</p>
          <p>The Ministry of</p>
          <p>Health & Welfare</p>
        </div>
      </div>

      {/* 06 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Military of Korea</p>
          <p>M&S International Conference</p>
        </div>
      </div>

      {/* 07 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Promotional Video Production For</p>
          <p>The Biographical Novel of</p>
          <p>the 18th President of Korea</p>
        </div>
      </div>

      {/* 08 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>United Cities &</p>
          <p>Local Government</p>
        </div>
      </div>

      {/* 09 */}
      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>International ConferencKorea</p>
          <p>University Hybrid</p>
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
          <h3 className={"text-4xl"}>2023</h3>
          <h2 className={"capitalize"}>founding of</h2>
          <h1 className={"capitalize"}>studio clip myanmar</h1>
        </div>
      </div>
    </div>
  );
};
export default HistoryBar;
