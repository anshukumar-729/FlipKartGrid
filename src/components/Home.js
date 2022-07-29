import React from "react";
import Nav from "./Nav";
import Data from "./category/Data.json"

const Home = () => {
  return (
    <>
      <Nav/>
      <div className="p-10 -mt-16 bg-black h-screen">
      <div className="carousel">
        <div className="carousel-row">
          <div className="carousel-tile">
            <img src={Data["shirts"][0]["img"]} height={200} />
          </div>
          <div className="carousel-tile">
            <img src={Data["sarees"][0]["img"]} height={200} />
          </div>
          <div className="carousel-tile">
            <img src={Data["mens-cap"][0]["img"]} height={200} />
          </div>
          <div className="carousel-tile">
            <img src={Data["jewelry"][0]["img"]} height={200} />
          </div>
          <div className="carousel-tile">
            <img src={Data["blazers"][0]["img"]} height={200} />
          </div>
          <div className="carousel-tile">
            <img src={Data["dupatta"][0]["img"]} height={200} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
// 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;
