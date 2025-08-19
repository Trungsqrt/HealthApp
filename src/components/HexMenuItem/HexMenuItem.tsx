import styles from "./styles.module.css";

type HexMenuItemProps = {
  icon: string;
  text: string;
};

export default function HexMenuItem({ icon, text }: HexMenuItemProps) {
  return (
    <div className={styles.hexagon}>
      <div className={styles.content}>
        <img src={icon} alt="" className={styles.icon} />
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  );
}
