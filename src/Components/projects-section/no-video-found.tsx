import { FC } from "react";
import { MdOutlineError } from "react-icons/md";

const NoVideoFound: FC = () => {
  return (
    <div
      className={`grid place-items-center w-full h-full`}
    >
      <div className="flex gap-2 text-xl items-center">
        <MdOutlineError className="text-red-500" />
        <p className="font-semibold">No Video Found!</p>
      </div>
    </div>
  );
};

export default NoVideoFound;
