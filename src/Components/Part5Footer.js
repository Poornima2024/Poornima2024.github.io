import React from "react";
//footer created
const Part5Footer = () => {
  return (
    <div className="mt-[7%] flex flex-col justify-center items-center bg-slate-100 ">
      <div className="flex flex-col justify-center items-center mb-[7%]">
        <span className="lg:text-5xl sph:text-3xl sph:w-[50%] font-extrabold tracking-wide">
          What people are saying
        </span>
        <div className="grid lg:grid-cols-3 lg:grid-rows-2 sph:grid-cols-1 sph:grid-rows-4 w-[100%] bg-slate-100 gap-[2%] pl-[2%] pr-[2%] mt-[3%] mb-[7%] gap-y-[8%]">
          <div className="flex  border-1  rounded-xl shadow-2xl bg-white">
            <div>
              <figcaption className=" flex flex-col justify-center items-center p-[12%]">
                <img
                  src="	https://orimon.ai/images/testimonials/SPqshyZB9Frlzt4n411CORTd.jpeg"
                  className="rounded-full w-10 h-10 !my-0 "
                ></img>
                <span className="text-gray-800 text-center">
                  Abhishek Singh
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 text-center ">
                  Founder at The FarmPURE
                </span>
              </figcaption>
            </div>
            <div className="flex items-center justify-center p-[3%] w-[60%]">
              <p>Orimon is like an angel in disguise for our business.</p>
            </div>
          </div>

          <div className="lg:col-span-2 flex  border-1  rounded-xl shadow-2xl bg-white">
            <div className="w-[59%]">
              <figcaption className=" flex flex-col justify-center items-center p-[12%]">
                <img
                  src="	https://orimon.ai/images/testimonials/rDsLRXYvdcHWEatwmU5lzLFy.jpeg"
                  className="rounded-full w-10 h-10 !my-0 "
                ></img>
                <span className="text-gray-800 text-center">Nick Quick</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 text-center">
                  Co-Founder at Postby
                </span>
              </figcaption>
            </div>
            <div className="flex items-center justify-center p-[3%]">
              <p>
                Co-Founder at Postby I am so impressed with the AI chatbot
                building platform called Orimon! It's incredibly user-friendly
                and makes creating a custom bot a breeze. The setup is fast and
                efficient, and it allows me to customize every aspect of my
                chatbot. I'm really happy with the results, and I'm sure that
                others would be too. It's an amazing tool for anyone who wants
                to build their own AI chatbot!
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 flex  border-1  rounded-xl shadow-2xl bg-white">
            <div>
              <figcaption className=" flex flex-col justify-center items-center p-[12%]">
                <img
                  src="	https://orimon.ai/images/testimonials/P40ltOPybKEtO1mSgjsM7vcZ.jpeg"
                  className="rounded-full w-10 h-10 !my-0 "
                ></img>
                <span className="text-gray-800 text-center">
                  Davide Andrea Pozzoni
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 text-center">
                  Marketing Automation Manager presso EF Education First
                </span>
              </figcaption>
            </div>
            <div className="flex items-center justify-center p-[3%]">
              <p>
                thousands of students asking question to the Orimon Bot. 4 out
                of 5 students leaving a feedback happy with the experience
              </p>
            </div>
          </div>

          <div className="flex  border-1  rounded-xl shadow-2xl bg-white">
            <div>
              <figcaption className=" flex flex-col justify-center items-center p-[12%]">
                <img
                  src="	https://orimon.ai/images/testimonials/72fead7b-a46…64-2c1c-480f-bff9-117e3d2c8b40_1586515948962.jpeg"
                  className="rounded-full w-10 h-10 !my-0 "
                ></img>
                <span className="text-gray-800 text-center">Mark Fenty</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 mt-0 text-center">
                  CEO of Positive Activities Developments (CIC)
                </span>
              </figcaption>
            </div>
            <div className="flex items-center justify-center p-[3%]">
              <p>So far for a non technical person I am amazed with bot</p>
            </div>
          </div>
        </div>

        <div className="bg-btncolor flex justify-center items-center w-[90%] border rounded-3xl">
          <div className="flex flex-col  gap-[15%] justify-center items-center pl-[2%]">
            <span className="text-5xl font-extrabold text-white tracking-wide w-[71%] ml-[-9%] pb-[5%]">
              Let AI Sales Agents 3X Your Revenue
            </span>
            <p className="text-white w-[80%] pb-[5%]">
              Make more money while you sleep by seizing every opportunity with
              Orimon AI. Interact with your visitors 24/7 and guide them through
              the buying journey, turning traffic into real revenue.
            </p>

            <div className="flex  border rounded-lg justify-center gap-[2%] bg-white w-[70%] ml-[-10%]">
              <span className="bg-gradient-custom text-transparent bg-clip-text p-[2%]">
                Your AI sales agent just in 2 mins
              </span>
              <button className="bg-btncolor text-white p-[1%] rounded-lg">
                Build now for free
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://orimon.ai/images/home/cta-banner.png"
              className="  rounded-r-2xl"
            ></img>
          </div>
        </div>

        <footer className="mt-[10%]">
          <div className="flex w-[100%]  pl-[4%] pr-[3%]">
            <div className="w-[30%] flex flex-col gap-[2%]">
              <img src="	https://orimon.ai/img/logoFullLight.webp" className="w-[60%]"></img>
              <span>© 2024 Orimon AI Inc. All rights reserved.</span>
            </div>
            <div className="w-[60%] grid grid-cols-4 grid-rows-1">
              <div className="flex flex-col items-center justify-center">
                <span>Pricing</span>
                <span>Featured Bots</span>
                <span>Help Docs</span>
                <span>Road Map</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Community</span>
                <span>Affiliate</span>
                <span>Blog</span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Contact Us</span>
                <span>Feature Request</span>
              </div>
              <div className="flex items-center justify-center gap-[2%]">
                <span>Ready to try? </span>
                <button className=" bg-slate-100 text-btncolor border-btncolor border-2">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Part5Footer;
