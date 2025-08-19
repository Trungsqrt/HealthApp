import styles from "./styles.module.css";

type RecommendedButtonProps = {
  title: string;
  subtitle: string;
};

export default function RecommendedButton({
  title,
  subtitle,
}: RecommendedButtonProps) {
  return (
    <div className={styles.button}>
      <span className={styles.title}>{title}</span>
      <hr className={styles.divider} />
      <span className={styles.subtitle}>{subtitle}</span>
    </div>
  );
}
