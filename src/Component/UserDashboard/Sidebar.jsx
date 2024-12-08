import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.reload(); // Reload the page to show the login page
  };

  const userName = localStorage.getItem("userName");

  return (
    <div className=" border-4 border-black rounded-lg  text-black w-64 p-4 flex flex-col mt-24 ml-10">
      <h1 className="text-xl font-bold mb-6">Dashboard</h1>

      {/* Display User's Profile Name */}
      <div className="text-lg mb-4">
        <p>Welcome, {userName}</p>
        <button
          onClick={handleLogout}
          className="py-2 px-4 mt-4 text-red-500 hover:bg-gray-100 rounded"
        >
          Logout
        </button>
      </div>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `py-2 px-4 mb-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-100"}`
        }
      >
        User Profile
      </NavLink>
      <NavLink
        to="/live-exam"
        className={({ isActive }) =>
          `py-2 px-4 mb-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-100"}`
        }
      >
        Live Exam
      </NavLink>
      <NavLink
        to="/exam-list"
        className={({ isActive }) =>
          `py-2 px-4 mb-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-100"}`
        }
      >
        Exam List
      </NavLink>
      <NavLink
        to="/result"
        className={({ isActive }) =>
          `py-2 px-4 mb-2 rounded ${isActive ? "bg-gray-700" : "hover:bg-gray-100"}`
        }
      >
        Result
      </NavLink>
    </div>
  );
};

export default Sidebar;
