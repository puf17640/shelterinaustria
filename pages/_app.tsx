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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
