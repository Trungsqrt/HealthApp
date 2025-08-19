import { useState } from "react";
import styles from "./styles.module.css";

import RecommendedButton from "../../components/RecommendedButton/RecommendedButton";
import ColumnCard from "../../components/ColumnCard/ColumnCard";
import Button from "../../components/Button/Button";
import ScrollToTopButton from "../../components/TopButton/TopButton";

// Mock Data
const initialColumnData = [
  {
    image: "/images/column-1.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-2.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-3.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-4.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-5.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-6.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-7.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
  {
    image: "/images/column-8.jpg",
    date: "2021.05.21",
    time: "23:25",
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
    tags: ["#魚料理", "#和食", "#DHA"],
  },
];

export default function ColumnPage() {
  const [columnData, setColumnData] = useState(initialColumnData);

  const loadMoreColumns = () => {
    setColumnData((prev) => [...prev, ...initialColumnData]);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.recommendedSection}>
        <RecommendedButton title="RECOMMENDED COLUMN" subtitle="オススメ" />
        <RecommendedButton title="RECOMMENDED DIET" subtitle="ダイエット" />
        <RecommendedButton title="RECOMMENDED BEAUTY" subtitle="美容" />
        <RecommendedButton title="RECOMMENDED HEALTH" subtitle="健康" />
      </section>

      <section className={styles.columnGrid}>
        {columnData.map((column, index) => (
          <ColumnCard key={index} {...column} />
        ))}
      </section>

      <div className={styles.buttonContainer}>
        <Button onClick={loadMoreColumns}>コラムをもっと見る</Button>
      </div>
      <ScrollToTopButton />
    </div>
  );
}
