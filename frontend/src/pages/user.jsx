import { useEffect, useState } from "react";
import ProfileHeader from "../components/ProfileHeader.jsx"
import UserStats from "../components/UserStats.jsx";
import LearningProgress from "../components/LearningProgress.jsx";
import Achievements from "../components/Achievements.jsx";
import CommunityActivity from "../components/CommunityActivity.jsx";
import ProfileActions from "../components/ProfileAction.jsx";
import europe from "../assets/europe.jpg";
const username="mahima";

const Userprofile = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/api/profile/learner123`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error(err));
  }, []);


  if (!user) return <div>Loading...</div>;

  console.log(user);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <ProfileHeader
        username={user.username}
        joinedDate={user.joinedDate}
        role={user.role}
        avatar={europe}
      />
      <UserStats stats={user.stats} />
      <LearningProgress courses={user.courses} />
      <Achievements badges={user.badges} />
      <CommunityActivity activity={user.activity} />
      {/* <ProfileActions /> */}
    </div>
  );
};
export default Userprofile;
