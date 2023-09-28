import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import * as React from "react";

import StudioHeader from "@comp/Header/Header";
import StudioFooter from "@comp/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const RootLayout = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <StudioHeader />
          {children}
        <StudioFooter />
        <Toaster containerClassName="z-9999" position="bottom-left" />
      </body>
    </html>
  );
};
export default RootLayout;
