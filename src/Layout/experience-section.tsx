import experienceData from "../Data/experience.js";
import { IoMdArrowDropright } from "react-icons/io";

import { FC } from "react";
import Section from "../Components/section-components/section.js";
import Experience from "../Components/experience-section/experience.js";
import SectionHeading from "../Components/section-components/heading.js";
import SectionBlurBg from "../Components/section-components/blur-bg.js";

interface ExperiencesObj {
  companyName: String;
  title: String;
  startDate: String;
  endDate: String;
  description: String[];
}

const ExperienceSection: FC<{ theme: String }> = ({ theme }) => {
  return (
    <div className="relative z-[1]" id="experience">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <SectionHeading heading={"EXPERIENCE"} />
        <div className="relative">
          <SectionBlurBg top={"top-40"} right={"right-[25%]"} />
          <div className="flex flex-col ml-[1%]">
            {experienceData.map((data, idx) => (
              <Experience
                key={data.id}
                theme={theme}
                data={data}
                end={experienceData.length - 1 === idx}
                idx={idx}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ExperienceSection;
