import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ChakraProvider } from "@chakra-ui/react";
import ThemeToggler from "../components/ThemeToggler";

import Layout from "../components/Layout";

import theme from "../theme/theme";

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });
  return (
    <>
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ThemeToggler />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
