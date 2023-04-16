import { FC, useState } from "react";
import Navbar from "./Components/navbar";
import ExperienceSection from "./Layout/experience-section";

import Introduction from "./Layout/introduction";
import ProjectsSection from "./Layout/projects-section";
import AchievementAndCertificationSection from "./Layout/achievements-and-certification-section";

const App: FC = () => {
  const [theme, setTheme] = useState<String>("LIGHT");

  const changeThemeHandler = () => {
    if (theme === "LIGHT") {
      setTheme("DARK");
      return;
    }
    setTheme("LIGHT");
  };

  return (
    <div
      className={`relative ${
        theme === "LIGHT"
          ? "bg-primary-100 text-primary-900"
          : "bg-primary-1000 text-primary-100"
      } transition-all`}
    >
      <Navbar theme={theme} setTheme={changeThemeHandler} />
      <div className="portfolio-main">
        <Introduction />
        <ExperienceSection theme={theme} />
        <ProjectsSection theme={theme} />
        <AchievementAndCertificationSection />
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default App;
