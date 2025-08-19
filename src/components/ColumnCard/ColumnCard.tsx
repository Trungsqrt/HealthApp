import styles from "./styles.module.css";

type ColumnCardProps = {
  image: string;
  timestamp: string;
  description: string;
  hashtags: string[];
};

export default function ColumnCard({
  image,
  timestamp,
  description,
  hashtags,
}: ColumnCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={description} className={styles.image} />
        <div className={styles.timestamp}>{timestamp}</div>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.hashtags}>
        {hashtags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
