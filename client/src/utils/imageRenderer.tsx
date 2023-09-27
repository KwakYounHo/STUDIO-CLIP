"use client";

import * as React from "react";
import Image from "next/image";

import { storage } from "@/utils/firebase";
import { getDownloadURL, ref } from "firebase/storage";

type Props = {
  page: { range: number[] };
  lang: string;
};
type forRenderObject = {
  url: string;
  isLoad: boolean;
};

const ImageRenderer: React.FC<Props> = ({ page, lang }) => {
  const [imgURLs, setImgURLs] = React.useState<forRenderObject[]>([]);

  // fetch Image
  React.useEffect(() => {
    const fetchIMG = async () => {
      for (const element of page.range) {
        const requestURL = `/img/info/${lang}/infoPage${element}.png`;
        const imgRef = ref(storage, requestURL);
        try {
          const imgURL = await getDownloadURL(imgRef);
          const item: forRenderObject = {
            url: imgURL,
            isLoad: false,
          };
          setImgURLs((prevItem) => [...prevItem, item]);
        } catch (e) {
          console.error("파일 다운로드 에러 : ");
        }
      }
    };
    fetchIMG();
  }, []);

  return (
    <>
      {imgURLs.map((element) => {
        return (
          <div key={element.url}>
            <Image
              src={element.url}
              width={2160}
              height={1495}
              alt={"aboutPageIMG"}
              className={"w-screen"}
              priority
            />
          </div>
        );
      })}
    </>
  );
};
export default ImageRenderer;
