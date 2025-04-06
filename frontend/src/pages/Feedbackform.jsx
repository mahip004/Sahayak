import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiMail, FiThumbsUp, FiEdit3 } from "react-icons/fi";
import { BsCheckCircle } from "react-icons/bs";
//import girlimg from "../assets/girlimg1.svg";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    session: "",
    rating: 3,
    outcome: "",
    liked: "",
    suggestion: "",
    recommend: "",
    email: "",
    anonymous: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
  };

  return (
    <>
    <style>
    {`
      @keyframes floaty {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }
    `}
  </style>
    
    <div className="min-h-screen bg-[#FFF8F6] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-6xl grid md:grid-cols-2 overflow-hidden animate-fade-in-up">
        
      {/* Left Panel */}
<div className="bg-gradient-to-br from-[#1a8218] via-[#249322] to-[#5fc35e] text-white flex flex-col justify-center items-center p-10 relative">
  <h2 className="text-4xl font-bold leading-snug text-center drop-shadow-md">
    Feel free to <br /> drop us your feedback.
  </h2>
  {/* <img
  src={girlimg}
  alt="Illustration"
  className="w-4/5 mt-8 drop-shadow-lg"
  style={{
    animation: "floaty 3s ease-in-out infinite",
  }}
/> */}
</div>


        {/* Right Form Panel */}
        <div className="p-10 space-y-6 text-gray-800">
          <h3 className="text-2xl font-semibold mb-2 text-center text-[#249322]">Volunteer Feedback Form</h3>
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Session Input */}
            <div className="relative">
              <input
                type="text"
                name="session"
                value={formData.session}
                onChange={handleChange}
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                placeholder="Session name"
                required
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
              Email of the session you attended
              </label>
            </div>

            {/* Rating */}
            <div>
              <label className="block font-medium mb-2">How would you rate this session?</label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="1"
                  max="5"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  className="w-full accent-[#001506]"
                />
                <div className="text-#249322-400 text-xl">
                  {Array.from({ length: formData.rating }, (_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>

            {/* Helpful */}
            <div>
              <label className="block font-medium mb-1">Did you find the session helpful?</label>
              <div className="flex gap-4">
                {["Yes", "No", "Somewhat"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="outcome"
                      value={option}
                      checked={formData.outcome === option}
                      onChange={handleChange}
                      className="accent-[#249322]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* What did you like */}
            <div>
              <label className="block font-medium mb-1 flex items-center gap-2">
                <FiThumbsUp /> What did you like the most?
              </label>
              <textarea
                name="liked"
                value={formData.liked}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#249322] focus:outline-none"
                placeholder="Share what you enjoyed..."
              />
            </div>

            {/* Suggestions */}
            <div>
              <label className="block font-medium mb-1 flex items-center gap-2">
                <FiEdit3 /> Suggestions for improvement
              </label>
              <textarea
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#249322] focus:outline-none"
                placeholder="Any suggestions to make it better?"
              />
            </div>

            {/* Recommend */}
            <div>
              <label className="block font-medium mb-1">Would you recommend this session?</label>
              <div className="flex gap-4">
                {["Yes", "No"].map((option) => (
                  <label key={option} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="recommend"
                      value={option}
                      checked={formData.recommend === option}
                      onChange={handleChange}
                      className="accent-[#249322]"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-lg bg-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#FF5A5F] focus:border-transparent"
                placeholder="Your email"
              />
              <label className="absolute left-4 top-2 text-gray-500 text-sm peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all">
                Your Email (optional)
              </label>
            </div>

            {/* Anonymous */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="anonymous"
                checked={formData.anonymous}
                onChange={handleChange}
                className="accent-[#249322]"
              />
              <label className="flex items-center gap-1">
                <BsCheckCircle className="text-[#249322]" /> Submit anonymously
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#249322] to-[#249322] text-white font-bold py-3 rounded-xl shadow-xl transition duration-300 hover:scale-105"
            >
              Submit Feedback
            </button>
            {alert("Feedback submitted")}
          </form>
        </div>
      </div>
    </div>
   </>
  );
};

export default FeedbackForm;
