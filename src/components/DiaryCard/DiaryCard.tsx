import styles from "./styles.module.css";

type DiaryCardProps = {
  date: string;
  time: string;
  content: string;
};

export default function DiaryCard({ date, time, content }: DiaryCardProps) {
  return (
    <div className={styles.card}>
      <p className={styles.dateTime}>{date}</p>
      <p className={styles.dateTime}>{time}</p>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
