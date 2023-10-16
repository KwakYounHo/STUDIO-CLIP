import * as React from "react";
import { appleSD } from "@/utils/localFontManage";
import { workPageLanguage } from "@/app/work/models/language";

type Props = {
  lang: string;
};

const ContainerBox: React.FC<Props> = ({ lang }) => {
  return (
    <>
      <ul
        className={`${appleSD.className} grid gap-4 md:grid-cols-2 lg:grid-cols-4 relative`}
      >
        <li className={"border-2 border-white/50"}>
          <div className={"pb-4 flex justify-center items-center"}>
            <img src="/work/01.png" alt="work01" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2 capitalize"}>
              {workPageLanguage[lang].contentProduction.title.first}
              <br />
              {workPageLanguage[lang].contentProduction.title.second}
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>{workPageLanguage[lang].contentProduction.first}</p>
            <p>{workPageLanguage[lang].contentProduction.second}</p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/02.png" alt="work02" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2 capitalize"}>
              {workPageLanguage[lang].promotionalVideo.title.first}
              <br />
              {workPageLanguage[lang].promotionalVideo.title.second}
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>{workPageLanguage[lang].promotionalVideo.first}</p>
            <p>{workPageLanguage[lang].promotionalVideo.second}</p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/03.png" alt="work03" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2 capitalize"}>
              <br />
              {workPageLanguage[lang].event.title.second}
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>{workPageLanguage[lang].event.first}</p>
            <p>{workPageLanguage[lang].event.second}</p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/04.png" alt="work04" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2 capitalize"}>
              <br />
              {workPageLanguage[lang].solution.title.second}
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>{workPageLanguage[lang].solution.first}</p>
            <p>{workPageLanguage[lang].solution.second}</p>
          </div>
        </li>
      </ul>
    </>
  );
};
export default ContainerBox;
