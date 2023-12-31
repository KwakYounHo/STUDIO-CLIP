import Link from "next/link";
import Image from "next/image";
import { header } from "@/models/header/header";
import HamburgerMenu from "@/components/Header/Adapter/hamburger";
import Logo from "@comp/Header/components/Logo";

export default function StudioHeader() {
  return (
    <header>
      {/* logo */}
      <div className={`p-2 select-none`}>
        <Logo />
      </div>
      {/* hamburger menu */}
      <HamburgerMenu />
      {/* navigation */}
      <nav>
        {/* main title */}
        {header.nav.map((element) => {
          return (
            <Link href={element.url} key={element.id}>
              {element.title}
            </Link>
          );
        })}
        {/* sub title */}
        <div className="subTitle absolute left-0 top-20 invisible">
          {header.nav.map((element) => {
            if (element.subTitle) {
              return (
                <ul className={element.id+'SubTitle capitalize'} key={element.id}>
                  {element.subTitle.map((subTitle, index) => {
                    return (
                      <li key={subTitle.title}>
                        <Link href={subTitle.url} key={subTitle.title}>
                          <span>{subTitle.title}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            }
          })}
        </div>
      </nav>
      {/* social icons */}
      <div
        className={
          "hidden md:flex md:space-x-1 lg:flex lg:space-x-5 items-center"
        }
      >
        {header.social.map((element) => {
          return (
            <Link
              href={element.url}
              key={element.id}
              target={"_blank"}
              className={
                "relative w-[50px] h-[50px] hover:scale-105 group duration-300"
              }
            >
              {
                <div>
                  <Image
                    src={element.blackIcon}
                    width={element.width}
                    height={element.height}
                    alt={element.id}
                    className={
                      "rounded-lg absolute group-hover:opacity-0 duration-300"
                    }
                  />
                  <Image
                    src={element.colorIcon}
                    width={element.width}
                    height={element.height}
                    alt={element.id}
                    className={
                      "rounded-lg opacity-0 absolute group-hover:opacity-100 duration-300"
                    }
                  />
                </div>
              }
            </Link>
          );
        })}
      </div>
    </header>
  );
}
