import * as React from "react";
import { impact } from "@/utils/localFontManage";
import ContainerBox from "@/app/work/components/containerBox";

type Props = { lang: string };

const WorkPage: React.FC<Props> = ({ lang }) => {
  return (
    <main className={"w-full text-content-text"}>
      <div className="relative w-full p-7 flex flex-col justify-center items-center">
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <div id="title" className={"w-full"}>
            <h1 className={`${impact.className} text-7xl my-10 uppercase`}>
              work
            </h1>
          </div>
          <div className={"bg-page020408 bg-bottom bg-auto relative mb-10"}>
            <div className={"w-full bg-black/70 absolute inset-0"} />
            <ContainerBox lang={lang} />
          </div>
        </div>
      </div>
    </main>
  );
};
export default WorkPage;
