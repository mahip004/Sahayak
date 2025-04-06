import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Map from "../components/Map";
import Announcement from "../components/Announcement";
import TeamAvatars from "../components/Team";
import EventCard from "../components/EventCard";
import PackageHost from "../components/PackageHost";
import ChatWidget from "../components/Chat";
import Separator from "../components/Separator";
import PackageCard from "../components/Description"; // ✅ Fix here
import Header from "../components/Header";

const teamMembers = [
  { name: "Remy Sharp", img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { name: "Travis Howard", img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { name: "Agnes Walker", img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { name: "Trevor Henderson", img: "https://randomuser.me/api/portraits/men/4.jpg" },
];

const Package = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/community/fetchone/${id}`);
        const data = await res.json();
        console.log("Fetched package data:", data); // ✅ Inspect this in browser console

        const highlights = [
          { label: "Location", value: data?.location || "Unknown" },
          { label: "Mode", value: data?.serviceMode || "Unknown" },
          { label: "Schedule", value: "Flexible" },
          { label: "Language", value: "English" },
          { label: "Enrolled Members", value: data?.members ? `${data.members}+` : "Not available" },
        ];

        setPkg({
          title: data?.heading || "Untitled Package",
          description: data?.description || "No description available.",
          highlights: highlights,
        });
      } catch (err) {
        console.error("Failed to fetch package data:", err);
        setPkg({
          title: "Package Not Found",
          description: "We couldn't find a package for the selected community.",
          highlights: [],
        });
      }
    };

    fetchPackage();
  }, [id]);

  return (
    <div className="flex flex-col w-full bg-white min-h-screen pt-15">
      <Header />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 py-10 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="self-start">
            {pkg && (
              <PackageCard
                title={pkg.title}
                description={pkg.description}
                highlights={pkg.highlights}
              />
            )}
          </div>
          <div className="space-y-6 self-start">
            <Map />
            <TeamAvatars members={teamMembers} />
          </div>
        </div>

        <Separator className="bg-black h-[1px]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PackageHost />
          <ChatWidget
            title="Let's Start a Conversation"
            description="Have questions or need help planning your package? Our team is ready to chat!"
            onChatClick={() => alert("Chat started!")}
          />
        </div>

        <Separator className="bg-black h-[1px]" />

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </section>

        <Separator className="bg-black h-[1px]" />

        <section>
          <h2 className="text-2xl font-bold text-black mb-4">Announcements</h2>
          <Announcement />
        </section>
      </div>
    </div>
  );
};

export default Package;
