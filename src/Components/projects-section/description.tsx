import { FC } from "react";
import { IoLogoGithub } from "react-icons/io";
import { ImSphere } from "react-icons/im";

interface Project {
  id: number;
  projectName: string;
  techStack: string[];
  description: string[];
  websiteLink: string;
  githubLink: string;
  videoRoute: string;
}

interface ProjectDescriptionProps {
  projectData: Project;
}

const ProjectDescription: FC<ProjectDescriptionProps> = ({ projectData }) => {
  const iconClass: string = "text-2xl";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <p className="font-semibold text-lg">{projectData.projectName}</p>
        <div className="flex gap-6">
          {projectData.githubLink && <a href={projectData.githubLink} target="_blank">
            <IoLogoGithub className={`${iconClass}`} />
          </a>}
          {projectData.websiteLink && <a href={projectData.websiteLink} target="_blank">
            <ImSphere className={`${iconClass} text-secondary-700`} />
          </a>}
        </div>
      </div>
        <ul className="flex flex-col gap-3 pl-6 list-disc ">
          {projectData.description.map((data, idx) => (
            <li key={idx}>{data}</li>
          ))}
        </ul>
    </div>
  );
};

export default ProjectDescription;
