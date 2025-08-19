import styles from "./styles.module.css";

type Exercise = {
  activity: string;
  calories: string;
  duration: string;
};

type MyExerciseProps = {
  exercises: Exercise[];
};

export default function MyExercise({ exercises }: MyExerciseProps) {
  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.exerciseHeader}>
        <span className={styles.exerciseTitle}>MY EXERCISE</span>
        <span className={styles.exerciseDate}>2021.05.21</span>
      </div>
      <ul className={styles.exerciseList}>
        {exercises.map((item, index) => (
          <li key={index} className={styles.exerciseItem}>
            <div>
              <span className={styles.activity}>{item.activity}</span>
              <span className={styles.calories}>{item.calories}</span>
            </div>
            <span className={styles.duration}>{item.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
