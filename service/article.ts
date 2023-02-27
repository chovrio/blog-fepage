import { instance, origin } from ".";
import type { IArticle, IResult } from "@/types/article";

export const getAllArticle = async () => {
  const res = await instance.get<IResult<IArticle[]>>({
    url: `/essay/acquire-fe?name=${process.env.NEXT_PUBLIC_NAME}`,
  });
  return res.data;
};
export const getArticleContent = async (id: string) => {
  const res = await origin.get({
    url: `/essay/content-fe?name=${process.env.NEXT_PUBLIC_NAME}&id=${id}`,
  });
  return res.data;
};
