import styles from "./styles.module.css";

type FilterButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

export default function FilterButton({
  children,
  active,
  onClick,
}: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.filterButton} ${active ? styles.active : ""}`}
    >
      {children}
    </button>
  );
}
