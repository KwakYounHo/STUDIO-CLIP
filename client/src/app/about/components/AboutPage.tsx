import * as React from "react";
import { appleSD, impact } from "@/utils/localFontManage";

const AboutPage: React.FC = async () => {
  return (
    <main className={"container p-4 md:p-0 text-white"}>
      {/* page1 */}
      <div id="page01" className={"infoDetailPage flex flex-col gap-14"}>
        <div id="title01" className={"text-center"}>
          <h1 className={`${impact.className} text-7xl`}>studio clip</h1>
          <h2
            className={`${impact.className} uppercase text-2xl font-light tracking-[2.2rem] leading-none ml-6`}
          >
            myanmar
          </h2>
        </div>
        <div id="subTitle01" className={`${appleSD.className} text-center`}>
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
      <div id="page02" className={"infoDetailPage"}>
        <div id="title02">
          <h1 className={"uppercase text-7xl"}>vision & mission</h1>
        </div>
        <div id="subTitle02">
          <h2>
            With the power of video, Studio Clip aims to outspread the beautiful
            culture of Myanmar
          </h2>
        </div>
        <div id="subArticle02">
          <p>
            We are dedicated to showcasing the diverse narratives of Myanmar
            through video, striving to convey their profound significance and
            greatness
          </p>
          <p>
            We are committed to support the continuous growth and development of
            Myanmar
          </p>
        </div>
        <div id="article02">
          <p>
            Based on our production experience in a variety of videos with
            numerous organizations and companies in Korea, we have produced 100%
            customized videos from planning to directing, filming and editing
            with professional skills, using high-end equipment
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

      {/* page3 */}
      <div id="page03" className={"infoDetailPage"}>
        <div id="title03">
          <h1 className={"uppercase"}>history</h1>
        </div>
        <div id="article03">
          <div>
            <h1 className={"capitalize"}>the rebel studio</h1>
            <h2 className={"capitalize"}>founded</h2>
            <h3>2020</h3>
          </div>
          <div>
            <p>Video Production of</p>
            <p>The Cyber Security Council of</p>
            <p>The Cultural Heritage Administration</p>
          </div>
          <div>
            <p>Video Production For</p>
            <p>National Research Institute of</p>
            <p>Cultural Heritage</p>
          </div>
          <div>
            <p>Samsung Galaxy</p>
            <p>Event Video</p>
          </div>
          <div>
            <p>Video Production For</p>
            <p>The Ministry of</p>
            <p>Health & Welfare</p>
          </div>
          <div>
            <p>Military of Korea</p>
            <p>M&S International Conference</p>
          </div>
          <div>
            <p>Promotional Video Production For</p>
            <p>The Biographical Novel of</p>
            <p>the 18th President of Korea</p>
          </div>
          <div>
            <p>United Cities &</p>
            <p>Local Government</p>
          </div>
          <div>
            <p>International ConferencKorea</p>
            <p>University Hybrid</p>
          </div>
          <div>
            <h3>2023</h3>
            <h2 className={"capitalize"}>founding of</h2>
            <h1 className={"capitalize"}>studio clip myanmar</h1>
          </div>
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
      <div id="page04" className={"infoDetailPage"}>
        <div id="title04">
          <h1 className={"uppercase"}>customer</h1>
        </div>
        <div id="enName">
          <p>
            Cheongju Broadcasting Co., Ltd. | DAEJEON METROPOLITAN CITY | Gongju
            City | Korea University
          </p>
          <p>
            WOOSONG UNIVERSITY | KEPCO NUCLEAR FUEL | DAEJEON INSTITUTE OF
            DESIGN PROMOTION | Korea Population, Health and Welfare Association
          </p>
          <p>
            Statistical Office | Cultural Heritage Administration | Customs
            Service| Ministry of Oceans and Fisheries | National Library of
            Korea, Sejong
          </p>
        </div>
      </div>

      {/* page5 */}
      <div id="page05" className={"infoDetailPage flex flex-col gap-14"}>
        <div id="title05" className={"text-center"}>
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
          <div className={"text-sm px-7 py-2"}>
            <p>https://studioclip.video</p>
            <p>https://facebook.com/studioclip.Official</p>
            <p>09 88413 9136</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AboutPage;
