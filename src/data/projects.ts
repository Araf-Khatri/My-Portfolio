import stopwatchVideo from "./../videos/stopwatch-preview.mp4";

interface Project {
  id: number;
  projectName: string;
  techStack: string[];
  description: string[];
  websiteLink: string;
  githubLink: string;
  videoRoute: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    projectName: "Stopwatch",
    techStack: [],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
    websiteLink: "",
    githubLink: "",
    videoRoute: stopwatchVideo,
  },
  {
    id: 0,
    projectName: "Stopwatch",
    techStack: [],
    description: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    ],
    websiteLink: "",
    githubLink: "",
    videoRoute: "",
  },
];

export default projectsData;
