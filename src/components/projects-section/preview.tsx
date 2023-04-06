import { FC } from "react";

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
}

const ProjectPreview: FC<projectPreviewProps> = ({ projectData }) => {
  return (
    <div>
      <div> {/* FRONT */}
      </div>
    </div>
  );
};

export default ProjectPreview;
