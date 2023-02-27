"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // 解析标签，支持html语法
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; // 代码高亮
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { getTime } from "@/utils/getTime";
import { usePathname } from "next/navigation";
import Profile from "@/components/Profile";
import { getArticleContent } from "@/service/article";
import Tracker from "chovrio-track";
import "./index.scss";
import { BaseURL } from "@/utils/BaseURL";
const Article = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const [info, setInfo] = useState<any>({});
  const [article, setArticle] = useState<string>("");
  const [pv, setPv] = useState<number>(0);
  const pathname = usePathname();

  useEffect(() => {
    let id = pathname?.split("/")[2] || "";
    setArticle(id);
  }, [pathname]);
  useEffect(() => {
    if (article !== "") {
      getArticleContent(article).then((data) => {
        setMarkdown(data.result.content);
        setInfo(data.result.info);
        setPv(data.result.pv);
        new Tracker({
          requestUrl: BaseURL + "/tracker/atcpv",
          jsError: true,
          uuid: "chovrio",
        }).sendTracker({
          id: article,
        });
      });
    }
  }, [article]);
  return (
    <div className="article">
      <Head>
        <title>test</title>
        <meta name="keywords" content={`${info.name} ${info.author}`} />
        <meta
          name="description"
          content={`${markdown} ${process.env.NEXT_PUBLIC_NAME}的博客`}
        />
      </Head>
      <div className="title">
        <h2>{info.name}</h2>
        <div className="data">{getTime(info.updateTime)}</div>
        <div>阅读量:{pv}</div>
      </div>
      <div className="test">
        <article className="content py-8 prose  prose-h1:mt-8">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code({ inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    // eslint-disable-next-line react/no-children-prop
                    children={String(children).replace(/\n$/, "")}
                    style={tomorrow as any}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </article>
        <Profile />
      </div>
    </div>
  );
};
export default Article;
Article.displayName = "Article";
