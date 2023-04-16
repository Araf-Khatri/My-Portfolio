import { FC, useEffect, useRef, useState } from "react";
import Section from "./section-components/section";
import { TbSunFilled, TbMoonFilled } from "react-icons/tb";

import Logo from "./../Assets/nav-logo.png";

interface Link {
  linkName: String;
  navigateTo: String;
}

interface NavProps {
  theme: String;
  setTheme: Function;
}

const Navbar: FC<NavProps> = ({ theme, setTheme }: NavProps) => {
  const [navBackground, setNavBackground] = useState(false);

  const navigationLink: Link[] = [
    {
      linkName: "Home",
      navigateTo: "home",
    },
    {
      linkName: "Experience",
      navigateTo: "experience",
    },
    {
      linkName: "Projects",
      navigateTo: "projects",
    },
    {
      linkName: "Achievements",
      navigateTo: "achievements",
    },
  ];

  //border-b-[1px] border-blurr-600

  return (
    <div
      className={`navbar sticky z-50 top-0 backdrop-blur-sm ${
        theme === "LIGHT" ? "bg-primary-100" : "bg-primary-1000"
      } transition-all `}
    >
      <Section classname={"py-1"}>
        <div className="flex justify-between items-center">
          <img src={Logo} alt={"araf-logo"} className={" h-14"} />
          <div className="flex gap-16 items-center">
            <div className="flex gap-10 items-center">
              {navigationLink.map(({ linkName, navigateTo }: Link) => (
                <a key={linkName + "1"} href={`#${navigateTo}`}>
                  {linkName}
                </a>
              ))}
            </div>
            <div
              onClick={() => setTheme()}
              className={`grid place-items-center p-2 rounded-full ${
                theme === "LIGHT" ? "bg-primary-200" : "bg-primary-900"
              }`}
            >
              {theme === "LIGHT" ? (
                <TbSunFilled className="h-5 w-5" />
              ) : (
                <TbMoonFilled className="h-5 w-5" />
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Navbar;
