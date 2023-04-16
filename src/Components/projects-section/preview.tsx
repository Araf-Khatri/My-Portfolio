import { FC, useState } from "react";
import stopwatchVid from "./../../Videos/stopwatch-preview.mp4";
import SectionBlurBg from "../section-components/blur-bg";
import NoVideoFound from "./no-video-found";
import ProjectDescription from "./description";

interface Project {
  id: number;
  projectName: string;
  techStack: string[];
  description: string[];
  websiteLink: string;
  githubLink: string;
  videoRoute: string;
}

interface projectPreviewProps {
  projectData: Project;
  theme: String;
}

const ProjectPreview: FC<projectPreviewProps> = ({ projectData, theme }) => {
  console.log(projectData);

  const cardClass: string = "absolute w-full h-full backface-hidden"; //backface-hidden
  return (
    <div className="grid place-items-center w-full h-full">
      <div
        className={`aspect-video w-full [&:hover>*]:rotate-y-180 perspective-800 `}
      >
        <div
          className={`relative w-full h-full transition-transform duration-700 preserve-3d shadow-2xl shadow-secondary-500-25 border ${
            theme === "LIGHT"
              ? "border-primary-200 bg-primary-100"
              : "border-primary-900 bg-primary-1000"
          }`}
        >
          <div
            className={`${cardClass} ${
              theme === "LIGHT"
                ? "bg-primary-100 text-primary-900"
                : "bg-primary-1000 text-primary-100"
            }`}
          >
            {projectData.videoRoute ? (
              <video height={"100%"} width={"100%"} autoPlay muted loop>
                <source src={projectData.videoRoute} type="video/mp4" />
              </video>
            ) : (
              <NoVideoFound />
            )}
          </div>
          <div
            className={`relative ${cardClass} p-3 rotate-y-180 overflow-hidden`}
            // rotate-y-180
          >
            <SectionBlurBg
              top={"-top-[100%]"}
              left={"left-[46%]"}
              color={"bg-secondary-500"}
            />
            <ProjectDescription projectData={projectData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
