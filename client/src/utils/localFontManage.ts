import localFont from "next/font/local";

// AppleSDGothicNeo
export const appleSD = localFont({
  src: [
    {
      path: "../app/font/AppleSDGothicNeoT.ttf",
      weight: "100",
    },
    {
      path: "../app/font/AppleSDGothicNeoUL.ttf",
      weight: "200",
    },
    {
      path: "../app/font/AppleSDGothicNeoL.ttf",
      weight: "300",
    },
    {
      path: "../app/font/AppleSDGothicNeoR.ttf",
      weight: "400",
    },
    {
      path: "../app/font/AppleSDGothicNeoM.ttf",
      weight: "500",
    },
    {
      path: "../app/font/AppleSDGothicNeoSB.ttf",
      weight: "600",
    },
    {
      path: "../app/font/AppleSDGothicNeoB.ttf",
      weight: "700",
    },
    {
      path: "../app/font/AppleSDGothicNeoEB.ttf",
      weight: "800",
    },
    {
      path: "../app/font/AppleSDGothicNeoH.ttf",
      weight: "900",
    },
  ],
  display: "swap",
});

// Impact
export const impact = localFont({
  src: "../app/font/Impact.ttf",
  display: "swap",
});
