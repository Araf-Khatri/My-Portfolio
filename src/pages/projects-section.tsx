import { FC, MouseEvent, SyntheticEvent, useState } from "react";

import projectsData from "../data/projects.ts";
import Section from "../components/section-components/section";
import SectionHeading from "../components/section-components/heading";
import SectionBlurBg from "../components/section-components/blur-bg";
import Project from "../components/projects-section/project";
import ProjectPreview from "../components/projects-section/preview.tsx";

interface ProjectsSectionProps {
  theme: String;
}

interface ActiveProjectState {
  clickEvent: boolean;
  idx: number;
}

const ProjectsSection: FC<ProjectsSectionProps> = ({
  theme,
}: ProjectsSectionProps) => {
  const [activeProject, setActiveProject] = useState<ActiveProjectState>({
    clickEvent: false,
    idx: 0,
  });

  const onClickHandler = (idx: number) => () => {
    setActiveProject({ clickEvent: true, idx });
  };

  return (
    <div id="projects">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <SectionHeading heading={"PROJECTS"} />
        <div className="relative">
          <SectionBlurBg top={"top-[20rem]"} left={"left-[15%]"} />
          <div className="ml-[1%] grid grid-cols-2 justify-between">
            <div className="flex flex-col gap-2">
              {projectsData.map(({ id, projectName }, idx) => (
                <Project
                  key={id}
                  theme={theme}
                  idx={idx}
                  projectName={projectName}
                  activeClicked={activeProject.idx === idx}
                  onclick={onClickHandler(idx)}
                />
              ))}
            </div>

            <div>
              <ProjectPreview projectData={projectsData[activeProject.idx]} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ProjectsSection;
