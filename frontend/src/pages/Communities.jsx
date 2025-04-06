// src/pages/Community.jsx
import React, { useState } from 'react';
import ScheduleCard from '../Components/ScheduleCard';
import AddSessionForm from '../Components/AddSessionForm';

const dummySessions = [
  { topic: 'Intro to React', date: '2025-04-08', time: '18:00', joinLink: 'https://meet.google.com/example' },
  { topic: 'Data Structures Basics', date: '2025-04-10', time: '17:00' },
];

const Community = () => {
  const [sessions, setSessions] = useState(dummySessions);
  const isVolunteer = true; // later check via logged-in user

  const handleAddSession = (session) => {
    setSessions([...sessions, session]); // eventually replace with API call
  };

  return (
    <div className="p-4">
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-[#e79310]">Web Development Community</h1>
        <p className="text-gray-700 mt-2">A group of passionate volunteers teaching React, HTML, CSS, and more!</p>
      </div>

      {isVolunteer && <AddSessionForm onAdd={handleAddSession} />}

      <h2 className="text-2xl font-semibold text-center my-6">Upcoming Sessions</h2>
      {sessions.map((session, idx) => (
        <ScheduleCard key={idx} session={session} />
      ))}
    </div>
  );
};

export default Community;
