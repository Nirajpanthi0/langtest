import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa";
import login from "../../assets/images/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    // Basic validation (replace with actual logic)
    if (email === "test@example.com" && password === "password123") {
      // Set login state in localStorage
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userName", "John Doe");  // Store the user's name
      setError(null);
      window.location.reload();  // Reload to update the state and UI
    } else {
      setError("Invalid email or password");
    }
  };

  // If logged in, render the profile section
  if (localStorage.getItem("isLoggedIn")) {
    
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white items-center justify-center p-4">
      {/* Left Side Illustration */}
      <div className="flex flex-1 justify-center items-center p-4">
        <img
          src={login}
          alt="Illustration"
          className="max-w-full md:max-w-[80%] grayscale"
        />
      </div>

      {/* Right Side Form */}
      <div className="flex flex-1 flex-col justify-center items-center p-6 md:p-10 rounded-lg w-full md:w-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-6">Sign In</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="w-full max-w-[360px]">
          <div className="mb-4">
            <label htmlFor="email" className="block text-black font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold mb-2 text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition duration-200"
          >
            Log In
          </button>
        </form>

        <div className="mt-6 w-full max-w-[360px]">
          <p className="text-center text-sm text-black mb-4">— or log in with —</p>
          <div className="flex justify-center gap-4">
            <button className="p-3 bg-black text-white rounded-full hover:bg-gray-700 transition duration-200">
              <FaFacebookF />
            </button>
            <button className="p-3 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition duration-200">
              <FaTwitter />
            </button>
            <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition duration-200">
              <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;