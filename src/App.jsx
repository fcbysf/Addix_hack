import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Quiz from "./components/Quiz";
import Home from "./Home";
import Reviews from "./Reviews";
import DashboardLayout from "./dashboard/DashboardLayout";
import TrackProgress from "./dashboard/pages/TrackProgress";
import Talk from "./dashboard/pages/Talk";
import Doctors from "./dashboard/pages/Doctors";
import Recovery from "./dashboard/pages/Recovery";

export default function App() {
  return (
    <>
      <Routes>
        {/* Pages publiques */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/quiz" element={<Layout><Quiz /></Layout>} />
        <Route path="/reviews" element={<Layout><Reviews /></Layout>} />

        {/* Dashboard (après le quiz) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<TrackProgress />} />
          <Route path="talk" element={<Talk />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="recovery" element={<Recovery />} />
        </Route>
      </Routes>
    </>
  );
}
