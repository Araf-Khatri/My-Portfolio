import { FC, Fragment, ReactNode, memo } from "react";

interface ViewProps {
  children: ReactNode;
}

const View: FC<ViewProps> = ({ children }) => {
  return <div className="portfolio-main overflow-hidden">{children}</div>;
};

export default memo(
  View,
  (prevProps, currentProps) => prevProps !== currentProps
);
