import stopwatchVideo from "./../Videos/stopwatch-preview.mp4";

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
    description: ["A Stopwatch website which is inspired by Realme Stopwatch."],
    websiteLink: "https://stopwatchbyaraf.netlify.app/",
    githubLink: "https://github.com/Araf-Khatri/Stopwatch",
    videoRoute: stopwatchVideo,
  },
  {
    id: 0,
    projectName: "Stopwatch",
    techStack: [],
    description: [],
    websiteLink: "",
    githubLink: "",
    videoRoute: "",
  },
];

export default projectsData;
