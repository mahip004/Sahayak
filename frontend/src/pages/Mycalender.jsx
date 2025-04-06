import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Views } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import enUS from "date-fns/locale/en-US";
import {
  FaCalendarAlt,
  FaLeaf,
  FaSpa,
  FaChalkboardTeacher,
  FaUsers,
  FaRunning,
  FaStar,
} from "react-icons/fa";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Clean-up Drive",
    start: new Date(2025, 3, 10, 10, 0),
    end: new Date(2025, 3, 10, 12, 0),
    icon: <FaLeaf className="inline text-green-500 mr-1" />,
    type: "cleanup",
  },
  {
    title: "Beach Yoga",
    start: new Date(2025, 3, 12, 7, 0),
    end: new Date(2025, 3, 12, 8, 30),
    icon: <FaSpa className="inline text-purple-500 mr-1" />,
    type: "yoga",
  },
  {
    title: "React Workshop",
    start: new Date(2025, 3, 15, 14, 0),
    end: new Date(2025, 3, 15, 17, 0),
    icon: <FaChalkboardTeacher className="inline text-blue-500 mr-1" />,
    type: "workshop",
  },
  {
    title: "Team Meeting",
    start: new Date(2025, 3, 17, 11, 0),
    end: new Date(2025, 3, 17, 12, 0),
    icon: <FaUsers className="inline text-yellow-500 mr-1" />,
    type: "meeting",
  },
  {
    title: "Fun Run",
    start: new Date(2025, 3, 20, 6, 0),
    end: new Date(2025, 3, 20, 8, 0),
    icon: <FaRunning className="inline text-red-500 mr-1" />,
    type: "run",
  },
];

const eventStyleGetter = (event) => {
  let backgroundColor = "#e5e7eb";
  let borderColor = "#6b7280"; // default

  switch (event.type) {
    case "cleanup":
      backgroundColor = "#bbf7d0";
      borderColor = "#22c55e";
      break;
    case "yoga":
      backgroundColor = "#e9d5ff";
      borderColor = "#a855f7";
      break;
    case "workshop":
      backgroundColor = "#dbeafe";
      borderColor = "#3b82f6";
      break;
    case "meeting":
      backgroundColor = "#fef9c3";
      borderColor = "#facc15";
      break;
    case "run":
      backgroundColor = "#fecaca";
      borderColor = "#ef4444";
      break;
    default:
      break;
  }

  return {
    style: {
      backgroundColor,
      borderRadius: "0.5rem",
      padding: "4px 8px",
      color: "#1f2937",
      fontWeight: "500",
      borderLeft: `4px solid ${borderColor}`,
    },
  };
};

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [view, setView] = useState(Views.MONTH);

  const handleNavigate = (newDate) => setDate(newDate);
  const handleViewChange = (newView) => setView(newView);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      {/* Header */}
      <div className="flex items-center mb-6 gap-3">
        <FaCalendarAlt className="text-pink-400 text-4xl" />
        <h1 className="text-3xl font-bold tracking-wide text-pink-200">
          Volunteer Event Calendar
        </h1>
      </div>

      {/* Calendar */}
      <div className="w-full max-w-6xl rounded-2xl shadow-xl overflow-hidden bg-white">
        <Calendar
          localizer={localizer}
          events={events.map((e) => ({
            ...e,
            title: (
              <span className="flex items-center">
                {e.icon} {e.title}
              </span>
            ),
          }))}
          startAccessor="start"
          endAccessor="end"
          date={date}
          view={view}
          onNavigate={handleNavigate}
          onView={handleViewChange}
          style={{ height: 600 }}
          className="p-4 text-black"
          eventPropGetter={eventStyleGetter}
        />
      </div>
    </div>
  );
};

const Legend = ({ icon, label }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span className="text-white">{label}</span>
  </div>
);

export default MyCalendar;
