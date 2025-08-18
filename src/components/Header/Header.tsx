import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import styles from "./styles.module.css";

import logo from "../icons/logo.svg";
import iconMemo from "../icons/icon_memo.svg";
import iconChallenge from "../icons/icon_challenge.svg";
import iconInfo from "../icons/icon_info.svg";
import iconMenu from "../icons/icon_menu.svg";
import iconClose from "../icons/icon_close.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <NavLink to="/my-record" className={styles.navLink}>
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

          <div className={styles.menuContainer}>
            <button
              className={styles.menuButton}
              aria-label="menu"
              onClick={toggleMenu}
            >
              <img
                src={isMenuOpen ? iconClose : iconMenu}
                alt="Menu toggle"
                className={styles.icon}
              />
            </button>

            {isMenuOpen && (
              <div className={styles.dropMenu}>
                <NavLink to="/my-record" className={styles.menuItem}>
                  自分の記録
                </NavLink>
                <NavLink to="/body-weight" className={styles.menuItem}>
                  体重グラフ
                </NavLink>
                <NavLink to="/diary" className={styles.menuItem}>
                  目標
                </NavLink>
                <NavLink to="/selected-course" className={styles.menuItem}>
                  選択中のコース
                </NavLink>
                <NavLink to="/column-list" className={styles.menuItem}>
                  コラム一覧
                </NavLink>
                <NavLink to="/settings" className={styles.menuItem}>
                  設定
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
