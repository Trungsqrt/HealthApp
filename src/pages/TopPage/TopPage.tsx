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

import HexagonMenuItem from "../../components/HexMenuItem/HexMenuItem";
import MealCard from "../../components/MealCard/MealCard";
import Button from "../../components/Button/Button";

import mainImage from "/images/d01.jpg";
import iconKnife from "../../components/icons/icon_knife.png";
import iconCup from "../../components/icons/icon_cup.png";

// Mock Data
const initialMealData = [
  { image: "/images/m01.jpg", label: "05.21.Morning" },
  { image: "/images/l03.jpg", label: "05.21.Lunch" },
  { image: "/images/d01.jpg", label: "05.21.Dinner" },
  { image: "/images/l01.jpg", label: "05.21.Snack" },
  { image: "/images/m02.jpg", label: "05.20.Morning" },
  { image: "/images/l02.jpg", label: "05.20.Lunch" },
  { image: "/images/d02.jpg", label: "05.20.Dinner" },
  { image: "/images/s01.jpg", label: "05.20.Snack" },
];

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

export default function MyPage() {
  const [mealData, setMealData] = useState(initialMealData);

  const loadMoreMeals = () => {
    // In a real app, you'd fetch more data here
    setMealData((prev) => [...prev, ...initialMealData]);
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.topSection}>
        <div className={styles.mainVisual}>
          <img src={mainImage} alt="Main visual" className={styles.mainImage} />
          <div className={styles.progressCircle}>
            <span className={styles.progressDate}>05/21</span>
            <span className={styles.progressPercent}>75%</span>
          </div>
        </div>
        <div className={styles.chartContainer}>
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
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FFCC21"
                strokeWidth={3}
                dot={{ r: 5, fill: "#FFCC21" }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8FE9D0"
                strokeWidth={3}
                dot={{ r: 5, fill: "#8FE9D0" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className={styles.hexagonMenu}>
        <HexagonMenuItem icon={iconKnife} text="Morning" />
        <HexagonMenuItem icon={iconKnife} text="Lunch" />
        <HexagonMenuItem icon={iconKnife} text="Dinner" />
        <HexagonMenuItem icon={iconCup} text="Snack" />
      </section>

      <section className={styles.mealGrid}>
        {mealData.map((meal, index) => (
          <MealCard key={index} image={meal.image} label={meal.label} />
        ))}
      </section>

      <div className={styles.buttonContainer}>
        <Button onClick={loadMoreMeals}>記録をもっと見る</Button>
      </div>
    </div>
  );
}
