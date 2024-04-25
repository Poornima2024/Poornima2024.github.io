import React from "react";
import { GoGitBranch } from "react-icons/go";
import { TbBellRinging } from "react-icons/tb";
import { MdOutlineStarOutline } from "react-icons/md";
import { BiAlarmSnooze } from "react-icons/bi";
import language from "../language";
const Part3 = () => {
  return (
    <div className="mt-[6rem] flex flex-col  items-center justify-center mb-[6rem] ">
      <div className="w-[80%] flex flex-row  justify-center items-center border-1  rounded shadow-2xl pb-8">
        <div className="w-[40%]">
          <span>
            <GoGitBranch className="text-btncolor h-8 w-8 font-bold text-3xl" />
          </span>
          <div className="flex flex-col justify-center  gap-3">
            <h1 className="font-bold text-3xl tracking-wide w-[42%]">
              Connect Data Sources
            </h1>
            <p className="w-[66%]">
              Say goodbye to the long laborious AI model training, and
              effortlessly connect your data sources in a few clicks and you’re
              done!
            </p>
            <p className="w-[66%]">
              Your AI sales agent can be trained on your website, other web
              pages, documents, and much more!
            </p>
          </div>
        </div>
        <div className="w-[40%] pt-[9%] ">
          <img
            src="https://orimon.ai/images/home/working-step-1.png"
            className=""
          ></img>
        </div>
      </div>

      <div className="mt-[10%] flex items-center justify-center ">
        <h1 className="text-5xl font-black tracking-wide text-center w-[54%]">
          Numbers That Matter The Most
        </h1>
      </div>

      <div className="mt-[10%] flex flex-row gap-5 justify-center items-center  ">
        <div className="w-[33%]  p-10 bg-indigo-100 border rounded-xl shadow-md gap-4">
          <div className="flex flex-row justify-center items-center bg-indigo-200 border rounded-xl p-[2%] gap-5 ">
            <TbBellRinging className="text-indigo-500 h-[20%] w-[20%] font-bold text-3xl p-3 bg-white border rounded-xl" />

            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">300%</h1>
              <span>More Leads generated!</span>
            </div>
          </div>

          <div className="pt-[7%]">
            <img src="https://orimon.ai/images/home/working-growth-step-1.png"></img>
          </div>
        </div>

        <div className="w-[33%]  p-10 bg-violet-100 border rounded-xl shadow-md gap-4">
          <div className="flex flex-row justify-center items-center bg-violet-200 border rounded-xl p-[2%] gap-5 ">
            <MdOutlineStarOutline className="text-violet-500 h-[20%] w-[20%] font-bold text-3xl p-3 bg-white border rounded-xl" />

            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">12.5%</h1>
              <span>Average Chat To Sale Conversion!</span>
            </div>
          </div>

          <div className="pt-[5%]">
            <img src="	https://orimon.ai/images/home/working-growth-step-2.png"></img>
          </div>
        </div>

        <div className="w-[33%]  p-10 bg-sky-100 border rounded-xl shadow-md gap-4">
          <div className="flex flex-row justify-center items-center bg-sky-200 border rounded-xl p-[2%] gap-5 ">
            <BiAlarmSnooze className="text-sky-500 h-[20%] w-[20%] font-bold text-3xl p-3 bg-white border rounded-xl" />
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">2.1 sec</h1>
              <span>Avg. time to craft the perfect reply</span>
            </div>
          </div>

          <div className="pt-[3%]">
            <img src="https://orimon.ai/images/home/working-growth-step-3.png"></img>
          </div>
        </div>
      </div>

      <div className="w-[100%] mt-[10%]  rounded-[11%] shadow-md bg-slate-100 flex flex-col justify-center items-center  ">
        
          <h1 className="text-lg font-bold tracking-wide bg-gradient-custom text-transparent bg-clip-text mt-[7%] mb-[2%]">
            Truly Multilingual AI Sales Agents
          </h1>
          <span className="font-extrabold text-5xl w-[43%] tracking-wide text-center ">
            Interact With Your Visitors in Over 150+ Languages{" "}
          </span>
        
        <div className="flex-wrap flex justify-around  w-[6950px] language-slider-animation pt-[5%] pb-[5%]">
          {language.map((l, index) => (
            <div
              key={index}
              className="px-7 py-4 bg-white m-2 rounded-[50px] text-gray-800 "
            >
              {l.lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Part3;
