import React from "react";
import Header from "../components/Header";
import CommunityDashboardHero from "../components/CommunityDashboardHero";
import Courses from "../components/Courses"
import CommunityCourses from "../components/CommunityCourses"
import CommunityHeader from "../components/CommunityHeader"
const CommunityDashboard = () => {
  const userString = localStorage.getItem("usermail");
  const parsedFormData = userString ? JSON.parse(userString) : {};

  return (
    <div className="bg-white pt-16 pl-4 pr-4">
      <CommunityHeader/>
      <CommunityDashboardHero user={parsedFormData} />
      <CommunityCourses />
    </div>
  );
};

export default CommunityDashboard;
