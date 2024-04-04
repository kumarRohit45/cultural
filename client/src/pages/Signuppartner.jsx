import React, { useState } from "react";

export default function Signuppartner() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    reEnterPassword: "",
    category: "",
    phoneNumber: "",
    guideInfo: {
      name: "",
      location: "",
      photo: "",
    },
    hotelInfo: {
      location: "",
      rating: "",
      rooms: "",
    },
    cabInfo: {
      carType: "",
      registrationNumber: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleGuideInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      guideInfo: {
        ...prevState.guideInfo,
        [name]: value,
      },
    }));
  };

  const handleHotelInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      hotelInfo: {
        ...prevState.hotelInfo,
        [name]: value,
      },
    }));
  };

  const handleCabInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      cabInfo: {
        ...prevState.cabInfo,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      companyName: "",
      email: "",
      password: "",
      reEnterPassword: "",
      category: "",
      phoneNumber: "",
      guideInfo: {
        name: "",
        location: "",
        photo: "",
      },
      hotelInfo: {
        location: "",
        rating: "",
        rooms: "",
      },
      cabInfo: {
        carType: "",
        registrationNumber: "",
      },
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex gap-10">
      <div className="flex-1 flex flex-col p-10 gap-5 justify-center">
        <img
          className="w-full object-cover rounded-[30px]"
          src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <p className="text-gray-700 text-sm w-[50ch]">
          Sign up on our Cultural Tourism website for personalized experiences,
          exclusive access to offers and content, easy planning, community
          engagement, regular updates, and top-notch security. Join us in
          celebrating diversity, fostering dialogue, and exploring our shared
          heritage. Sign up now for an enriching cultural journey.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1"
      >
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Partner Sign Up
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="category"
          >
            Register As
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select your category</option>
            <option value="Guide">Guide</option>
            <option value="Hotel Owner">Hotel Owner</option>
            <option value="Cab Owner">Cab Owner</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="reEnterPassword"
          >
            Re-Enter Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="reEnterPassword"
            type="password"
            name="reEnterPassword"
            placeholder="Re-enter your password"
            value={formData.reEnterPassword}
            onChange={handleChange}
            required
          />
        </div>
        {formData.category === "Guide" && (
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="guideName"
              >
                Guide Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="guideName"
                type="text"
                name="guideName"
                placeholder="Enter guide name"
                value={formData.guideInfo.name}
                onChange={handleGuideInfoChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="location"
              >
                Guide Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                type="text"
                name="location"
                placeholder="Enter guide location"
                value={formData.guideInfo.location}
                onChange={handleGuideInfoChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="photo"
              >
                Guide Photo
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photo"
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleGuideInfoChange}
                required
              />
            </div>
          </div>
        )}
        {formData.category === "Hotel Owner" && (
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="hotelLocation"
              >
                Hotel Location
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="hotelLocation"
                type="text"
                name="hotelLocation"
                placeholder="Enter hotel location"
                value={formData.hotelInfo.location}
                onChange={handleHotelInfoChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="rating"
              >
                Hotel Rating
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="rating"
                type="text"
                name="rating"
                placeholder="Enter hotel rating"
                value={formData.hotelInfo.rating}
                onChange={handleHotelInfoChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="rooms"
              >
                Number of Rooms
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="rooms"
                type="number"
                name="rooms"
                placeholder="Enter number of rooms"
                value={formData.hotelInfo.rooms}
                onChange={handleHotelInfoChange}
                required
              />
            </div>
          </div>
        )}
        {formData.category === "Cab Owner" && (
          <div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="carType"
              >
                Car Type
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="carType"
                type="text"
                name="carType"
                placeholder="Enter car type"
                value={formData.cabInfo.carType}
                onChange={handleCabInfoChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="registrationNumber"
              >
                Registration Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="registrationNumber"
                type="text"
                name="registrationNumber"
                placeholder="Enter registration number"
                value={formData.cabInfo.registrationNumber}
                onChange={handleCabInfoChange}
                required
              />
            </div>
          </div>
        )}
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
