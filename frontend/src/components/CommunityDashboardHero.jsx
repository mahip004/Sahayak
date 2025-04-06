import React from "react";
import { useNavigate } from "react-router-dom";
import europe from "../assets/europe.jpg"; // Use your image here

const CommunityDashboardHero = ({ user }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-24 relative">
      {/* Left Side */}
      <div className="max-w-2xl mb-12 md:mb-0">
        <h4 className="text-green-700 text-lg font-semibold mb-2">Welcome back, ruchi123</h4>
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Your Personalized <br /> Community Hub
        </h1>
        <p className="text-gray-700 text-lg mb-8">
          Engage with learners, lead sessions, or explore ongoing community efforts. 
          We're grateful to have you—let's build and grow stronger together!
        </p>
        <div className="flex gap-4 flex-wrap">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition">
            Start Mentoring
          </button>
          <button
            onClick={() => navigate("/communityProfile")}
            className="border border-gray-400 hover:bg-gray-100 text-gray-800 px-5 py-3 rounded-lg flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            View Profile
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative w-full md:w-auto flex justify-center">
        <div className="absolute top-[-25px] right-[-15px] md:right-[-30px] flex items-center gap-3 p-4 bg-white rounded-xl shadow-lg border w-64 z-10">
          <img
            src={europe}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="text-gray-900 font-bold">{user?.name || "Community Lead"}</h3>
            <p className="text-gray-500 text-sm">{user?.role || "Mentor/Coordinator"}</p>
          </div>
        </div>
        <img
          src={europe}
          alt="Community Hub"
          className="w-[420px] rounded-xl mt-12 md:mt-0"
        />
      </div>
    </section>
  );
};

export default CommunityDashboardHero;
