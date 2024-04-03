import React, { useState } from 'react';

export default function PartnerSignUpForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    reEnterPassword: '',
    category: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      companyName: '',
      email: '',
      password: '',
      reEnterPassword: '',
      category: '',
      phoneNumber: ''
    });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Partner Sign Up</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="companyName">
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="phoneNumber">
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
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="password">
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
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="reEnterPassword">
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
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2 text-gray-700" htmlFor="category">
            Select Category
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
