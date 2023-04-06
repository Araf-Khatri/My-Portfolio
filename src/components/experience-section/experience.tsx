import { FC, Fragment } from "react";
import ExperienceDescription from "./description";

interface DataObj {
  title: string;
  companyName: string;
  date: string;
  active?: boolean;
  websiteLink?: string;
  workInfo?: string[];
}

interface ExperienceProps {
  theme: String;
  data: DataObj;
  end: boolean;
  idx?: Number;
}

const Experience: FC<ExperienceProps> = ({ theme, data, end, idx }) => {
  return (
    <div className="flex flex-col cursor-default">
      <div className="flex gap-4 items-center">
        <div
          className={`relative z-auto h-5 w-5 rounded-full ${
            theme === "LIGHT" ? "bg-secondary-800" : "bg-primary-350"
          } ${
            data.active &&
            `before:absolute before:content-[""] before:-z-[1] before:w-full before:h-full before:rounded-full 
            ${
              theme === "LIGHT" && data.active
                ? "before:bg-secondary-200-50"
                : "before:bg-secondary-200-25"
            }
            before:animate-active`
          }
          ${!(idx === 0) && `
            ${data.active && end ? "" : data.active ? "" : "opacity-50"}
          `} 
    `}
        ></div>
        <div className="flex justify-between items-center w-full font-semibold">
          <p className="text-lg">{data.title}</p>
          <p>[ {data.date} ]</p>
        </div>
      </div>
      <div
        className={`relative flex flex-col gap-3 ${end ? "pb-5" : "pb-11"} ${
          theme === "LIGHT" ? "text-primary-500" : "text-secondary-100"
        } ml-2 pl-6 border-l-4 border-dotted ${
          theme === "LIGHT" ? "border-secondary-800" : "border-primary-350"
        } border-opacity-30`}
      >
        {end && (
          <div
            className={`absolute h-2 w-2 rounded-full opacity-50 ${
              theme === "LIGHT" ? "bg-secondary-800" : "bg-primary-350"
            } left-0 bottom-0 -translate-x-[79%] translate-y-3`}
          ></div>
        )}
        <p className={`font-medium font-mono text-sm text-secondary-700`}>{data.companyName}</p>

        {data.workInfo && (
          <ExperienceDescription description={data.workInfo} theme={theme}  /> 
        )}
      </div>
    </div>
  );
};

export default Experience;
