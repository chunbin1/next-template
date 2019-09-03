import React from "react";
import styles from "./home.module.less";
import { i18n, Link, withTranslation } from "../i18n";

function Home({ t }) {
  return (
    <>
      <div className={styles.home}>{t("title")}</div>
      <button
        onClick={() => {
          i18n.changeLanguage(i18n.language === "zh_CN" ? "en" : "zh_CN");
          console.log(i18n.languages);
          console.log(i18n);
        }}
      >
        点击切换语言
      </button>
    </>
  );
}

export default withTranslation("common")(Home);
