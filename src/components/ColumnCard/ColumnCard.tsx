import styles from "./styles.module.css";

type ColumnCardProps = {
  image: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
};

export default function ColumnCard({
  image,
  date,
  time,
  title,
  tags,
}: ColumnCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.image} />
        <span className={styles.dateTime}>
          {date} {time}
        </span>
      </div>
      <p className={styles.title}>{title}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
