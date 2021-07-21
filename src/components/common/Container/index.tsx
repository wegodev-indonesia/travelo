import { ReactNode } from "react";

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className="max-w-screen-xl min-h-screen mx-auto">
      {children}
    </div>
  );
};

export default Container;