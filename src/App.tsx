import { FC, useState } from "react";
import Navbar from "./components/navbar";
import ExperienceSection from "./pages/experience-section";

import Introduction from "./pages/introduction";
import ProjectsSection from "./pages/projects-section";

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
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default App;
