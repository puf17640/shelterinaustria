import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="ukraine, support, austria, humanitarian help, donation, no war, stop war"
        />
        <meta name="author" content="Julian Pufler" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shelter in Austria | Help people from Ukraine</title>
        <meta
          name="title"
          content="Shelter in Austria | Help people from Ukraine"
        />
        <meta
          name="description"
          content="Connecting Ukrainian people in need with people from Austria"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shelterinaustria.info/" />
        <meta
          property="og:title"
          content="Shelter in Austria | Help people from Ukraine"
        />
        <meta
          property="og:description"
          content="Connecting Ukrainian people in need with people from Austria"
        />
        <meta
          property="og:image"
          content="https://shelterinaustria.info/meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://shelterinaustria.info/" />
        <meta
          property="twitter:title"
          content="Shelter in Austria | Help people from Ukraine"
        />
        <meta
          property="twitter:description"
          content="Connecting Ukrainian people in need with people from Austria"
        />
        <meta
          property="twitter:image"
          content="https://shelterinaustria.info/meta.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
