import { FC, Fragment } from "react";

const ExperienceDescription: FC<{ description: string[]; }> = ({
  description,
}) => {
  return (
    <ul className=" flex flex-col gap-2 leading-[1.3rem] list-disc ml-4">
      {description.map((info, idx) => (
        <Fragment key={idx}>
          <li
            className={`marker:text-secondary-800 text-primary-500 dark:text-secondary-100`}
          >
            {info}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default ExperienceDescription;
