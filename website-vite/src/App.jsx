import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home.jsx";

import Card1Page from "./pages/DashboardPage/ProjectPage/Card1Page.jsx";
import Card2Page from "./pages/DashboardPage/ProjectPage/Card2Page.jsx";
import Card4Page from "./pages/DashboardPage/ProjectPage/Card4Page.jsx";

import ProjectPageBase from "./pages/DashboardPage/ProjectPage/ProjectPageBase.jsx";
import Attributes from "./components/Attributes.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<ProjectPageBase />} />
          <Route path="/card/1" element={<Card1Page />} />
          <Route path="/card/2" element={<Card2Page />} />
          <Route path="/card/4" element={<Card4Page />} />
          <Route path="/attributes" element={<Attributes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
