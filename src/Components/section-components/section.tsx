import { FC } from "react";

interface SectionProps {
  children?: React.ReactNode;
  classname?: String;
}

const Section: FC<SectionProps> = (props: SectionProps) => {
  return (
    <div className={`mx-72 ${props.classname ? props.classname : ""}`}>
      {props.children}
    </div>
  );
};

export default Section;
