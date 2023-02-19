import Image from "next/image";
import { FC, ReactElement } from "react";
export interface IProps {
  children?: ReactElement;
}
const Down: FC<IProps> = (props) => {
  return (
    <div className="down">
      <Image src={"/down.png"} alt={"向下"} width={30} height={30} />
    </div>
  );
};
export default Down;
Down.displayName = "Down";
