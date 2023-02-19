import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <Head>
        <meta name="description" content="chovrio'blog" />
        <meta name="keywords" content="chovrio blog chovrio'blog next博客" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
