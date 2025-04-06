import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaUserEdit,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaStar,
  FaChalkboardTeacher,
} from "react-icons/fa";
import { MdOutlineEmojiEvents } from "react-icons/md";
import StatCard from "../components/StatCard";
import SessionCard from "../components/SessionCard";
import europe from "../assets/europe.jpg";

const Volunteer = () => {
  const [v, setV] = useState(null);
  const volunteerName = "ruchi123"; // You can make this dynamic via props or route param

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/volunteer/${volunteerName}`
        );
        setV(res.data);
      } catch (err) {
        console.error("Error fetching volunteer data:", err);
      }
    };

    fetchData();
  }, []);

  if (!v) {
    return <div className="text-center mt-10 text-gray-600">Loading profile...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Volunteer Profile</h1>
        <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 transition">
          <FaUserEdit />
          Edit Profile
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow p-6 flex flex-col sm:flex-row gap-6">
        <img
          src={europe}
          alt="Avatar"
          className="w-32 h-32 rounded-full object-cover border-2 border-green-400"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">{v.name}</h2>
          <p className="text-gray-600">{v.bio}</p>
          <div className="text-gray-500 text-sm mt-2 flex items-center gap-2">
            <FaMapMarkerAlt /> {v.location}
          </div>
          <div className="text-gray-500 text-sm mt-1 flex items-center gap-2">
            <FaEnvelope /> {v.email}
          </div>
          <div className="flex gap-4 mt-3">
            <a
              href={v.contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 text-lg"
            >
              <FaLinkedin />
            </a>
            <a
              href={v.contactLinks.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 text-lg"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
        <StatCard label="Courses Taught" value={v.coursesTaught} icon={<FaChalkboardTeacher />} />
        <StatCard label="Total Students" value={v.totalStudents} icon={<FaUserEdit />} />
        <StatCard label="Avg. Rating" value={`${v.avgRating} ★`} icon={<FaStar />} />
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Skills & Topics</h3>
        <div className="flex flex-wrap gap-2">
          {v.topics.map((topic, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Badges</h3>
        <div className="flex gap-3 flex-wrap">
          {v.badges.map((badge, idx) => (
            <span
              key={idx}
              className="flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
            >
              <MdOutlineEmojiEvents />
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Upcoming Sessions</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {v.upcomingSessions.map((s, idx) => (
            <SessionCard session={s} key={idx} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Past Sessions</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {v.pastSessions.map((s, idx) => (
            <SessionCard session={s} isPast key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
