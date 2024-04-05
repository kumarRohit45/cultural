import React from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { GoHeartFill } from "react-icons/go";
import { FaTools } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";
import PackageCard from "../components/PackageCard";
import { IoIosStar } from "react-icons/io";
import { PiFlowerLotus } from "react-icons/pi";

export default function Dashboard() {
  return (
    <div className="w-full h-auto bg-blue-200 relative flex flex-col  items-center gap-10">
      <div className="flex flex-wrap gap-7 mt-7 justify-center items-center">
        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <BiSolidPlaneAlt className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Book You Trip</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <GoHeartFill className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Favourite Tour</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <FaRegCircleCheck className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Booked Tour</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>

        <div className="w-64 h-36 bg-gray-100 rounded-2xl flex flex-col justify-center items-center gap-3 shadow-lg">
          <FaTools className="text-[50px] text-black mt-1" />
          <p className="text-black text-2xl">Setting</p>
          <button className="bg-rose-500 w-20 rounded-md text-base text-white">
            visit
          </button>
        </div>
      </div>

      <div class="w-[70rem] h-[20rem] bg-white rounded-xl  ">
        <div class="flex items-center ml-5">
        <FaRegCircleCheck className="text-[30px] text-black -mr-8" />
        <h4 className="text-2xl ml-10 mt-2 mb-3">Booked Trip</h4>
        </div>
        <PackageCard />
      </div>
      
      <div class=" bg-white w-[78rem] h-autoflex rounded-xl scale-90 ">
      <div class="flex items-center ml-5 mt-3">
          <GoHeartFill className="text-[33px] text-black -mr-8" />
          <h4 className="text-[28px] ml-10 ">Favourite Tour</h4>
         </div>
        <div class=" flex flex-wrap  gap-y-5 my-10 mt-3 ">
         <PackageCard />
         <PackageCard />
       </div>
      </div>


      <div class=" bg-white w-[78rem] h-autoflex rounded-xl scale-90 ">
      <div class="flex items-center ml-5 mt-3">
         <IoIosStar className="text-[35px] text-black -mr-8" />
         <h4 className="text-[28px] ml-10 ">Popular Tour</h4>
      </div>
        <div class=" flex flex-wrap  gap-y-6 gap-3 my-10 mt-3 ">
         <PackageCard />
         <PackageCard />
         <PackageCard />
         <PackageCard />
       </div>
      </div>


      <div class=" bg-white w-[78rem] h-autoflex rounded-xl scale-90 ">
      <div class="flex items-center ml-5 mt-3">
         <PiFlowerLotus  className="text-[35px] text-black -mr-8" />
         <h4 className="text-[28px] ml-10 ">Cultural Tour</h4>
      </div>
        <div class=" flex flex-wrap  gap-y-6 gap-3 my-10 mt-3 ">
         <PackageCard />
         <PackageCard />
         <PackageCard />
         <PackageCard />
         <PackageCard />
       </div>
      </div>


    </div>
  );
}