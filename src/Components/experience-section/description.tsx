import { FC, Fragment } from "react";

const ExperienceDescription: FC<{ description: string[], theme: String }> = ({
  description, theme
}) => {
  return (
    <ul className=" flex flex-col gap-2 leading-[1.3rem] list-disc ml-4">
      {description.map((info, idx) => (
        <Fragment key={idx}>
          <li
            className={`${
              theme === "LIGHT" ? "text-secondary-800" : "text-primary-350"
            }`}
          >
            <span
              className={`${
                theme === "LIGHT" ? "text-primary-500" : "text-secondary-100"
              }`}
            >
              {info}
            </span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default ExperienceDescription;
