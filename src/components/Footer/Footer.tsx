import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="#" className={styles.link}>
            会員登録
          </Link>
          <Link to="#" className={styles.link}>
            運営会社
          </Link>
          <Link to="#" className={styles.link}>
            利用規約
          </Link>
          <Link to="#" className={styles.link}>
            個人情報の取扱について
          </Link>
          <Link to="#" className={styles.link}>
            特定商取引法に基づく表記
          </Link>
          <Link to="#" className={styles.link}>
            お問い合わせ
          </Link>
        </nav>
      </div>
    </footer>
  );
}
