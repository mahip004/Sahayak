import React from "react";
import { useEffect } from "react";
import UserDashboardHero from "../components/userDashboardHero";
import europe from "../assets/europe.jpg"
import Header from "../components/Header"
import Courses from "../components/Courses"

// const user = {
//   // name: "Aisha Khan",
//   // role: "Community Mentor",
//   // avatar: europe, // Replace with actual avatar URL
// };

  const user = localStorage.getItem("usermail");
  console.log("Fetched from localStorage:", user);

  if (user) {
    const parsedFormData = JSON.parse(user);
    console.log("Email hello:", parsedFormData.email);
  } else {
    console.log("usermail is null in localStorage");
  }

const userDashboard = () => {
  return (
    <div className="bg-white pt-15 pl-15 pr-10">
      <Header />
      <UserDashboardHero user={user} />
      <Courses />

    </div>
  );
};

export default userDashboard;

