import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from './components/NavTabs'
import ButtonEmoSteering from './components/ButtonEmoSteering';
import './App.css';

function App() {
  return (
    <Router>
      <NavTabs />
    </Router>
  );
}

export default App;