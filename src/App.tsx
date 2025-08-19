import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./pages/TopPage/TopPage";

import "./index.css";
import MyRecordPage from "./pages/MyRecordPage/MyRecordPage";
import ColumnPage from "./pages/ColumnPage/ColumnPage";

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flexGrow: 1, paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/record" element={<MyRecordPage />} />
          <Route path="/column" element={<ColumnPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
