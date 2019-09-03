/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
// import { Link } from "../../i18n"; // 这个link要和子语言标签一起使用
import Link from "next/link";
import styles from "./header.module.less";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.header}>
          <nav>
            <ul>
              <li>
                <Link href="/home">首页</Link>
              </li>
            </ul>
            <ul className="secondList">
              {/* 技术体验中心 */}
              <a href="https://www.tuputech.com/reactProduct/moderation/trailText">
                技术体验中心
              </a>
              <div>
                <li>
                  <Link href="/sound_static">语音识别</Link>
                </li>
              </div>
            </ul>
            <ul className="secondList">
              产品解决方案
              <div>
                <li>
                  <Link href="/contentReview">互联网</Link>
                </li>
                <li>
                  <Link href="/bi">商业智能</Link>
                </li>
                <li>
                  <Link href="/ccve">泛安防</Link>
                </li>
              </div>
            </ul>
            <ul>
              <Link href="/case">客户案例</Link>
            </ul>
            <ul>
              <Link href="/news">新闻动态</Link>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
