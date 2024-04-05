import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaHouseUser } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { LuCalendarClock } from "react-icons/lu";

export default function DashboardPartner() {
  return (
    <div className="w-full h-[35rem] bg-blue-200 relative flex flex-col  items-center gap-10">
      <h1 className="text-3xl -mb-5 mt-5 relative right-[32rem]">
        Partner Dashboard
      </h1>
      <div className="flex flex-wrap gap-7 mt-7 justify-start items-center h-auto w-[80rem]">
        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <FaHouseUser className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Register Your ___</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <HiOutlineArrowPath className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Ongoing Book</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <FaRegCircleCheck className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Completed Book</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <LuCalendarClock className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Upcoming Book </p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <LuIndianRupee className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Monthly Earning</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>
      </div>
    </div>
  );
}
