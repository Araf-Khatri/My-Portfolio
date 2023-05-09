import { FC, MouseEvent, SyntheticEvent, useState } from "react";
import projectsData from "../Data/projects.ts";

import Section from "../Components/section-components/section.tsx";
import SectionHeading from "../Components/section-components/heading.tsx";
import SectionBlurBg from "../Components/section-components/blur-bg.tsx";
import Project from "../Components/projects-section/project.tsx";
import ProjectPreview from "../Components/projects-section/preview.tsx";

interface ActiveProjectState {
  clickEvent: boolean;
  idx: number;
}

const ProjectsSection: FC = () => {
  const [activeProject, setActiveProject] = useState<ActiveProjectState>({
    clickEvent: false,
    idx: 0,
  });

  const scrollToPreview: HTMLAnchorElement = document.createElement("a");
  scrollToPreview.href = "#projects";

  const onClickHandler = (idx: number) => () => {
    scrollToPreview.click();
    setActiveProject({ clickEvent: true, idx });
  };

  return (
    <div id="projects" className="relative z-[1]">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <SectionHeading heading={"PROJECTS"} />
        <div className="relative">
          <SectionBlurBg top={"top-[20rem]"} left={"left-[15%]"} />
          <div className="ml-[1%] grid gap-14 grid-cols-2 justify-between items-center">
            <div className="flex flex-col gap-2">
              {projectsData.map(({ id, projectName }, idx) => (
                <Project
                  key={id}
                  idx={idx}
                  projectName={projectName}
                  activeClicked={activeProject.idx === idx}
                  onclick={onClickHandler(idx)}
                />
              ))}
            </div>

            <ProjectPreview
              projectData={projectsData[activeProject.idx]}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectsSection;
