import { FC } from "react";

interface containerProps {
  children: React.ReactNode;
}

const container: FC<containerProps> = ({ children }) => {
  return <div className="mx-auto w-full max-w-7xl">{children}</div>;
};

export default container;
