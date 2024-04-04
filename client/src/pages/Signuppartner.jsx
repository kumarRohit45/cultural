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
      phoneNumber: "",
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name is nested (like guideInfo.location), handle nested state update
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData((prevState) => ({
        ...prevState,
        [parent]: {
          ...prevState[parent],
          [child]: value,
        },
      }));
    } else {
      // If the name is not nested, update the state normally
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        phoneNumber: "",
      },
    });
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-10">
      <div className="flex-1 p-10 gap-5 justify-center">
        <img
          className="w-full object-cover rounded-[30px]"
          src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />

        <p className="text-gray-700 text-sm w-[50ch] mt-6">
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
          SignUp as Partner
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
            <option value="" disabled>Select your category</option>
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
            User Name
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
            htmlFor="email"
          >
            E-mail
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your E-mail"
            value={formData.email}
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
        {(formData.category === "Guide") && (
          <>
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
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-semibold mb-2 text-gray-700"
                htmlFor="guidePhonenumber"
              >
                Guide Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="guidePhoneNumber"
                type="text"
                name="guidePhoneNumber"
                placeholder="Enter guide phone number"
                value={formData.guideInfo.phoneNumber}
                onChange={handleChange}
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
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="location"
                name="guideInfo.location"
                value={formData.guideInfo.location}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select guide location</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AR">Arunachal Pradesh</option>
                <option value="AS">Assam</option>
                <option value="BR">Bihar</option>
                <option value="CT">Chhattisgarh</option>
                <option value="GA">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JK">Jammu and Kashmir</option>
                <option value="GA">Goa</option>
                <option value="JH">Jharkhand</option>
                <option value="KA">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MN">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OR">Odisha</option>
                <option value="PB">Punjab</option>
                <option value="RJ">Rajasthan</option>
                <option value="SK">Sikkim</option>
                <option value="TN">Tamil Nadu</option>
                <option value="TG">Telangana</option>
                <option value="TR">Tripura</option>
                <option value="UT">Uttarakhand</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="AN">Andaman and Nicobar Islands</option>
                <option value="CH">Chandigarh</option>
                <option value="DN">Dadra and Nagar Haveli</option>
                <option value="DD">Daman and Diu</option>
                <option value="DL">Delhi</option>
                <option value="LD">Lakshadweep</option>
                <option value="PY">Puducherry</option>
                {/* Add more options as needed */}
              </select>
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
                onChange={handleChange}
                required
              />
            </div>
          </>
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
