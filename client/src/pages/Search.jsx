import React, { useState } from "react";
import { Label, Dropdown } from "flowbite-react";
import DoubleSlider from "../components/DoubleSlider";
import PackageCard from "../components/PackageCard";
import { Link } from "react-router-dom";

export default function Search() {
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [yourTrip, setYourTrip] = useState("");

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
    setSelectedDestination(e.target.value); // Set selected destination
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleNumberOfPersonsChange = (e) => {
    setNumberOfPersons(e.target.value);
  };

  const handleTripOption = (e) => {
    setYourTrip(e.target.value);
  };
  const destinationsWithPlaces = {
    Delhi: ["Qutub Minar", "Red Fort", "India Gate", "Lotus Temple"],
    Uttarakhand: [
      "Jim Corbett National Park",
      "Mussoorie",
      "Nainital",
      "Haridwar",
    ],
    // Add more destinations and their popular places as needed
  };

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);
    setSelectedPlace(""); // Reset selected place when destination changes
  };

  const handlePlaceChange = (e) => {
    setSelectedPlace(e.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log(
      "Searching from",
      from,
      "to",
      to,
      "from",
      startDate,
      "to",
      endDate
    );
  };

  const handleCustomTrip = () => {
    // Implement your custom trip logic here
    console.log("Custom trip selected");
  };

  return (
    <div className="h-fullscreen flex items-center justify-center bg-gray-100 w-fullscreen border border-blue-300 mt-2">
      <div className="w-[1000px] p-5 border border-gray-300 mt-4">
        <h2 className="mb-4 text-lg font-semibold">Search Your Dream Trip</h2>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <label
              htmlFor="from"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              From:
            </label>
            <select
              id="from"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={from}
              onChange={handleFromChange}
            >
              <option value="">Select departure location</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="London">London</option>
              <option value="Paris">Paris</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label
              htmlFor="to"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              To:
            </label>
            <select
              id="to"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={to}
              onChange={handleToChange}
            >
              <option value="">Select destination</option>
              <option value="Delhi">Delhi</option>
              <option value="Uttarakhand">Uttarakhand</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <label
              htmlFor="startDate"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              Start Date:
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={startDate}
              onChange={handleStartDateChange}
            />
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <label
              htmlFor="endDate"
              className="block mb-2 text-sm font-medium text-gray-600"
            >
              End Date:
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
              value={endDate}
              onChange={handleEndDateChange}
            />
          </div>
        </div>
        <div className="flex mb-4">
          <button
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mr-2"
            onClick={handleSearch}
          >
            Search
          </button>
          <Link to= "/customtrip"
            className="w-full px-4 py-2 text-center text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleCustomTrip}
          >
            Custom Trip
          </Link>
        </div>

        <div className="flex mt-14">
          <div className="w-full md:w-3/12 pr-2">
            <div className="text-gray-700">
              <h3 className="text-lg font-semibold mb-8">Filter Your Trip</h3>
              <div className="flex max-w-md flex-col gap-4">
                <DoubleSlider />
                <div>
                  <Label value="Trip Option" />
                  <select
                    id="yourTrip"
                    className="w-half px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 mt-2"
                    value={yourTrip}
                    onChange={handleTripOption}
                  >
                    <option value="">Select Your trip</option>
                    <option value="cultural trip">Cultural Trip</option>
                    <option value="trending trip">Trending Trip</option>
                    <option value="popular trip">Popular Trip</option>
                    <option value="highly visited">Highly Visited</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div>
                  <Label value="Number of Persons" />
                  <select
                    id="numberOfPersons"
                    className="w-half px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 mt-2"
                    value={numberOfPersons}
                    onChange={handleNumberOfPersonsChange}
                  >
                    <option value="">Select persons</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
                <div>
                  <Label value="Room Option" />
                  <div>
                    <input
                      type="checkbox"
                      id="singleRoomCheckbox"
                      className="mr-2"
                    />
                    <Label htmlFor="singleRoomCheckbox" value="Single Room" />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="doubleRoomCheckbox"
                      className="mr-2"
                    />
                    <Label htmlFor="doubleRoomCheckbox" value="Double Room" />
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="suiteRoomCheckbox"
                      className="mr-2"
                    />
                    <Label htmlFor="suiteRoomCheckbox" value="Suite Room" />
                  </div>
                </div>
                <div>
                  <Label value="Cab Option" />
                  <div>
                    <input
                      type="radio"
                      id="standardCabRadio"
                      name="cabOption"
                      className="mr-2"
                    />
                    <Label htmlFor="uberRadio" value="Standard Cab" />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="luxuryCabRadio"
                      name="cabOption"
                      className="mr-2"
                    />
                    <Label htmlFor="lyftRadio" value="Luxury Cab" />
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="suvRadio"
                      name="cabOption"
                      className="mr-2"
                    />
                    <Label htmlFor="taxiRadio" value="SUV Cab" />
                  </div>
                </div>
                <div>
                  <Label value="Place Option" />
                  <select
                    id="placeOption"
                    className="w-half px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200 mt-2"
                    value={selectedPlace}
                    onChange={handlePlaceChange}
                  >
                    <option value="">Select Destination</option>
                    {selectedDestination &&
                      destinationsWithPlaces[selectedDestination].map(
                        (place) => (
                          <option key={place} value={place}>
                            {place}
                          </option>
                        )
                      )}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-9/12 border-l-2 ml-0">
            <h3 className="text-2xl font-bold mb-10">Trending Trip</h3>
            <div className="flex space-y-4 flex-col items-center">
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <button className="bg-blue-600 w-72 h-10 rounded-full text-white">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
