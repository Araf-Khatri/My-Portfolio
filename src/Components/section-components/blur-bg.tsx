import { FC } from "react";

interface BlurryBg {
  top: String;
  left?: String;
  right?: String;
  bottom?: String;
  color?: String;
}

const SectionBlurBg: FC<BlurryBg> = ({
  top = "",
  left = "",
  right = "",
  bottom = "",
  color = "",
}: BlurryBg) => {
  return (
    <div className={`${top} ${left} ${right} ${bottom} absolute blur-[150px]`}>
      <div
        className={`h-40 w-36 ${
          color === "" ? "bg-gradient-to-tr from-blurr-100 to-blurr-500" : color
        }`}
      ></div>
    </div>
  );
};

export default SectionBlurBg;
