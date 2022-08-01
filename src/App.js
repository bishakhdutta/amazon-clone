import React from "react";
import "./assets/Style/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Nav from "./components/navbar";
import { useLocation, useSearchParams } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Demo />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

const Demo = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      {location.state.searchValue}
      <br />
      {searchParams.get("category")}
    </>
  );
};
