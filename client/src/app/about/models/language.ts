type AboutLang = {
  [key: string]: {
    subTitle02: string;
    subArticle02: {
      first: string;
      second: string;
    };
    article02: {
      first: string;
      second: string;
      third: string;
      fourth: string;
    };
    article03: {
      first: {
        first: string;
        second: string;
        third: string;
      };
      second: {
        first: string;
        second: string;
        third: string;
      };
      third: {
        first: string;
        second: string;
        third: string;
      };
      fourth: {
        first: string;
        second: string;
      };
      fiveth: {
        first: string;
      };
    };
  };
};

export const aboutPageLanguage: AboutLang = {
  en: {
    subTitle02:
      "With the power of video, Studio Clip aims to outspread the beautiful culture of Myanmar",
    subArticle02: {
      first:
        "We are dedicated to showcasing the diverse narratives of Myanmar through video, striving to convey their profound significance and greatness",
      second:
        "We are committed to support the continuous growth and development of Myanmar",
    },
    article02: {
      first:
        "Based on our production experience in a variety of videos with numerous organizations and companies in Korea, we have produced 100% customized videos from planning to directing, filming and editing with professional skills, using high-end equipment",
      second:
        "As a result, we have completed 317 successful projects in various fields, including promotional videos, public service videos, and educational videos.",
      third:
        "Established in Myanmar under the new name of “Studio Clip”, our mission is to bring joy, evoke emotion with great videos",
      fourth:
        "We plan to create videos that promotes the beautiful culture of Myanmar and the thriving businesses",
    },
    article03: {
      first: {
        first: "the rebel studio",
        second: "founded",
        third: "2020",
      },
      second: {
        first: "Video Production of",
        second: "The Cyber Security Council of",
        third: "The Cultural Heritage Administration",
      },
      third: {
        first: "Video Production For",
        second: "National Research Institute of",
        third: "Cultural Heritage",
      },
      fourth: {
        first: "Samsung Galaxy",
        second: "Event Video",
      },
      fiveth: {
        first: "",
      },
    },
  },
};
