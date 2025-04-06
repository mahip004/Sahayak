import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import CommunityCourseCard from "./CommunityCourseCard"
const CourseList = () => {
  const [communities, setCommunities] = useState([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/community/fetchAll");
        const data = await res.json();
        setCommunities(data.slice(0, 3)); // Show top 3
      } catch (error) {
        console.error("Failed to fetch communities:", error);
      }
    };

    fetchCommunities();
  }, []);

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-[20px] font-bold text-gray-600 mb-6 ml-10">
        Start Contributing with These Popular Picks
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1300px] mx-auto">
        {communities.map((community) => (
          <CommunityCourseCard
            key={community._id}
            id={community._id}
            title={community.heading}
            location={community.location}
            enrolled={`${community.members}+`}
            schedule="Flexible"
            mode={community.serviceMode}
            language="English"
            description={community.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CourseList;
