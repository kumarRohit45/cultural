import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signuppartner() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [isPartner, setIsPartner] = useState(true);
  const [partner, setPartner] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [photo, setPhoto] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  console.log(partner);
  console.log(photo)

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
            value={partner}
            onChange={(e) => setPartner(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your category
            </option>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={e => setPassword(e.target.value)}
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
            value={repassword}
            onChange={e => setRepassword(e.target.value)}
            required
          />
        </div>
        {partner === "Guide" && (
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
                value={name}
                onChange={e => setName(e.target.value)}
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
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
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
                value={address}
                onChange={e => setAddress(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select guide location
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Goa">Goa</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
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
                onChange={e => setPhoto(e.target.value)}
                required
              />
            </div>
          </>
        )}
        <div className="flex items-center justify-center my-5 gap-2">
          <p>Signup as User?</p>
          <Link to="/sign-up" className="text-blue-500 hover:text-blue-700">
            Click here
          </Link>
        </div>
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
