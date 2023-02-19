import { FC, ReactElement } from "react";

export interface IProps {
  children?: ReactElement;
}
const Title: FC<IProps> = (props) => {
  return (
    <div className="title">
      <div className="name">{process.env.NEXT_PUBLIC_TITLE}</div>
    </div>
  );
};
export default Title;
Title.displayName = "Title";
