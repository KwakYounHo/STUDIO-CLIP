import * as React from "react";

import getDownloadImgURL, {
  GetURLParams,
} from "@/utils/infoPageImgGetDownloadURL";
import InfoPageImgRenderer from "@/components/InfoPageImgRenderer";

const InfoPageImgContainer = async ({
  pages,
  lang,
}: GetURLParams): Promise<React.JSX.Element> => {
  const items = await getDownloadImgURL({ pages, lang });
  return (
    <>
      {items.map((items) => (
        <InfoPageImgRenderer url={items} key={items} />
      ))}
    </>
  );
};
export default InfoPageImgContainer;
