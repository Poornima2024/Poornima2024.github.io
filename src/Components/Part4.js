import React from "react";

const Part4 = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-extrabold text-5xl  tracking-wide ">
        Say Hello to Smarter Sales
      </span>

      <div className="w-[80%] flex flex-row  justify-center items-center border-1  rounded-xl shadow-2xl pb-8">
        <div className="w-[40%]">
        
          <div className="flex flex-col justify-center  gap-3">
            <h1 className="font-bold text-3xl tracking-wide w-[72%]">
            Conversational Lead Qualification
            </h1>
            <p className="w-[66%]">
            Say goodbye to lead forms, say Hi to conversational lead qualification! Our AI sales agents 
            are all about getting to know your customers through friendly, natural conversations.
            </p>
            <p className="w-[66%]">
            They're not just talking; they're smartly uncovering key details, making every chat a fun and fruitful opportunity to qualify leads.
            </p>
          </div>
        </div>
        <div className="w-[40%] p-[1%] ">
          <img
            src="	https://orimon.ai/images/home/features-step-1.png"
            className=" bg-greyclr p-[5%]"
          ></img>
        </div>
      </div>


      <div className="w-[80%] gap-[6%] flex flex-row  justify-center items-center border-1  rounded-xl shadow-2xl pb-8 mt-[4%] mb-[4%]">

      <div className="w-[40%] p-[1%] ">
          <img
            src="	https://orimon.ai/images/home/features-step-2.png"
            className=" bg-greyclr p-[5%]"
          ></img>
        </div>

        <div className="w-[40%]">
        
          <div className="flex flex-col justify-center  gap-3">
            <h1 className="font-bold text-3xl tracking-wide w-[72%]">
            Multichannel Integration & CRM Compatibility
            </h1>
            <p className="w-[66%]">
            You should be where your customers are and therefore we offer extensive integration capabilities!
            </p>
            <p className="w-[66%]">
            Your AI sales agent will effortlessly integrate with your favorite messaging channels and top CRM tools
             ensuring seamless lead management and customer engagement.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Part4;
