import { origin } from ".";

export const getUserInfo = async () => {
  const res = await origin.get({
    url: `/user/all-fe?name=${process.env.NEXT_PUBLIC_NAME}`,
  });
  return res.data;
};
