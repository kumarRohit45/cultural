import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert, Spinner} from "flowbite-react"

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repassword) {
      return setError("password not match");
    }
    if (username.length < 5 && username.length > 20) {
      return setError("Username must be at between 6 to 20 characters");
    }
    if (password.length < 6 && password.length > 20) {
      return setError("Password must be at least 6 characters");
    }
    if (!username || !email || !password || !repassword) {
      return setError("Plesase fill out all the fields.");
    }
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        navigate("/loginas");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex gap-10">
      <div className="flex-1 flex flex-col p-10 gap-5 justify-center">
        <img
          className="w-full object-cover rounded-[30px]"
          src="https://images.unsplash.com/photo-1707343846292-56e4c6abf291?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <p className="text-gray-700 text-sm w-[50ch] ">
          Sign up on our Cultural Tourism website for personalized experiences,
          exclusive access to offers and content, easy planning, community
          engagement, regular updates, and top-notch security. Join us in
          celebrating diversity, fostering dialogue, and exploring our shared
          heritage. Sign up now for an enriching cultural journey.
        </p>
      </div>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex-1">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          SignUp as User
        </h2>
        <div className="mb-4">
          <label
            className="block text-sm font-semibold mb-2 text-gray-700"
            htmlFor="name"
          >
            User Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="username"
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
            onChange={(e) => setPassword(e.target.value)}
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
            onChange={(e) => setRepassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center my-5 gap-2">
          <p>Signup as partner?</p>
          < Link to="/signup-partner" className="text-blue-500 hover:text-blue-700">
            Click here
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Loading...</span>
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </div>
        {error && (
          <Alert className="mt-5" color="failure">
            {error}
          </Alert>
        )}
      </form>
    </div>
  );
}
