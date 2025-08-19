import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MyPage from "./pages/TopPage/TopPage"; // Import the new page

function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main style={{ flexGrow: 1, paddingTop: "64px" }}>
        <Routes>
          <Route path="/" element={<MyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
