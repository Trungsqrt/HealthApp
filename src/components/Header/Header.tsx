import { Link, NavLink } from "react-router-dom";

import styles from "./styles.module.css";

import logo from "../icons/logo.svg";
import iconMemo from "../icons/icon_memo.svg";
import iconChallenge from "../icons/icon_challenge.svg";
import iconInfo from "../icons/icon_info.svg";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Header() {
  const menuItems = [
    { path: "/my-record", label: "自分の記録" },
    { path: "/body-weight", label: "体重グラフ" },
    { path: "/diary", label: "目標" },
    { path: "/selected-course", label: "選択中のコース" },
    { path: "/column-list", label: "コラム一覧" },
    { path: "/settings", label: "設定" },
  ];

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Link
          to="/"
          className={styles.logo}
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <img src={logo} alt="Healthy" className={styles.iconLg} />
        </Link>

        <nav className={`${styles.nav} ${styles.japanese}`}>
          <NavLink to="/record" className={styles.navLink}>
            <img src={iconMemo} alt="" className={styles.icon} />
            自分の記録
          </NavLink>

          <NavLink to="#" className={styles.navLink}>
            <img src={iconChallenge} alt="" className={styles.icon} />
            チャレンジ
          </NavLink>

          <NavLink
            to="/column"
            className={`${styles.navLink} ${styles.badged}`}
            data-badge="1"
          >
            <img src={iconInfo} alt="" className={styles.icon} />
            お知らせ
          </NavLink>
          <HamburgerMenu menuItems={menuItems} />
        </nav>
      </div>
    </header>
  );
}
