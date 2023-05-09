import { FC, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface ProjectProps {
  idx: Number;
  projectName: String;
  activeClicked: boolean;
  onclick: () => void;
}

const Project: FC<ProjectProps> = ({
  idx,
  projectName,
  activeClicked,
  onclick,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    // border rounded-md  transition-all border-secondary-200-25 backdrop-blur-sm bg-primary-350 bg-opacity-10
    <div
      data-idx={idx}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onclick()}
      className={`project relative ${
        idx === 0 ? "mt-1" : ""
      } py-5 px-3 overflow-hidden rounded-sm cursor-pointer border-y-[1px] border-primary-200 dark:border-secondary-200-25`}
    >
      <div className="bottom-0 left-0 absolute w-full h-[1px]">
        <div
          className={`absolute -translate-x-full w-full h-[1px] bg-secondary-700 transition-all ${
            isHovered || activeClicked ? "translate-x-0" : ""
          } duration-500`}
        ></div>
      </div>
      <div className=" flex items-center justify-between w-full font-semibold text-lg">
        <p>{projectName}</p>
        <IoIosArrowForward
          className={`text-xl text-secondary-800 ${
            activeClicked ? 'animate-projectActive' : ""
          }`}
        />
      </div>
    </div>
  );
};

export default Project;
