import * as React from "react";

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
        <div className={"relative left-5 font-bold text-xl"}>
          <h1 className={"capitalize"}>the rebel studio</h1>
          <h2 className={"capitalize"}>founded</h2>
          <h3 className={"text-4xl"}>2020</h3>
        </div>
      </div>

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Video Production of</p>
          <p>The Cyber Security Council of</p>
          <p>The Cultural Heritage Administration</p>
        </div>
      </div>

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Video Production For</p>
          <p>National Research Institute of</p>
          <p>Cultural Heritage</p>
        </div>
      </div>

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Samsung Galaxy</p>
          <p>Event Video</p>
        </div>
      </div>

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

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>Military of Korea</p>
          <p>M&S International Conference</p>
        </div>
      </div>

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

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>United Cities &</p>
          <p>Local Government</p>
        </div>
      </div>

      <div className={"flex h-20 items-center"}>
        <div className="rounded-full w-[50px] h-[50px] relative after:content-[''] after:w-[0.1rem] after:absolute after:h-[8rem] after:bg-content-text after:left-1/2 after:-bottom-20 after:-translate-x-1/2 flex justify-center items-center">
          <div className={"bg-white w-[25px] h-[25px] rounded-full"} />
        </div>
        <div className={"relative left-5"}>
          <p>International ConferencKorea</p>
          <p>University Hybrid</p>
        </div>
      </div>

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
