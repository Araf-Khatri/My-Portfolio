import { FC } from "react";

interface BlurryBg {
  top: String;
  left?: String;
  right?: String;
  bottom?: String;
}

const SectionBlurBg: FC<BlurryBg> = ({
  top = "",
  left = "",
  right = "",
  bottom = "",
}: BlurryBg) => {
  return (
    <div className={`${top} ${left} ${right} ${bottom} absolute blur-[150px]`}>
      <div className="h-40 w-36 bg-gradient-to-tr from-blurr-100 to-blurr-500"></div>
    </div>
  );
};

export default SectionBlurBg;
