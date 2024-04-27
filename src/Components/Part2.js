import React from "react";
import orimonpic from "./Images/orimonpic.png";
import data from "../img";
const Part2 = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div>
        <button className="bg-btncolor text-white text-center rounded-md w-[14rem] h-[3rem] ">
          {" "}
          Build your AI sales agent
        </button>
      </div>
      <div className=" bg-cover bg-center w-[70%] mt-8">
        <img
          src={orimonpic}
          alt="Orimon Pic"
          className=" w-[100%] opacity-50  bg-black filter blur-[2px] "
        />
      </div>

      <div className="w-[41%] flex flex-col mt-[5%] mb-[5%]">
        <span className="text-5xl font-black tracking-wide  flex justify-center items-center">
          Trusted By Over 10,000+{" "}
        </span>
        <span className="text-center text-5xl font-black tracking-wide">
          Businesses
        </span>
      </div>

      <div className=" image-container mb-8 flex w-[4102px] ">
        {data.map((im, index) => (
          <div className=" bg-gray-100  w-[180%] h-[60%] flex justify-center items-center">
          <img
            key={index}
            src={im.image}
            className="w-[100%] h-[80%] inline-block  p-[3%]"
          />
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center">
        <span className="text-5xl font-black tracking-wide">How It Works</span>
        <p className="w-[51%]">
          Make more money while you sleep by seizing every opportunity with
          Orimon Al.Interact with your visitors 24/7 and guide them through the
          buying journey, turning traffic into  
        </p>
        <span className="text-center">real revenue.</span>
      </div>
    </div>
  );
};

export default Part2;
