import React from "react";

const StatCard = ({ label, value, icon }) => (
  <div className="bg-white rounded-xl shadow p-4 flex items-center gap-3">
    <div className="text-green-600 text-xl">{icon}</div>
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="font-semibold text-lg">{value}</div>
    </div>
  </div>
);

export default StatCard;
