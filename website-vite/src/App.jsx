import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home.jsx";
import SamplePage from "./pages/DashboardPage/ProjectPage/SamplePage.jsx";
import ProjectPageBase from "./pages/DashboardPage/ProjectPage/ProjectPageBase.jsx";
import Attributes from "./components/Attributes.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPageBase />} />
          <Route path="/card/1" element={<SamplePage />} />
          <Route path="/card/2" element={<SamplePage />} />
          <Route path="/card/4" element={<SamplePage />} />
          <Route path="/card/5" element={<SamplePage />} />
          <Route path="/card/6" element={<SamplePage />} />
          <Route path="/card/7" element={<SamplePage />} />
          <Route path="/attributes" element={<Attributes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
