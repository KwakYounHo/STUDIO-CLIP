import * as React from "react";
import { appleSD, impact } from "@/utils/localFontManage";

import HistoryBar from "@/app/about/components/HistoryBar";
import CustomerImg from "@/app/about/components/CustomerImg";

import "@/app/about/test/about.css";

const Test: React.FC = async () => {
  return (
    <main className={`container p-4 md:p-0 text-white ${appleSD.className}`}>
      {/* page1 */}
      <div
        id="page01"
        className={
          "infoDetailPage flex flex-col gap-14 bg-AboutPage01 bg-cover bg-top bg-no-repeat"
        }
      >
        <div id="title01" className={"text-center mt-10"}>
          <h1 className={`${impact.className} text-7xl`}>studio clip</h1>
          <h2
            className={`${impact.className} uppercase text-2xl font-light tracking-[2.2rem] leading-none ml-6`}
          >
            myanmar
          </h2>
        </div>
        <div id="subTitle01" className={`text-center mb-10`}>
          <p className={"text-xl"}>STUDIO CLIP Corp.</p>
          <p className={"capitalize px-7 py-2 mt-2"}>
            Royal Mg Bamar Residence, Dhamar Yone Street, Hlaing, Yangon,
            Myanmar
          </p>
          <div className={"text-sm px-7 py-2"}>
            <p>https://studioclip.video</p>
            <p>https://facebook.com/studioclip.Official</p>
            <p>09 88413 9136</p>
          </div>
        </div>
      </div>

      {/* page2 */}
      <div
        id="page02"
        className={
          "infoDetailPage bg-page020408 bg-cover bg-bottom bg-no-repeat relative"
        }
      >
        <div className={"bg-black/50 absolute inset-0"} />
        <div className={"relative flex flex-col gap-7"}>
          <div id="title02" className={"text-center mt-10 w-full"}>
            <h1 className={`text-7xl font-bold uppercase ${impact.className}`}>
              vision & mission
            </h1>
          </div>
          <div id="subTitle02" className={`text-center font-semibold`}>
            <h2
              className={`before:content-['"'] before:text-appleSD before:text-4xl before:relative before:top-2 before:mr-3 before:leading-none after:content-['"'] after:text-appleSD after:text-4xl after:relative after:top-2 after:ml-3 after:leading-none text-2xl`}
            >
              With the power of video, Studio Clip aims to outspread the
              beautiful culture of Myanmar
            </h2>
          </div>
          <div
            id="subArticle02"
            className={`flex flex-col gap-3 text-center ${appleSD.className}`}
          >
            <p>
              We are dedicated to showcasing the diverse narratives of Myanmar
              through video, striving to convey their profound significance and
              greatness
            </p>
            <p>
              We are committed to support the continuous growth and development
              of Myanmar
            </p>
          </div>
          <div
            id="article02"
            className={`flex flex-col gap-3 bg-white/25 p-3 text-center ${appleSD.className} mb-10`}
          >
            <p>
              Based on our production experience in a variety of videos with
              numerous organizations and companies in Korea, we have produced
              100% customized videos from planning to directing, filming and
              editing with professional skills, using high-end equipment
            </p>
            <p>
              As a result, we have completed 317 successful projects in various
              fields, including promotional videos, public service videos, and
              educational videos.
            </p>
            <p>
              Established in Myanmar under the new name of “Studio Clip”, our
              mission is to bring joy, evoke emotion with great videos
            </p>
            <p>
              We plan to create videos that promotes the beautiful culture of
              Myanmar and the thriving businesses
            </p>
          </div>
        </div>
      </div>

      {/* page3 */}
      <div id="page03" className={"infoDetailPage gap-20"}>
        <div id="title03">
          <h1 className={`uppercase ${impact.className} text-7xl`}>history</h1>
        </div>
        <div id="article03">
          <HistoryBar />
        </div>
        <div id="subTitle03">
          <p>
            “Studio Clip” aims to help contribute the video technicians and
            everyone who want to
          </p>
          <p>
            cultivate video production skill through education and promote
            themselves
          </p>
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
              customer
            </h1>
          </div>
          <div id="enName" className={"flex flex-col gap-2 text-center w-full"}>
            <p>
              Cheongju Broadcasting Co., Ltd. | DAEJEON METROPOLITAN CITY |
              Gongju City | Korea University
            </p>
            <p>
              WOOSONG UNIVERSITY | KEPCO NUCLEAR FUEL | DAEJEON INSTITUTE OF
              DESIGN PROMOTION | Korea Population, Health and Welfare
              Association
            </p>
            <p>
              Statistical Office | Cultural Heritage Administration | Customs
              Service| Ministry of Oceans and Fisheries | National Library of
              Korea, Sejong
            </p>
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
          "infoDetailPage flex flex-col gap-14 bg-AboutPage01 bg-cover bg-bottom bg-no-repeat"
        }
      >
        <div id="title05" className={"text-center mt-10"}>
          <h1 className={`${impact.className} text-7xl`}>studio clip</h1>
          <h2
            className={`${impact.className} uppercase text-2xl font-light tracking-[2.2rem] leading-none ml-6`}
          >
            myanmar
          </h2>
        </div>
        <div id="subTitle05" className={`${appleSD.className} text-center`}>
          <p className={"text-xl"}>STUDIO CLIP Corp.</p>
          <p className={"capitalize px-7 py-2 mt-2"}>
            Royal Mg Bamar Residence, Dhamar Yone Street, Hlaing, Yangon,
            Myanmar
          </p>
          <div className={"text-sm px-7 py-2 mb-10"}>
            <p>https://studioclip.video</p>
            <p>https://facebook.com/studioclip.Official</p>
            <p>09 88413 9136</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Test;
