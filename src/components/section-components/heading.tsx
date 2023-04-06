import { FC } from "react";

const SectionHeading: FC<{ heading: String }> = ({ heading }) => {
  return <p className="text-3xl font-semibold text-secondary-700">{heading}</p>;
};
export default SectionHeading;
