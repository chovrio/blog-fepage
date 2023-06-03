import Image from "next/image";
import { FC, ReactElement, useEffect, useState } from "react";
import styles from "@/styles/profile.module.scss";
import { BaseURL } from "@/utils/BaseURL";
import { getUserInfo } from "@/service/user";
export interface IProps {
  children?: ReactElement;
}
const Profile: FC<IProps> = (props) => {
  const { children } = props;
  const [info, setInfo] = useState<any>({});
  useEffect(() => {
    getUserInfo().then((data) => {
      setInfo(data.result);
    });
  }, []);
  return (
    <div className={styles.profile}>
      <Image
        src={`${BaseURL}/avactor/chovrio.jpg`}
        alt="avactor"
        priority
        width={150}
        height={150}
      />
      <h2 className={styles.name}>{process.env.NEXT_PUBLIC_NAME}</h2>
      <p className={styles.content}>{process.env.NEXT_PUBLIC_CONTENT}</p>
      <div className={styles.cates}>
        <div>
          <span>文章</span>
          <span>{info.articleNum}</span>
        </div>
        <div>
          <span>标签</span>
          <span>4</span>
        </div>
      </div>
      <button className={styles.github}>
        <a href={process.env.NEXT_PUBLIC_GITHUB}>要看看菜狗吗?</a>
      </button>
    </div>
  );
};
export default Profile;
Profile.displayName = "Profile";
