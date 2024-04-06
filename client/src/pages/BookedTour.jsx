import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import PackageCard from "../components/PackageCard";

export default function BookedTour() {
  return (
    <div>
      <div class="w-[70rem] h-[20rem] bg-white rounded-xl  ">
        <div class="flex items-center ml-5">
          <FaRegCircleCheck className="text-[30px] text-black -mr-8" />
          <h4 className="text-2xl ml-10 mt-2 mb-3">Booked Trip</h4>
        </div>
        <PackageCard />
      </div>
    </div>
  );
}
