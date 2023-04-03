import { FC, Fragment } from "react";

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
}

const Experience: FC<ExperienceProps> = ({ theme, data }) => {
  return (
    <div className="flex flex-col cursor-default">
      <div className="flex gap-4 items-center">
        <div
          className={`relative z-auto h-5 w-5 rounded-full  ${
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
    `}
        ></div>
        <div className="flex justify-between items-center w-full font-semibold">
          <p className="text-lg">{data.title}</p>
          <p>[ {data.date} ]</p>
        </div>
      </div>
      <div
        className={`relative flex flex-col gap-3 ${
          theme === "LIGHT" ? "text-primary-500" : "text-secondary-100"
        } ml-2 pl-6 border-l-4 border-dotted ${
          theme === "LIGHT" ? "border-secondary-800" : "border-primary-350"
        } border-opacity-30`}
      >
        <div
          className={`absolute h-2 w-2 rounded-full ${
            theme === "LIGHT" ? "bg-secondary-800" : "bg-primary-350"
          } left-0 bottom-0 -translate-x-[78%] translate-y-1/2`}
        ></div>
        <p className={`font-medium font-mono text-sm`}>{data.companyName}</p>

        {data.workInfo && (
          <ul className=" flex flex-col gap-2 leading-[1.3rem] list-disc ml-4">
            {data.workInfo.map((info, idx) => (
              <Fragment key={idx}>
                <li
                  className={`${
                    theme === "LIGHT"
                      ? "text-secondary-800"
                      : "text-primary-350"
                  }`}
                >
                  <span
                    className={`${
                      theme === "LIGHT"
                        ? "text-primary-500"
                        : "text-secondary-100"
                    }`}
                  >
                    {info}
                  </span>
                </li>
              </Fragment>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Experience;
