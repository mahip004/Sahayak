import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({
  id,
  title,
  price,
  location,
  enrolled,
  schedule,
  mode,
  language,
  description,
}) => {
  const navigate = useNavigate();

  const handleEnrollClick = () => {
    navigate(`/package/${id}`);
  };

  return (
    <div className="w-[420px] h-[320px] rounded-2xl shadow-lg overflow-hidden bg-white flex flex-col justify-between">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 truncate">{title}</h2>
          {price && <span className="text-lg text-gray-700 font-bold">{price}</span>}
        </div>
        <p className="text-gray-700 text-sm mt-1">📍 {location}</p>
        <p className="text-gray-700 text-sm mt-1">👨‍🎓 {enrolled} Enrolled</p>
        <p className="text-gray-700 text-sm mt-1">🗓️ {schedule}</p>
        <p className="text-gray-700 text-sm mt-1">💻 Mode: {mode}</p>
        <p className="text-gray-700 text-sm mt-1">📌 Language: {language}</p>
        <p className="text-gray-800 text-sm mt-2 line-clamp-2">{description}</p>
      </div>
      <div className="px-5 pb-4">
        <button
          onClick={handleEnrollClick}
          className="w-full py-2 px-4 bg-green-700 text-white text-base font-semibold rounded-lg shadow-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
        >
          Join us
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
