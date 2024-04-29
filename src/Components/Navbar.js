// import React from "react";
// import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// const Navbar = () => {
  
//   return (
//     <div className="w-full h-[5rem] flex flex-row justify-evenly  pt-[0.5rem] items-center fixed bg-white  top-0 z-10 ">
//       <div>
//         <h2 className="font-bold text-black text-3xl">orimon.ai</h2>
//       </div>

//       <div className="flex flex-row gap-8">
//         <h3 className="text-lg font-normal">Pricing</h3>
//         <h3 className="text-lg font-normal">Featured Bots</h3>
//         <h3 className="text-lg font-normal">Affiliated</h3>
//       </div>

//       <div className="flex flex-row gap-2 items-center">
//         <button className="bg-btncolor text-white p-1 w-[5rem] h-[2rem] text-center rounded-md">Sign Up</button>
//         <button className="font-normal">Log in</button>
//         <HiOutlineArrowNarrowRight className="pt-1" />
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { HiOutlineBars3 } from "react-icons/hi2";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  function togglehandler() {
    setToggle(!toggle);
  }
  return (
    <div className="relative">
    <div className="w-[100%] h-[5rem] flex flex-row justify-around pr-[12rem] sph:pr-0 sph:pl-0 sph:pt-0 pl-[12rem] pt-[0.5rem] items-center fixed bg-white  top-0 z-10 sph:z-4 ">
      <div>
        <h2 className="font-bold text-black text-3xl sph:text-2xl sph:font-extrabold">
          orimon.ai
        </h2>
      </div>

      <div className="lg:flex flex-row gap-8  sph:hidden">
        <h3 className="text-lg font-normal">Pricing</h3>
        <h3 className="text-lg font-normal">Featured Bots</h3>
        <h3 className="text-lg font-normal">Affiliated</h3>
      </div>

      <div className="lg:flex flex-row gap-2 items-center sph:hidden">
        <button className="bg-btncolor text-white p-1 w-[5rem] h-[2rem] text-center rounded-md">
          Sign Up
        </button>
        <button className="font-normal">Log in</button>
        <HiOutlineArrowNarrowRight className="pt-1" />
      </div>

      <div className="sph:flex  sph:flex-row  gap-2 items-center lg:hidden">
        <button className="bg-btncolor text-white p-1 w-[6rem] h-[2rem] text-center rounded-md">
          Try For Free
        </button>
        <HiOutlineBars3
          className="font-bold text-2xl"
          onClick={togglehandler}
        />
      </div>
      {toggle == true && (
        <div className="w-[80%] absolute top-16 bg-white z-10">
          <ul className="text-center space-y-4">
            <li className="text-lg font-semibold">Pricing</li>
            <li className="text-lg font-semibold">Featured Bots</li>
            <li className="text-lg font-semibold">Affiliated</li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
