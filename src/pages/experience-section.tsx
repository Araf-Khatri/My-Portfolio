import experienceData from "../data/experience.ts";
import { IoMdArrowDropright } from "react-icons/io";

import { FC } from "react";
import Section from "../components/section-components/section";
import Experience from "../components/experience-section/experience";
import SectionHeading from "../components/section-components/heading";
import SectionBlurBg from "../components/section-components/blur-bg";

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
          <div className="flex flex-col ml-[5.5%]">
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
