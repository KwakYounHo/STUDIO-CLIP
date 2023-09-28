import { storage } from "@/utils/firebase";
import { getDownloadURL, ref } from "firebase/storage";

export type GetURLParams = {
  pages: {
    page: string
    range: number[]
  }
  lang: string
}
const getDownloadImgURL = async ({ pages, lang }: GetURLParams): Promise<string[]> => {
  let items: string[] = []
  for (const element of pages.range) {
    const requestURL = `/img/info/${lang}/infoPage${element}.png`;
    const imgRef = ref(storage, requestURL);
    try {
      const imgURL = await getDownloadURL(imgRef);
      const item:string = imgURL;
      items.push(item)
    } catch (e) {
      console.error("파일 다운로드 에러 : ", e);
    }
  }
  return items
};

export default getDownloadImgURL;