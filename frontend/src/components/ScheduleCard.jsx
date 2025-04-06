// src/components/ScheduleCard.jsx
import React from 'react';

const ScheduleCard = ({ session }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg w-full md:w-[80%] mx-auto my-2">
      <h3 className="text-xl font-semibold">{session.topic}</h3>
      <p className="text-gray-600">🗓️ {session.date} at 🕒 {session.time}</p>
      {session.joinLink && (
        <a
          href={session.joinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Join Session
        </a>
      )}
    </div>
  );
};

export default ScheduleCard;
