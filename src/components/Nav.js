import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <div className="bg-black">
      <div className="p-2" style={{ boxShadow: "0px 1px 10px white" }}>
        <span className="text-orange-200 ml-4 text-lg ">
          🆈🅾🆄&nbsp; 🆆🅸🅻🅻 &nbsp; 🅵🅸🅽🅳 &nbsp;🅰🅻🅻 &nbsp;🆃🅷🅴
          <span className="text-white ">
            {" "}
            &nbsp;🅃🅁🄴🄽🄳🄸🄽🄶&nbsp; 🄿🅁🄾🄳🅄🄲🅃🅂&nbsp; 🄾🄵&nbsp; 🄵🄻🄸🄿🄺🄰🅁🅃{" "}
          </span>
          &nbsp;🅷🅴🆁🅴
        </span>
      </div>
      <div className="w-full p-16 flex -mt-10">
        <a href="/"><img
          className="bg-slate-200"
          src="https://see.fontimg.com/api/renderfont4/DO3oE/eyJyIjoiZnMiLCJoIjo2NSwidyI6MTAwMCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VHJlbmRpbmdz/quicksilver-fast-regular.png"
        />
        </a>

        <div style={{ width: "70%" }} className="text-white"></div>
        <div className="flex">
          <FontAwesomeIcon
            icon={faYoutube}
            className="text-4xl mr-5 text-white"
          />
          <FontAwesomeIcon
            icon={faTelegram}
            className="text-4xl mr-5 text-white"
          />
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-4xl mr-5 text-white"
          />
          <FontAwesomeIcon
            icon={faFacebook}
            className="text-4xl mr-5 text-white"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-4xl mr-5 text-white"
          />
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-4xl mr-5 text-white"
          />
        </div>
      </div>
      <hr className="ml-16 mr-16 -mt-7 "></hr>
      <div className="flex p-20 -mt-14 justify-between text-white">
        <div class="dropdown">
          <span className="sub hover:text-red-700">Electronics</span>
          <div class="dropdown-content">
            <a href="/product/shirts">
              <p className="ch">Refrigerator</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">TV & Appliances</span>
          <div class="dropdown-content">
            <a href="/product/shirts">
              <p className="ch">TV</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Men</span>
          <div class="dropdown-content">
            <a href="/product/shirts">
              <p className="ch">Shirts</p>
            </a>
            <a href="/product/jeans">
              <p className="ch">Jeans</p>
            </a>
            <a href="/product/mens-cap">
              <p className="ch">Men's Cap</p>
            </a>
            <a href="/product/blazers">
              <p className="ch">Blazers</p>
            </a>
            <a href="/product/mens-shorts">
              <p className="ch">Men's Shorts</p>
            </a>
            <a href="/product/mens-running-shoes">
              <p className="ch">Mens running shoes</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Women</span>
          <div class="dropdown-content">
            <a href="/product/sarees">
              <p className="ch">Sarees</p>
            </a>

            <a href="/product/jewelry">
              <p className="ch">Jewelry</p>
            </a>

            <a href="/product/gowns">
              <p className="ch">Gowns</p>
            </a>
            <a href="/product/lehengas">
              <p className="ch">Lehengas</p>
            </a>
            <a href="/product/dupatta">
              <p className="ch">Dupatta</p>
            </a>
            <a href="/product/womens-nightwear">
              <p className="ch">Night wear for women</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Baby & Kids</span>
          <div class="dropdown-content">
            <a href="/product/shirts">
              <p className="ch">Toys</p>
            </a>
          </div>
        </div>

        <div class="dropdown">
          <span className="sub">Home & Furniture</span>
          <div class="dropdown-content">
            <a href="/product/shirts">
              <p className="ch">Furniture</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
