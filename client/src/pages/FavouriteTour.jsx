import React from 'react'
import PackageCard from '../components/PackageCard'
import { GoHeartFill } from 'react-icons/go'

export default function FavouriteTour() {
  return (
    <div>
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
    </div>
  )
}
