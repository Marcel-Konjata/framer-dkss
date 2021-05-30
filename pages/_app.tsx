import React from "react";
import { AppProps } from "next/app";
import { Layout } from "../layout/Layout.component";

import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
