import React, { useState, useEffect } from "react";

export default function Customtrip() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedHotel, setSelectedHotel] = useState("");
  const [selectedCab, setSelectedCab] = useState("");
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [totalFare, setTotalFare] = useState({
    totalFare: 0,
    totalHotelFare: 0,
    totalCabFare: 0,
    totalPlaceFare: 0
  });
  const [isFareSplitEnabled, setIsFareSplitEnabled] = useState(false);

  useEffect(() => {
    const calculateFare = () => {
      let totalHotelFare = 0;
      let totalCabFare = 0;
      let totalPlaceFare = selectedPlaces.length * 5000;

      if (selectedHotel === "hotel1") {
        totalHotelFare += 15000;
      } else if (selectedHotel === "hotel2") {
        totalHotelFare += 10000;
      } else if (selectedHotel === "hotel3") {
        totalHotelFare += 8000;
      } else if (selectedHotel === "hotel4") {
        totalHotelFare += 5000;
      } else if (selectedHotel === "hotel5") {
        totalHotelFare += 2000;
      }

      if (selectedCab === "cabOption1") {
        totalCabFare += 2000;
      } else if (selectedCab === "cabOption2") {
        totalCabFare += 1500;
      } else if (selectedCab === "cabOption3") {
        totalCabFare += 1200;
      } else if (selectedCab === "cabOption4") {
        totalCabFare += 1000;
      } else if (selectedCab === "cabOption5") {
        totalCabFare += 700;
      }

      let totalFareValue = totalPlaceFare + totalHotelFare + totalCabFare;
      if (isFareSplitEnabled) {
       
       
      }

      setTotalFare({
        totalFare: totalFareValue,
        totalHotelFare,
        totalCabFare,
        totalPlaceFare
      });
    };

    calculateFare();
  }, [selectedPlaces, selectedHotel, selectedCab, isFareSplitEnabled]);

  const handleFromChange = (e) => {
    setFrom(e.target.value);
  };

  const handleToChange = (e) => {
    setTo(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleHotelSelection = (hotel) => {
    setSelectedHotel(hotel);
  };

  const handleCabSelection = (cab) => {
    setSelectedCab(cab);
  };

  const handleSearch = () => {
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
    console.log("Selected Hotel:", selectedHotel);
    console.log("Selected Cab:", selectedCab);
    console.log("Selected Places:", selectedPlaces);
    console.log("Total Fare:", totalFare.totalFare);
  };

  const handlePlaceSelection = (e) => {
    const place = e.target.value;
    if (selectedPlaces.includes(place)) {
      setSelectedPlaces(selectedPlaces.filter((p) => p !== place));
    } else {
      setSelectedPlaces([...selectedPlaces, place]);
    }
  };

  return (
    <div className="h-fullscreen flex items-center justify-center bg-gray-100 w-fullscreen border border-blue-300 mt-2">
      <div className="w-[1000px] p-5 border border-gray-300 mt-4">
        <h2 className="mb-4 text-lg font-semibold">Customize Your Dream Trip</h2>
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
            </select>
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
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
        <div className="mb-4">
          <label
            htmlFor="placesToVisit"
            className="block mb-2 text-sm font-medium text-gray-600"
          >
            Places to Visit:
          </label>
          <div className="border border-gray-300 p-4 rounded-md">
            {to === "Delhi" && (
              <>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="indiaGate"
                    className="form-checkbox mr-2"
                    value="India Gate"
                    checked={selectedPlaces.includes("India Gate")}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="indiaGate"
                    className="text-sm font-medium text-gray-600"
                  >
                    India Gate
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="qutubMinar"
                    className="form-checkbox mr-2"
                    value="Qutub Minar"
                    checked={selectedPlaces.includes("Qutub Minar")}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="qutubMinar"
                    className="text-sm font-medium text-gray-600"
                  >
                    Qutub Minar
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="lotusTemple"
                    className="form-checkbox mr-2"
                    value="Lotus Temple"
                    checked={selectedPlaces.includes("Lotus Temple")}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="lotusTemple"
                    className="text-sm font-medium text-gray-600"
                  >
                    Lotus Temple
                  </label>
                </div>
              </>
            )}
            {to === "Uttarakhand" && (
              <>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="nainital"
                    className="form-checkbox mr-2"
                    value="Nainital"
                    checked={selectedPlaces.includes("Nainital")}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="nainital"
                    className="text-sm font-medium text-gray-600"
                  >
                    Nainital
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="mussoorie"
                    className="form-checkbox mr-2"
                    value="Mussoorie"
                    checked={selectedPlaces.includes("Mussoorie")}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="mussoorie"
                    className="text-sm font-medium text-gray-600"
                  >
                    Mussoorie
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    id="jimCorbett"
                    className="form-checkbox mr-2"
                    value="Jim Corbett National Park"
                    checked={selectedPlaces.includes(
                      "Jim Corbett National Park"
                    )}
                    onChange={handlePlaceSelection}
                  />
                  <label
                    htmlFor="jimCorbett"
                    className="text-sm font-medium text-gray-600"
                  >
                    Jim Corbett National Park
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex mb-4">
          <div className="w-full md:w-1/2 pr-2">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="hotelOption"
                className="form-checkbox mr-2"
                checked={selectedHotel !== ""}
                onChange={() =>
                  setSelectedHotel(selectedHotel !== "" ? "" : "selected")
                }
              />
              <label
                htmlFor="hotelOption"
                className="text-sm font-medium text-gray-600"
              >
                Include Hotel
              </label>
            </div>
            {selectedHotel !== "" && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Select Hotel:</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hotel1"
                    name="hotel"
                    className="form-radio mr-2"
                    checked={selectedHotel === "hotel1"}
                    onChange={() => handleHotelSelection("hotel1")}
                  />
                  <label
                    htmlFor="hotel1"
                    className="text-sm font-medium text-gray-600"
                  ></label>
                  <span className="ml-2 text-yellow-400">★★★★★</span>{" "}
                  {/* 5-star rating */}
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hotel2"
                    name="hotel"
                    className="form-radio mr-2"
                    checked={selectedHotel === "hotel2"}
                    onChange={() => handleHotelSelection("hotel2")}
                  />
                  <label
                    htmlFor="hotel2"
                    className="text-sm font-medium text-gray-600"
                  ></label>
                  <span className="ml-2 text-yellow-400">★★★★☆</span>{" "}
                  {/* 4-star rating */}
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hotel3"
                    name="hotel"
                    className="form-radio mr-2"
                    checked={selectedHotel === "hotel3"}
                    onChange={() => handleHotelSelection("hotel3")}
                  />
                  <label
                    htmlFor="hotel3"
                    className="text-sm font-medium text-gray-600"
                  ></label>
                  <span className="ml-2 text-yellow-400">★★★☆</span>{" "}
                  {/* 3-star rating */}
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hotel4"
                    name="hotel"
                    className="form-radio mr-2"
                    checked={selectedHotel === "hotel4"}
                    onChange={() => handleHotelSelection("hotel4")}
                  />
                  <label
                    htmlFor="hotel4"
                    className="text-sm font-medium text-gray-600"
                  ></label>
                  <span className="ml-2 text-yellow-400">★★☆</span>{" "}
                  {/* 2-star rating */}
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="hotel5"
                    name="hotel"
                    className="form-radio mr-2"
                    checked={selectedHotel === "hotel5"}
                    onChange={() => handleHotelSelection("hotel5")}
                  />
                  <label
                    htmlFor="hotel5"
                    className="text-sm font-medium text-gray-600"
                  ></label>
                  <span className="ml-2 text-yellow-400">★☆</span>{" "}
                  {/* 1-star rating */}
                </div>
              </div>
            )}
          </div>
          <div className="w-full md:w-1/2 pl-2">
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                id="cabOption"
                className="form-checkbox mr-2"
                checked={selectedCab !== ""}
                onChange={() =>
                  setSelectedCab(selectedCab !== "" ? "" : "selected")
                }
              />
              <label
                htmlFor="cabOption"
                className="text-sm font-medium text-gray-600"
              >
                Include Cab
              </label>
            </div>
            {selectedCab !== "" && (
              <div className="bg-white rounded-lg shadow-md p-4 mb-4">
                <h3 className="text-lg font-semibold mb-2">Select Cab:</h3>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cabOption1"
                    name="cab"
                    className="form-radio mr-2"
                    checked={selectedCab === "cabOption1"}
                    onChange={() => handleCabSelection("cabOption1")}
                  />
                  <label
                    htmlFor="cabOption1"
                    className="text-sm font-medium text-gray-600"
                  >
                    5 seater ₹2000/km
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cabOption2"
                    name="cab"
                    className="form-radio mr-2"
                    checked={selectedCab === "cabOption2"}
                    onChange={() => handleCabSelection("cabOption2")}
                  />
                  <label
                    htmlFor="cabOption2"
                    className="text-sm font-medium text-gray-600"
                  >
                    4 seater ₹1500/km
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cabOption3"
                    name="cab"
                    className="form-radio mr-2"
                    checked={selectedCab === "cabOption3"}
                    onChange={() => handleCabSelection("cabOption3")}
                  />
                  <label
                    htmlFor="cabOption3"
                    className="text-sm font-medium text-gray-600"
                  >
                    3 seater ₹1200/km
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cabOption4"
                    name="cab"
                    className="form-radio mr-2"
                    checked={selectedCab === "cabOption4"}
                    onChange={() => handleCabSelection("cabOption4")}
                  />
                  <label
                    htmlFor="cabOption4"
                    className="text-sm font-medium text-gray-600"
                  >
                    2 seater ₹1000/km
                  </label>
                </div>
                <div className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="cabOption5"
                    name="cab"
                    className="form-radio mr-2"
                    checked={selectedCab === "cabOption5"}
                    onChange={() => handleCabSelection("cabOption5")}
                  />
                  <label
                    htmlFor="cabOption5"
                    className="text-sm font-medium text-gray-600"
                  >
                    1 seater ₹700/km
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="text-lg font-semibold mb-2">
          Total Fare: ₹{totalFare.totalFare.toFixed(2)}
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="fareSplitOption"
            className="form-checkbox mr-2"
            checked={isFareSplitEnabled}
            onChange={() => setIsFareSplitEnabled(!isFareSplitEnabled)}
          />
          <label
            htmlFor="fareSplitOption"
            className="text-sm font-medium text-gray-600"
          >
            Split Fare
          </label>
        </div>
        {isFareSplitEnabled && (
          <div>
            <div className="text-lg font-semibold mb-2">
              Hotel Fare: ₹{totalFare.totalHotelFare.toFixed(2)}
            </div>
            <div className="text-lg font-semibold mb-2">
              Cab Fare: ₹{totalFare.totalCabFare.toFixed(2)}
            </div>
            <div className="text-lg font-semibold mb-2">
              Visting Place Fare: ₹{totalFare.totalPlaceFare.toFixed(2)}
            </div>
          </div>
        )}
        <div className="flex">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            onClick={handleSearch}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
