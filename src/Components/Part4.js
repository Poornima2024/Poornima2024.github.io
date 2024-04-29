import React from "react";

const Part4 = () => {
  return (
    <div className="flex flex-col justify-center items-center sph:w-[100%] ">
      <span className="font-extrabold lg:text-5xl sph:text-3xl sph:w-[60%] text-center tracking-wide ">
        Say Hello to Smarter Sales
      </span>

      <div className="xl:w-[80%] sph:w-[90%] flex lg:flex-row sph:flex-col justify-center items-center border-1  rounded-xl shadow-2xl pb-8 xl:mt-[2%] lg:mt-[5%] sph:mt-[8%]">
        <div className="xl:w-[40%] lg:w-[46%] sph:w-[90%] ">
          <div className="flex flex-col justify-center item-center gap-3 xl:pt-[0%] lg:pt-[10%]">
            <h1 className="font-bold xl:text-3xl tracking-wide xl:w-[72%]   lg:w-[91%] ">
              Conversational Lead Qualification
            </h1>
            <p className="xl:w-[66%] lg:w-[94%] text-center">
              Say goodbye to lead forms, say Hi to conversational lead
              qualification! Our AI sales agents are all about getting to know
              your customers through friendly, natural conversations.
            </p>
            <p className="xl:w-[66%] lg:w-[94%] text-center">
              They're not just talking; they're smartly uncovering key details,
              making every chat a fun and fruitful opportunity to qualify leads.
            </p>
          </div>
        </div>
        <div className="xl:w-[40%] lg:w-[46%] sph:w-[90%] ">
          <img
            src="	https://orimon.ai/images/home/features-step-1.png"
            className=" bg-greyclr p-[5%]"
          ></img>
        </div>
      </div>

      <div className="xl:w-[80%] sph:w-[90%] flex lg:flex-row sph:flex-col justify-center items-center border-1  rounded-xl shadow-2xl pb-8 xl:mt-[2%] lg:mt-[5%]  sph:mt-[17%]">
        <div className="xl:w-[40%] lg:w-[46%] sph:w-[90%] ">
          <img
            src="	https://orimon.ai/images/home/features-step-2.png"
            className=" bg-greyclr p-[5%]"
          ></img>
        </div>

        <div className="xl:w-[40%] lg:w-[46%] sph:w-[90%]">
          <div className="flex flex-col justify-center item-center gap-3 xl:pt-[0%] lg:pt-[10%]">
            <h1 className="font-bold xl:text-3xl tracking-wide xl:w-[72%]   lg:w-[91%] ">
              Multichannel Integration & CRM Compatibility
            </h1>
            <p className="xl:w-[66%] lg:w-[94%] text-center">
              You should be where your customers are and therefore we offer
              extensive integration capabilities!
            </p>
            <p className="xl:w-[66%] lg:w-[94%] text-center">
              Your AI sales agent will effortlessly integrate with your favorite
              messaging channels and top CRM tools ensuring seamless lead
              management and customer engagement.
            </p>
          </div>
        </div>
      </div>

      <span className="font-extrabold lg:text-5xl sph:text-3xl text-center tracking-wide lg:mt-[5%] lg:mb-[10%] sph:mt-[15%] sph:mb-[10%]">
        Everything You’ll Ever Need
      </span>

      <div className="grid lg:grid-cols-4 sph:grid-cols-2 sph:grid-rows-2 lg:grid-rows-3 w-[100%] pl-[2%] pr-[2%]">
        <div className="border-t border-b border-slate-200 flex flex-col pl-[4%]  gap-[4%] pt-[4%] pb-[4%] ">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            {" "}
            AI Observability
          </h1>
          <p className="w-[93%]">
            Your own AI hallucination police that flags AI errors, ensuring
            human agents promptly correct them for accurate interactions.
          </p>
        </div>
        <div className="border-t border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Automate Customer Support
          </h1>
          <p className="w-[89%]">
            Provide 24/7 AI-driven support to your visitors, offering instant,
            accurate responses.
          </p>
        </div>
        <div className="border-t border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Faster Purchasing Cycles
          </h1>
          <p className="w-[89%]">
            Solve sales queries even before they arise through personalized
            engagement leading to faster purchasing cycles.
          </p>
        </div>
        <div className="border-t border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            True Personalization
          </h1>
          <p className="w-[89%]">
            Customize your chatbot's look and feel to perfectly reflect your
            brand's unique identity so your AI agent feels like your brand
            advocate!
          </p>
        </div>
        <div className=" border-b border-slate-200 flex flex-col pl-[4%] gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Human Support Fallback
          </h1>
          <p className="w-[93%]">
            Let humans take over the chat when AI reaches its limits. From
            complicated query resolution to closing bigger deals!
          </p>
        </div>
        <div className=" border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Multiple Data Sources
          </h1>
          <p className="w-[89%]">
            Train your AI agents with multi-source data, for broader and richer
            interactions. From webpages to documents to product catalogs!
          </p>
        </div>
        <div className=" border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Powerful AI Models
          </h1>
          <p className="w-[89%]">
            Use the latest AI models like GPT-3.5-turbo or GPT-4 so your AI
            sales agents can run conversational sales with zero interventions.
          </p>
        </div>
        <div className=" border-b border-slate-200 flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Whitelabel
          </h1>
          <p className="w-[89%]">
            Empower your agency to fully brand the chatbot experience, offering
            clients a seamless, professional solution that's uniquely yours.
          </p>
        </div>
        <div className="flex flex-col gap-[4%] pl-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Detailed Analytics
          </h1>
          <p className="w-[93%]">
            Gain actionable insights on chatbot performance, agent efficiency,
            and customer interactions to drive strategic improvements.
          </p>
        </div>
        <div className="flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Campaign Manager
          </h1>
          <p className="w-[89%]">
            Elevate lead engagement with CRM-integrated, multi-channel outreach,
            and 24/7 automated campaigns, driving revenue and optimizing
            opportunities
          </p>
        </div>
        <div className="flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Privacy & Security
          </h1>
          <p className="w-[89%]">
            You’re in safe hands! Your data is hosted on secure servers with
            robust encryption and access control.
          </p>
        </div>
        <div className="flex flex-col  gap-[4%] pt-[4%] pb-[4%]">
          <h1 className="font-bold xl:text-xl xl:tracking-wide text-slate-700 lg:text-lg lg:tracking-normal">
            Ready to get started?
          </h1>
          <p className="w-[89%]">
            Try creating your first bot for free, it only takes 2 minutes.
          </p>
          <h3>Build Your AI Sales Agent now</h3>
        </div>
      </div>

      <span className="font-extrabold text-5xl text-left  tracking-wide mt-[5%] mb-[10%] w-[100%] pl-[2%] pr-[2%]">
        Use Case
      </span>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 sph:grid-cols-1 sph:grid-rows-4 w-[100%] pl-[2%] pr-[2%] xl:gap-[1%] lg:gap-[1%] sph:gap-[3%]">
        <div className="flex flex-col gap-[3%] lg:pb-[10%] sph:pb-[35%] border lg:border-gray-100 sph:border-gray-200 lg:shadow-sm sph:shadow-md rounded-2xl ">
          <div>
            <img
              src="https://orimon.ai/images/home/use-case-1.png"
              className="w-[100%]  rounded-t-2xl"
            ></img>
          </div>
          <h1 className="text-xl font-bold tracking-wide pl-[3%]">
            Marketing Teams
          </h1>
          <p className="w-[87%] pl-[3%]">
            Supercharge your marketing with Orimon AI! Engage visitors directly,
            ask the right questions, gather leads with precision, and qualify
            them using conversational lead qualification. Personalize each web
            experience and mine insights for smarter product development.
          </p>
          <h3 className="text-btncolor pl-[3%]">
            Explore Orimon AI for Marketing Teams
          </h3>
        </div>

        <div className="flex flex-col gap-[3%] border  border-gray-100 lg:pb-[10%] sph:pb-[35%]  sph:border-gray-200 lg:shadow-sm sph:shadow-md rounded-2xl ">
          <div>
            <img
              src="https://orimon.ai/images/home/use-case-2.png"
              className="w-[100%] rounded-t-2xl"
            ></img>
          </div>
          <h1 className="text-xl font-bold tracking-wide pl-[3%]">
            Customer Experience Teams
          </h1>
          <p className="w-[87%] pl-[3%]">
            Revolutionize your customer experience with Orimon AI. Deliver
            round-the-clock, empathetic support effortlessly. Our AI tackles a
            range of queries, ensuring every customer feels heard and helped.
            Forget forms, collect feedback through engaging conversational AI
            bots.
          </p>
          <h3 className="text-btncolor pl-[3%]">
            Explore Orimon AI for Customer Experience Teams
          </h3>
        </div>

        <div className="flex flex-col gap-[3%] border lg:pb-[10%] sph:pb-[35%]  border-gray-100 sph:border-gray-200 lg:shadow-sm sph:shadow-md rounded-2xl  ">
          <div>
            <img
              src="https://orimon.ai/images/home/use-case-3.png"
              className="w-[100%] rounded-t-2xl"
            ></img>
          </div>
          <h1 className="text-xl font-bold tracking-wide pl-[3%]">
            E-commerce Teams
          </h1>
          <p className="w-[87%] pl-[3%]">
            Transform your e-commerce with Orimon AI's E-commerce Bot, creating
            a personalized shopping journey for all your customers.. Seamlessly
            integrate with platforms like Shopify, our bots guide customers with
            expert recommendations, enhancing engagement and boosting sales.
          </p>
          <h3 className="text-btncolor pl-[3%]">
            Explore Orimon AI for E-commerce Teams
          </h3>
        </div>

        <div className="flex flex-col gap-[3%] border lg:pb-[10%] sph:pb-[35%] border-gray-100 sph:border-gray-200 lg:shadow-sm sph:shadow-md rounded-2xl  ">
          <div>
            <img
              src="https://orimon.ai/images/home/use-case-4.png"
              className="w-[100%] rounded-t-2xl"
            ></img>
          </div>
          <h1 className="text-xl font-bold tracking-wide pl-[3%]">
            Sales Teams
          </h1>
          <p className="w-[87%] pl-[3%]">
            Revolutionize sales with Orimon AI’s savvy approach to objections
            and fast-track your sales process. Our AI quickly understands and
            addresses customer hesitations, speeding up decisions and
            multiplying conversions. It’s the sales accelerator you always
            wanted!
          </p>
          <h3 className="text-btncolor pl-[3%]">
            Explore Orimon AI for Sales Teams
          </h3>
        </div>
      </div>

      <div className="mt-[7%] flex flex-col justify-center items-center">
        <h1 className="bg-gradient-custom text-transparent bg-clip-text text-lg font-bold tracking-wide">
          Integration
        </h1>
        <span className="font-extrabold lg:text-5xl sph:text-3xl tracking-wide lg:w-[50%] sph:w-[80%] text-center">
          Get data from different sources and train the chatbot
        </span>

        <div className="w-[100%] flex justify-center items-center ">
          <div className="mt-[7%]   flex justify-center items-center  ">
            <img
              src="https://orimon.ai/images/home/integration-banner-desktop.png"
              className="lg:pb-[5%] lg:w-[76%] sph:w-[90%] sph:pb-[2%]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part4;
