import React from "react";
import europe from "../assets/europe.jpg";
import { useNavigate } from "react-router-dom";
// import europe from "../assets/europe.jpg";


const UserDashboardHero = ({ user }) => {
    console.log(user.password);
    const navigate = useNavigate();
  return (
    <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-20 relative">
      {/* Left Content */}
      <div className="max-w-xl mb-12 md:mb-0">
        <h4 className="text-green-700 font-semibold text-lg">
          Welcome back, learner123
        </h4>
        <h1 className="text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
          Your Personalized <br /> Learning Hub
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Explore new communities, revisit your saved lessons, or jump into your ongoing learning path.
          We're glad to have you on board—let’s keep learning and growing together.
        </p>
        <div className="flex gap-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-green-700 transition">
            Resume Learning
          </button>

          <button
            onClick={() => navigate("/userProfile")} // or "/UserDashboard"
            className="flex items-center gap-2 border border-gray-400 text-gray-800 px-5 py-3 rounded-xl hover:bg-gray-100 transition"
            >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
            </svg>
            Watch Overview
        </button>

        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-auto flex justify-center">
        {/* User Profile Box */}
        <div className="absolute top-0 right-0 md:top-[-30px] md:right-[-20px] flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg border w-64 z-10">
          <img
            src={user?.avatar || europe}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-gray-900 font-bold">{user?.name || "learner123"}</h3>
            <p className="text-gray-500 text-sm">{user?.role || "Lifelong Learner"}</p>
          </div>
        </div>

        {/* Illustration */}
        <img
          src={europe}
          alt="Learning Illustration"
          className="w-[420px] mt-12 md:mt-0"
        />
      </div>
    </section>
  );
};

export default UserDashboardHero;
