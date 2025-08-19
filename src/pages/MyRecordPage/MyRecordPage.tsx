import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import styles from "./styles.module.css";

import RecordCard from "../../components/RecordCard/RecordCard";
import DiaryCard from "../../components/DiaryCard/DiaryCard";
import Button from "../../components/Button/Button";
import FilterButton from "../../components/FilterButton/FilterButton"; // New Import
import MyExercise from "../../components/MyExercise/MyExercise"; // New Import

import recordImage1 from "/images/MyRecommend-1.jpg";
import recordImage2 from "/images/MyRecommend-2.jpg";
import recordImage3 from "/images/MyRecommend-3.jpg";

// --- Mock Data ---
const bodyChartData = [
  { name: "6月", value: 1 },
  { name: "7月", value: 2 },
  { name: "8月", value: 3 },
  { name: "9月", value: 2 },
  { name: "10月", value: 4 },
  { name: "11月", value: 3 },
  { name: "12月", value: 5 },
  { name: "1月", value: 4 },
  { name: "2月", value: 6 },
  { name: "3月", value: 5 },
  { name: "4月", value: 7 },
  { name: "5月", value: 6 },
];

const exerciseData = Array(20).fill({
  activity: "家事全般（立位・軽い）",
  calories: "26kcal",
  duration: "10 min",
});

const initialDiaryData = Array(8).fill({
  date: "2021.05.21",
  time: "23:25",
  content:
    "私の日記の記録が一部表示されます。テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
});

export default function MyRecordPage() {
  const [activeFilter, setActiveFilter] = useState("月");
  const [diaryData, setDiaryData] = useState(initialDiaryData);

  const loadMoreDiary = () => {
    setDiaryData((prev) => [...prev, ...initialDiaryData]);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.recordCards}>
        <RecordCard
          image={recordImage1}
          title="BODY RECORD"
          subtitle="自分のカラダの記録"
        />
        <RecordCard
          image={recordImage2}
          title="MY EXERCISE"
          subtitle="自分の運動の記録"
        />
        <RecordCard
          image={recordImage3}
          title="MY DIARY"
          subtitle="自分の日記"
        />
      </section>

      <section className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={bodyChartData}>
            <CartesianGrid stroke="#777777" strokeDasharray="3 6" />
            <XAxis
              dataKey="name"
              stroke="#FFFFFF"
              tickLine={false}
              axisLine={false}
            />
            <YAxis hide={true} domain={[0, "dataMax + 2"]} />
            <Tooltip contentStyle={{ backgroundColor: "#2E2E2E" }} />
            <Line
              type="monotone"
              dataKey="value"
              name="Fat %"
              stroke="#FFCC21"
              strokeWidth={3}
              dot={{ r: 5, fill: "#FFCC21" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              name="Weight"
              stroke="#8FE9D0"
              strokeWidth={3}
              dot={{ r: 5, fill: "#8FE9D0" }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className={styles.filterButtons}>
          <FilterButton
            active={activeFilter === "日"}
            onClick={() => setActiveFilter("日")}
          >
            日
          </FilterButton>
          <FilterButton
            active={activeFilter === "週"}
            onClick={() => setActiveFilter("週")}
          >
            週
          </FilterButton>
          <FilterButton
            active={activeFilter === "月"}
            onClick={() => setActiveFilter("月")}
          >
            月
          </FilterButton>
          <FilterButton
            active={activeFilter === "年"}
            onClick={() => setActiveFilter("年")}
          >
            年
          </FilterButton>
        </div>
      </section>

      <MyExercise exercises={exerciseData} />

      <section>
        <h2 className={styles.diaryTitle}>MY DIARY</h2>
        <div className={styles.diaryGrid}>
          {diaryData.map((entry, index) => (
            <DiaryCard key={index} {...entry} />
          ))}
        </div>
      </section>

      <div className={styles.buttonContainer}>
        <Button onClick={loadMoreDiary}>自分の日記をもっと見る</Button>
      </div>
    </div>
  );
}
