import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import StudioHeader from "@comp/Header/Header";
import StudioFooter from "@comp/Footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="my">
      <body className={`${inter.className}`}>
        <StudioHeader />
        {children}
        <StudioFooter />
        <Toaster
          containerClassName="z-9999"
        />
      </body>
    </html>
  );
}
