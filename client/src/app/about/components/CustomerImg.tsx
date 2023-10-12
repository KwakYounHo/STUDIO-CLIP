"use client";

import * as React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./customerImg.css";

const imgURLs: string[] = [
  "고려대학교",
  "공주시",
  "관세청",
  "국립세종도서관",
  "대전광역시",
  "대전디자인진흥원",
  "문화재청",
  "우송대학교",
  "인구보건복지협회",
  "통계청",
  "한전원자력연료",
  "해양수산부",
  "CJB",
];

const options = {
  rows: 1,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  centerMode: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  speed: 3000,
  variableWidth: true,
};

const CustomerImg: React.FC = () => {
  return (
    <>
      <div className="bg-white/75 py-2">
        <Slider {...options}>
          {imgURLs.map((e: string) => {
            return (
              <img src={`/customer/${e}.svg`} alt="Customer IMG" key={e} />
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default CustomerImg;
