import { FC } from "react";
import { IoLogoPython } from "react-icons/io";
import {
  IoLogoNodejs,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoFirebase,
} from "react-icons/io5";
import { SiMongodb, SiRedux, SiJavascript } from "react-icons/si";

const TechStack: FC = () => {
  return (
    <div className="flex gap-5">
      <p className="text-lg font-bold ">Tech Stack:</p>
      <div className="flex gap-3 items-center">
        <IoLogoPython className="h-7 w-7 text-[#3286B3]" />
        <SiJavascript className="h-7 w-7 text-[#F0DD61] bg-black" />
        <IoLogoNodejs className="h-7 w-7 text-[#68a063]" />
        <IoLogoReact className="h-7 w-7 text-[#7cc5d9]" />
        <SiRedux className="h-7 w-7 text-[#764abc]" />
        <IoLogoHtml5 className="h-7 w-7 text-[#ff7452]" />
        <IoLogoCss3 className="h-7 w-7 text-[#5185ff]" />
        <SiMongodb className="h-7 w-7 text-[#589636]" />
        <IoLogoFirebase className="h-7 w-7 text-[#F6820D]" />
      </div>
    </div>
  );
};

export default TechStack;
