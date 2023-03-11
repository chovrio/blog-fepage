import { FC, ReactElement } from "react";
export interface IProps {
  children?: ReactElement;
}
const Loading: FC<IProps> = (props) => {
  const { children } = props;
  return (
    <div className="loadCtn">
      <div className="loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export default Loading;
Loading.displayName = "Loading";
