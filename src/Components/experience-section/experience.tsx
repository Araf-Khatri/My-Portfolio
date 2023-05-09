import { FC } from "react";
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
  data: DataObj;
  end: boolean;
  idx?: Number;
}

const Experience: FC<ExperienceProps> = ({ data, end, idx }) => {
  return (
    <div className="flex flex-col cursor-default">
      <div className="flex gap-4 items-center">
        <div
          className={`relative z-auto h-5 w-5 flex-shrink-0 rounded-full bg-secondary-800 dark:bg-secondary-900
          ${
            data.active &&
            `before:absolute before:content-[""] before:-z-[1] before:w-full before:h-full before:rounded-full 
            ${
              data.active
                ? "before:bg-secondary-700-25"
                : "dark:before:bg-secondary-200-25"
            }
            before:animate-active`
          }
          ${
            !(idx === 0) &&
            `
            ${data.active && end ? "" : data.active ? "" : "opacity-50"}
          `
          } 
    `}
        ></div>
        <div className="flex justify-between items-center w-full font-semibold">
          <p className="text-lg">{data.title}</p>
          <p>[ {data.date} ]</p>
        </div>
      </div>
      <div
        className={`relative flex flex-col gap-3 ${end ? "pb-5" : "pb-11"}
           text-primary-500 dark:text-secondary-100 ml-2 pl-6 border-l-4 border-dotted border-secondary-800 dark:border-secondary-1000 border-opacity-30`}
      >
        {end && (
          <div
            className={`absolute h-2 w-2 flex-shrink-0 rounded-full opacity-50 bg-secondary-800 dark:bg-secondary-900 left-0 bottom-0 -translate-x-[79%] translate-y-3`}
          ></div>
        )}
        <p className={`font-medium font-mono text-sm text-secondary-700`}>
          {data.companyName}
        </p>

        {data.workInfo && (
          <ExperienceDescription description={data.workInfo} />
        )}
      </div>
    </div>
  );
};

export default Experience;
