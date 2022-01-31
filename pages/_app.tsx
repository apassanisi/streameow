import React from "react";
import "../styles/globals.scss";

interface MyAppProps {
  Component: any,
  pageProps: any
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
