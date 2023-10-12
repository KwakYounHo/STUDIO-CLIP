import * as React from "react";
import { appleSD } from "@/utils/localFontManage";

const ContainerBox: React.FC = () => {
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
            <h1 className={"font-bold text-3xl pl-4 pr-2"}>
              Content
              <br />
              Production
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>
              Our ultimate goal is to discover influencers, create interesting
              and enjoyable songs, game, food and produce contents related
              Myanmar culture and informative insights, provide
            </p>
            <p>
              opportunities to share their talents and spread joy with
              enlightening experiences to the audience
            </p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/02.png" alt="work02" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2"}>
              Promotional
              <br />
              Video
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>
              Through the promotional videos of various Myanmar companies,
              organizations and tourist
            </p>
            <p>
              attractions, we are dedicated to produce videos that allow more
              people to help discover their quality and image.
            </p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/03.png" alt="work03" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2"}>
              <br />
              Event
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>
              Studio Clip specialized in event planning and hosting for game
              contest, events and shows that make one's normal daily life
              extraordinary
            </p>
          </div>
        </li>

        <li className={"bg-gray border-2 border-white/50"}>
          <div className={"pb-4"}>
            <img src="/work/04.png" alt="work04" className={"p-4"} />
          </div>
          <div className={"border-b-2 border-b-white inline-block mb-8"}>
            <h1 className={"font-bold text-3xl pl-4 pr-2"}>
              <br />
              Solution
            </h1>
          </div>
          <div className={"px-4 pb-4 text-lg"}>
            <p>
              With our expertise by working with numerous companies in Korea, we
              devoted to offer promotional and marketing strategies for the
              outstanding Myanmar companies, aspiring to enter the Korean
              market. Additionally, we also provide support for the local
              expansion of numerous Korean businesses wishing to enter Myanmar
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};
export default ContainerBox;
