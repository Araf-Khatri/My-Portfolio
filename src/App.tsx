import { FC, useEffect, useState } from "react";
import Navbar from "./Components/navbar";
import ExperienceSection from "./Layout/experience-section";

import Introduction from "./Layout/introduction";
import ProjectsSection from "./Layout/projects-section";
import AchievementAndCertificationSection from "./Layout/achievements-and-certification-section";
import View from "./View";
import ConnectSection from "./Layout/connect-section";
import Section from "./Components/section-components/section";

const App: FC = () => {
  const [theme, setTheme] = useState<string>("light");

  const changeThemeHandler = () => {
    const localTheme: string | null = localStorage.getItem("theme");
    if (localTheme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme: string | null = localStorage.getItem("theme");
    if (!localTheme) {
      localStorage.setItem("theme", "light");
      return;
    }
    setTheme(localTheme);
  }, []);

  return (
    <div
      className={`${theme} relative ${
        theme === "light"
          ? "bg-primary-100 text-primary-900"
          : "bg-primary-1000 text-primary-100"
      } scrollbar-thumb-slate-800
      transition-all`}
    >
      <Navbar changeThemeHandler={changeThemeHandler} />
      <View>
        <Introduction />
        <ExperienceSection />
        <ProjectsSection />
        <AchievementAndCertificationSection />
        <ConnectSection />
        <div className="w-screen h-1 bg-secondary-700 dark:bg-secondary-800"></div>
        {/* <div className="h-screen"></div> */}
      </View>
    </div>
  );
};

export default App;
