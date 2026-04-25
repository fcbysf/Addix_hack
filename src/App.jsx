import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Quiz from "./components/Quiz";
import Home from "./Home";
import Reviews from "./Reviews";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
        <Route path="/reviews" element={<Layout><Reviews /></Layout>} />
      </Routes>
    </>
  );
}
