import experienceData from "../data/experience.json";
import { IoMdArrowDropright } from "react-icons/io";

import { FC } from "react";
import Section from "../components/section";
import BlurryBackground from "./blurry-background";
import Experience from "../components/experience-section/experience";

interface ExperiencesObj {
  companyName: String;
  title: String;
  startDate: String;
  endDate: String;
  description: String[];
}

const ExperienceSection: FC<{ theme: String }> = ({ theme }) => {
  console.log(experienceData);

  return (
    <div className="relative z-[1]" id="experience">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <p className="text-3xl font-semibold text-secondary-700">EXPERIENCE</p>
        <div className="relative">
          <BlurryBackground top={"top-40"} right={"right-[25%]"} />
          <div className="flex flex-col gap-5 ml-[8%]">
            {experienceData.map((data) => (
              <Experience key={data.id} theme={theme} data={data} />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExperienceSection;
