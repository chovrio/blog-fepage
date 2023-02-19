import Articles from "@/components/Articles";
import Down from "@/components/Down";
import Profile from "@/components/Profile";
import Title from "@/components/Title";
import { getAllArticle } from "@/service/article";
import { IArticle } from "@/types/article";
import { GetStaticProps } from "next";
import { FC, ReactElement } from "react";
export interface IProps {
  children?: ReactElement;
  articles: IArticle[];
}
const Home: FC<IProps> = (props) => {
  const { children, articles } = props;
  return (
    <div>
      <div className="home">
        <Title />
        <h2 className="description">{process.env.NEXT_PUBLIC_DESCRIPTION}</h2>
        <Down />
      </div>
      <div className="bottom">
        <Articles articles={articles} />
        <Profile />
      </div>
    </div>
  );
};
export default Home;
Home.displayName = "Home";
export const getStaticProps: GetStaticProps = async (ctx) => {
  const allArticle = await getAllArticle();
  return {
    props: {
      articles: allArticle.result,
    },
    revalidate: 60 * 60 * 30,
  };
};
