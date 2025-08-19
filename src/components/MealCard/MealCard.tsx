import styles from "./styles.module.css";

type MealCardProps = {
  image: string;
  label: string;
};

export default function MealCard({ image, label }: MealCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} alt={label} className={styles.image} />
      <div className={styles.label}>{label}</div>
    </div>
  );
}
