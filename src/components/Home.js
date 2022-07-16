import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <>
      <div className="p-2" style={{ boxShadow: "0px 1px 10px black" }}>
        <span className="text-blue-700 ml-4">
          🆈🅾🆄 🆆🅸🅻🅻 🅵🅸🅽🅳 🅰🅻🅻 🆃🅷🅴
          <span className="text-yellow-800">
            {" "}
            🅃🅁🄴🄽🄳🄸🄽🄶 🄿🅁🄾🄳🅄🄲🅃🅂 🄾🄵 🄵🄻🄸🄿🄺🄰🅁🅃{" "}
          </span>
          🅷🅴🆁🅴
        </span>
      </div>
      <div className="w-full p-16 flex">
        <div style={{ width: "70%" }}>【W】【e】【b】 【N】【a】【m】【e】</div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-4xl mr-5 text-red-500"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-4xl mr-5 text-blue-500"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl mr-5 text-blue-800"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-4xl mr-5 text-blue-700"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-4xl mr-5 text-pink-600"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-4xl mr-5 text-blue-500"
          />
        </div>
      </div>
      <hr className="ml-16 mr-16"></hr>
      <div className="flex p-20 -mt-14 justify-between">
        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Electronics</span>
          <div class="dropdown-content">
            <a href="#">
              <p className="ch">Laptops</p>
            </a>
            <a href="#">
              <p className="ch">Refrigerator</p>
            </a>
            <a href="#">
              <p className="ch">Washig Machine</p>
            </a>
          </div>
        </div>
      </div>
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
