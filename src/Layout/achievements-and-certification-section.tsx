import { FC } from "react";
import Section from "../Components/section-components/section";
import SectionHeading from "../Components/section-components/heading";
import Achievements from "../Components/achievements-and-certifications/achievements";
import Certifications from "../Components/achievements-and-certifications/certifications";

const AchievementAndCertificationSection: FC = () => {
  return (
    <div id="achievements">
      <Section classname={"py-16 flex flex-col gap-3"}>
        <SectionHeading heading={"ACHIEVEMENTS & CERTIFICATIONS"} />
        <div>
          <Achievements />
          <Certifications />
          <ul className="list-disc ml-[1%] pl-4">
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatibus !
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
};

export default AchievementAndCertificationSection;
