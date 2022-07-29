import React from "react";
import Home from "./components/Home";
import { BrowserRouter , Routes, Route} from "react-router-dom";
import Product from "./components/category/Product";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/FlipKartGrid" element={<Home />} />
          <Route exact path="/product/:category" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
