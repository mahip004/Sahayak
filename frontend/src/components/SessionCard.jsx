import React from "react";
import { MdDateRange } from "react-icons/md";
import { FaRegComments } from "react-icons/fa";

const SessionCard = ({ session, isPast = false }) => (
  <div className="bg-white rounded-xl shadow p-4 border border-gray-100 hover:shadow-md transition">
    <h3 className="text-lg font-semibold text-gray-800 mb-1">{session.title}</h3>
    <div className="flex items-center text-sm text-gray-600 gap-2">
      <MdDateRange className="text-green-500" />
      <span>{session.date}</span>
    </div>
    {isPast && (
      <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
        <FaRegComments className="text-green-500" />
        <span>{session.feedbackCount} feedbacks</span>
      </div>
    )}
  </div>
);

export default SessionCard;
