import { FC } from "react";

import Section from "../Components/section-components/section";
import profilePhoto from "./../Assets/profile.jpg";
import TechStack from "../Components/tech-stack";
import SectionBlurBg from "../Components/section-components/blur-bg";

const Introduction: FC = () => {
  console.log('rerendered')
  return (
    <div className="relative" id="home">
      <SectionBlurBg top={"top-[20rem]"} left={"left-[15%]"} />

      <Section classname={"pt-24 pb-16 relative"}>
        <div className="flex justify-between gap-8 items-center">
          <div className="flex flex-col gap-9">
            <div>
              <p className="text-6xl font-semibold whitespace-nowrap">
                Hi! I Am Araf Khatri
              </p>
              <p className="text-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                provident{" "}
              </p>
            </div>

            <TechStack />
          </div>
          <div>
            {/* relative z-10 w-[38rem] h-96 p-3 bg-overflow-hidden  */}
            <div
              className={`relative z-10 aspect-video max-w-4xl min-w-[35rem]  p-3 bg-overflow-hidden 

            before:content-[''] before:absolute before:top-1 before:left-1 before:h-10 before:w-16 before:bg-secondary-600 before:z-[-1]

            after:content-[''] after:absolute after:bottom-1 after:right-1 after:h-10 after:w-16 after:bg-secondary-600 after:z-[-1]
            
            `}
            >
              <img
                src={profilePhoto}
                className={`object-cover
            shadow-2xl shadow-secondary-500-25
            `}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Introduction;
