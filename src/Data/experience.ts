import stopwatchVid from "./../Videos/stopwatch-preview.mp4";

interface Experience {
  id: number;
  active: boolean; // if job active then set it to true, else false
  title: string;
  companyName: string;
  websiteLink: string;
  date: string;
  workInfo: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    active: true,
    title: "Freelance - FrontEnd Developer",
    companyName: "CitizentubeInd",
    websiteLink: "https://www.google.com/",
    date: "Feb 2023",
    workInfo: [
      "Lorem Ipsum has been tmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    ],
  },
  {
    id: 0,
    active: false,
    title: "Freelance - FrontEnd Developer",
    companyName: "CitizentubeInd",
    websiteLink: "https://www.google.com/",
    date: "Feb 2023",
    workInfo: [
      "Lorem Ipsum has been tmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    ],
  },
];

export default experienceData;
