import React from "react";
import "./assets/Style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Nav from "./components/navbar";
function App() {
  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
