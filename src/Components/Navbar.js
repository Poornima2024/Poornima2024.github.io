import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
const Navbar = () => {
  return (
    <div className="w-[100%] h-[5rem] flex flex-row justify-between pr-[12rem] pl-[12rem] pt-[0.5rem] items-center fixed bg-white  top-0 z-10 ">
      <div>
        <h2 className="font-bold text-black text-3xl">orimon.ai</h2>
      </div>

      <div className="flex flex-row gap-8">
        <h3 className="text-lg font-normal">Pricing</h3>
        <h3 className="text-lg font-normal">Featured Bots</h3>
        <h3 className="text-lg font-normal">Affiliated</h3>
      </div>

      <div className="flex flex-row gap-2 items-center">
        <button className="bg-btncolor text-white p-1 w-[5rem] h-[2rem] text-center rounded-md">Sign Up</button>
        <button className="font-normal">Log in</button>
        <HiOutlineArrowNarrowRight className="pt-1" />
      </div>
    </div>
  );
};

export default Navbar;
