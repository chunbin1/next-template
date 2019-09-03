import React from "react";
import App from "next/app"; // 重新定义app
import { appWithTranslation } from "../i18n";
import Header from "../components/Header/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
