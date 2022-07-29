import React from "react";
import Nav from "../Nav";
import Data from "./Data.json";
import { useParams } from "react-router-dom";
const Product = () => {
  const { category } = useParams();
  console.log(Data[category]);
  let name="Trending "+category;
  name=name.toUpperCase();
  return (
    <>
      <Nav />

      {Data[category] && (
        <div className=" -mt-16 bg-black">
          <h2 className="flex justify-center text-3xl text-white font-bold  " style={{textShadow:"4px 4px 2px blue"}}>{name}</h2>
          {Data[category].map((data, key) => {
            let link="https://www.flipkart.com/search?q="+category+"%20"+data.name+"&sort=popularity";
            return (
              <div className="big-box flex justify-center bg-slate-400 hover:bg-white ml-16 mr-16  hover:shadow-white shadow-2xl m-5 rounded-md hover:scale-x-105 hover:duration-200 ">
                <a
                  href={link}
                  target="_blank"
                  style={{ textAlign: "center" }}
                  className="m-5 p-5 bg-black rounded-md"
                >
                  <div className="score h-20 w-20 bg-slate-400  -m-5 rounded-full pt-4 font-bold text-slate-800 ">
                    Rank <br></br>
                    {data.score}</div>
                  <span className="text-3xl font-mono font-bold text-white flex justify-center mb-4 m-4  ">
                    {data.name}
                  </span>

                  <div className="flex justify-center">
                    <img src={data.img} className="w-2/5"></img>
                  </div>
                  <h6 className="mb-4 mt-5 text-white font-light italic flex ">
                    {data.about}
                  </h6>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Product;
