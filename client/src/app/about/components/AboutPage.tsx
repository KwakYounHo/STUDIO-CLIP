import * as React from "react";
import { aboutPageLanguage } from "@/app/about/models/language";
import HistoryBar from "@/app/about/components/HistoryBar";
import CustomerImg from "@/app/about/components/CustomerImg";
import FirstPage from "@/app/about/components/FirstPage";
import { appleSD, impact } from "@/utils/localFontManage";

type Props = {
  lang: string;
};
const AboutPage: React.FC<Props> = ({ lang }) => {
  return (
    <>
      <main className={`container p-4 md:p-0 text-white ${appleSD.className}`}>
        {/* page1 */}
        <div
          id="page01"
          className={
            "infoDetailPage flex flex-col gap-14 bg-AboutPage01 bg-cover bg-top bg-no-repeat h-[1000px]"
          }
        >
          <FirstPage />
        </div>

        {/* page2 */}
        <div
          id="page02"
          className={
            "infoDetailPage bg-page020408 bg-cover bg-bottom bg-no-repeat relative"
          }
        >
          <div className={"bg-black/50 absolute inset-0"} />
          <div
            className={"relative lg:flex lg:gap-3 justify-center items-center"}
          >
            <div className={"flex flex-col gap-7 lg:gap-12 max-w-[768px] p-2"}>
              <div
                id="title02"
                className={"text-center mt-10 w-full flex flex-col gap-7"}
              >
                <h1
                  className={`text-7xl font-bold uppercase ${impact.className}`}
                >
                  vision & mission
                </h1>
              </div>
              <div id="subTitle02" className={`text-center font-semibold`}>
                <h2
                  className={`before:content-['"'] before:text-appleSD before:text-4xl before:relative before:top-2 before:mr-3 before:leading-none after:content-['"'] after:text-appleSD after:text-4xl after:relative after:top-2 after:ml-3 after:leading-none text-2xl lg:text-3xl`}
                >
                  {aboutPageLanguage[lang].subTitle02.first}
                  <br />
                  {aboutPageLanguage[lang].subTitle02.second}
                </h2>
              </div>
              <div
                id="subArticle02"
                className={`flex flex-col gap-3 text-center lg:text-xl`}
              >
                <p>{aboutPageLanguage[lang].subArticle02.first}</p>
                <p>{aboutPageLanguage[lang].subArticle02.second}</p>
              </div>
              <div
                id="article02"
                className={`flex flex-col gap-3 bg-white/25 p-3 text-center mb-10 max-w-[970px]`}
              >
                <p>{aboutPageLanguage[lang].article02.first}</p>
                <p>{aboutPageLanguage[lang].article02.second}</p>
                <p>{aboutPageLanguage[lang].article02.third}</p>
                <p>{aboutPageLanguage[lang].article02.fourth}</p>
              </div>
            </div>
            <div
              className={
                "md:grid md:grid-cols-3 lg:grid-cols-1 lg:w-1/4 lg:gap-4 lg:justify-between"
              }
            >
              <img src="/vissionMission/01.png" alt="vissionMission1" />
              <img src="/vissionMission/02.png" alt="vissionMission2" />
              <img src="/vissionMission/03.png" alt="vissionMission3" />
            </div>
          </div>
        </div>

        {/* page3 */}
        <div id="page03" className={"infoDetailPage gap-7"}>
          <div id="title03">
            <h1 className={`uppercase ${impact.className} text-7xl mb-12`}>
              history
            </h1>
          </div>
          <div
            id="article03"
            className={
              "grid lg:grid-cols-3 gap-5 lg:gap-0 justify-center items-center"
            }
          >
            <div className="grid grid-cols-3 lg:grid-cols-1 lg:gap-24">
              <img src="/history/01.png" alt="history1" />
              <img src="/history/02.png" alt="history2" />
              <img src="/history/03.png" alt="history3" />
            </div>
            <div className={"flex justify-center"}>
              <HistoryBar lang={lang} />
            </div>
            <div className="grid grid-cols-3 lg:grid-cols-1 lg:gap-24">
              <img src="/history/04.png" alt="history4" />
              <img src="/history/05.png" alt="history5" />
              <img src="/history/06.png" alt="history6" />
            </div>
          </div>
          <div id="subTitle03" className={"text-center md:text-xl"}>
            <p>{aboutPageLanguage[lang].subTitle03.first}</p>
            <p>{aboutPageLanguage[lang].subTitle03.second}</p>
          </div>
        </div>

        {/* page4 */}
        <div
          id="page04"
          className={
            "infoDetailPage bg-page020408 bg-cover bg-bottom bg-no-repeat relative"
          }
        >
          <div className={"absolute bg-black/50 inset-0"} />
          <div className={"relative w-full flex flex-wrap gap-7"}>
            <div id="title04" className={"mt-10 text-center w-full"}>
              <h1 className={`uppercase ${impact.className} text-7xl`}>
                {aboutPageLanguage[lang].title04}
              </h1>
            </div>
            <div
              id="enName"
              className={"flex flex-col gap-2 text-center w-full"}
            >
              <p>{aboutPageLanguage[lang].customerName.first}</p>
              <p>{aboutPageLanguage[lang].customerName.second}</p>
              <p>{aboutPageLanguage[lang].customerName.third}</p>
            </div>
            <div className={"carouselWrap w-full mb-10"}>
              <CustomerImg />
            </div>
          </div>
        </div>

        {/* page5 */}
        <div
          id="page05"
          className={
            "infoDetailPage relative flex flex-col gap-14 bg-aboutEnd bg-cover bg-top bg-no-repeat h-[1000px]"
          }
        >
          <div className={"absolute inset-0 bg-black/50"} />
          <FirstPage />
        </div>
      </main>
    </>
  );
};
export default AboutPage;
