export interface IArticle {
  _id: string;
  name: string;
  author: string;
  tags: string[];
  createTime: number;
  updateTime: number;
}
export interface IResult<T> {
  code: number;
  message: string;
  result: T;
}
