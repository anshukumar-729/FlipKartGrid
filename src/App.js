import React from "react";
import Home from "./components/Home";
import { BrowserRouter , Routes, Route} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div >
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
