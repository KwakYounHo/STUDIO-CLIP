"use client";

import { header } from "@/models/header/header";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
const HamburgerMenu: React.FC<Props> = () => {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const toggleHamburger = React.useCallback(() => {
    setToggle(!toggle);
  }, [toggle]);

  React.useEffect(() => {
    const closeHamburger = () => {
      setToggle(false);
    };
    addEventListener("closeHamburger", closeHamburger);

    return () => {
      removeEventListener("closeHamburger", closeHamburger);
    };
  }, []);

  return (
    <>
      <button
        title="hamburgerToggle"
        className={"md:hidden"}
        onClick={toggleHamburger}
      >
        <Image
          src={toggle ? "/hamburger_close.svg" : "/hamburger.svg"}
          width={30}
          height={30}
          alt="hamburger"
        />
      </button>
      {toggle && (
        <div
          className={
            "absolute right-0 top-[72px] w-full bg-menu-bg opacity-100 text-sm tracking-tight rounded-b-lg border-t-2 border-t-black z-[9997]"
          }
        >
          <ul className={"uppercase"}>
            {header.nav.map((element, index) => {
              return (
                <Link
                  href={element.url}
                  key={element.id}
                  onClick={toggleHamburger}
                >
                  <li
                    className={
                      index === header.nav.length - 1
                        ? "border-double border-b-4 border-b-black/50 p-3"
                        : "border-b-2 p-3"
                    }
                    key={element.id}
                  >
                    {element.title}
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className={"uppercase"}>
            {header.social.map((element, index) => {
              return (
                <Link href={element.url} target="_blank" key={element.id}>
                  <li
                    className={
                      index === header.social.length - 1
                        ? "p-3"
                        : "border-b-2 p-3"
                    }
                    key={element.id}
                  >
                    {element.id}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
