export const BaseURL = (
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASEURL_DEV
    : process.env.NEXT_PUBLIC_BASEURL_PROD
) as string;

export const OriginURL = (
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASEURL_DEV_ORIGIN
    : process.env.NEXT_PUBLIC_BASEURL_PROD
) as string;
