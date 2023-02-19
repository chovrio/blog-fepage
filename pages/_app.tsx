import "@/styles/globals.scss";
import "@/styles/Home.scss";
import "@/styles/lists.scss";
import "@/styles/bottom.scss";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Script src="sakura.js"/>
      <Component {...pageProps} />
    </div>
  );
}
