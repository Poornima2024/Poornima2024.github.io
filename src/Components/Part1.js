// import React from "react";

// const Part1 = () => {
//   return (
//     <div className="flex flex-col items-center pt-16 mt-[5rem]  w-[100%]">
//       <div className="mb-5 mt-2">
//         <span className="text-7xl text-slate-900 font-bold  ">Make 3X More Revenue </span>
//         <br/>
//         <span className="text-7xl font-bold bg-gradient-custom text-transparent bg-clip-text">With AI Sales Agents!</span>
//       </div>
//       <div className="flex flex-row gap-2 ">
//         <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">✅ No credit card required</span>
//         <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">🚀 Free first bot</span>
//         <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">🕜 Conversations 24/7</span>
//       </div>
//       <div>
//         <p className=" px-4 mx-auto mt-6 text-sm font-medium text-gray-900 max-w-lg mb-5">Make more money while you sleep by seizing every opportunity with Orimon Al.
//         Interact with your visitors 24/7 and guide them through the buying journey, turning traffic into real revenue.</p>
//       </div>
    
//     </div>
//   );
// };

// export default Part1;
import React from "react";

const Part1 = () => {
  return (
    <div className="flex flex-col items-center pt-16 lg:mt-[5rem] sph:mt-[3rem]  w-[100%]">
      <div className="mb-5 mt-2 w-[100%] sph:text-center">
        <span className="lg:text-7xl w-[100%] text-slate-900 font-bold sph:text-3xl sph:text-center  ">Make 3X More Revenue </span>
        <br/>
        <span className="lg:text-7xl font-bold bg-gradient-custom text-transparent bg-clip-text sph:text-3xl sph:text-center">With AI Sales Agents!</span>
      </div>
      <div className="lg:flex flex-row gap-2  sph:hidden">
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">✅ No credit card required</span>
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">🚀 Free first bot</span>
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2">🕜 Conversations 24/7</span>
      </div>
      <div className="sph:flex flex-col gap-2 lg:hidden ">
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2 text-center">✅ No credit card required</span>
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2 text-center">🚀 Free first bot</span>
        <span className="border-2 border-inherit rounded shadow-md pl-2 pr-2 text-center">🕜 Conversations 24/7</span>
      </div>
      <div>
        <p className=" px-4 mx-auto mt-6 text-sm font-medium text-gray-900 max-w-lg mb-5 sph:w-[85%] sph:text-center">Make more money while you sleep by seizing every opportunity with Orimon Al.
        Interact with your visitors 24/7 and guide them through the buying journey, turning traffic into real revenue.</p>
      </div>
    
    </div>
  );
};

export default Part1;