import styles from "./styles.module.css";

type RecordCardProp = {
  image: string;
  title: string;
  subtitle: string;
};

export default function RecordCard({ image, title, subtitle }: RecordCardProp) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}
