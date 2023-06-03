import "@/styles/globals.scss";
import "@/styles/Home.scss";
import "@/styles/lists.scss";
import "@/styles/bottom.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="description" content="chovrio'blog" />
        <meta name="keywords" content="chovrio blog chovrio'blog next博客" />
        <link rel="icon" href="/favicon.ico" />
        <title>{process.env.NEXT_PUBLIC_TITLE}</title>
      </Head>
      <Script async src="sakura.js" />
      <Component {...pageProps} />
    </div>
  );
}
