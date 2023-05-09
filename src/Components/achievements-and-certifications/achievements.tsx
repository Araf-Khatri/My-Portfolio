import achievementsData from "./../../Data/achievements.ts";

import { FC, Fragment } from "react";
import { HiOutlineMinus } from "react-icons/hi";



const Achievements: FC = () => {
  return (
    <Fragment>
      {achievementsData.map(({ id, description, link }) => (
        <div key={id} className="flex gap-4 items-center justify-between">
          <li className="marker:text-secondary-800 leading-[1.37rem]">{description}</li>
          <div className="flex gap-2 items-center text-secondary-700">
            <HiOutlineMinus className="ml-8" />
            <a target="_blank" href={link} className=""> 
              Link
            </a>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Achievements;
