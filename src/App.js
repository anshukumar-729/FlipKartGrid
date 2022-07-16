import React, { Component } from "react";
import Home from "./components/Home";
import { BrowserRouter , Routes, Route, Link } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className="" style={{ backgroundColor: "#191C1B" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
