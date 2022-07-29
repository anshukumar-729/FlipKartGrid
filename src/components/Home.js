import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <>
      <Nav/>
      <div className="p-10 -mt-16">
      <div className="carousel">
        <div className="carousel-row">
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
          <div className="carousel-tile">
            <img src="https://loremflickr.com/320/240" height={200} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
// 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;
