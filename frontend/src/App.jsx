import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Package from "./pages/Package";
import Chat from "./pages/Chat";
import CommunityForm from "./pages/communityform";
import UserRegistration from "./pages/Userform";
import  Layout  from "./components/Layout";
import Header from "./components/Header";
import Communities from "./pages/Communities";
import Updates from "./components/Updates";
import Signup from "./components/Signup";
import CourseList from "./components/Courses.jsx";
import PackagePage from "./pages/Package";
import EventForm from "./pages/EventForm.jsx";
import UserForm from "./pages/Userform.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import Userprofile from "./pages/user.jsx"
import CommunityDashboard from "./pages/communityDashboard.jsx"
import UserPackage from "./pages/UserPackage.jsx"
import FeedbackForm from "./pages/Feedbackform.jsx";
import MyCalendar from "./pages/Mycalender.jsx";
import Volunteer from "./pages/volunteer.jsx";
// import VolunteerProfile from "./pages/Volunteer.jsx"


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/Package" element={<Package />} />
      {/* <Route path="/chat" element={<Layout />} /> */}
      <Route path="/communityregister" element={<CommunityForm />} />
      <Route path="/userregister" element={<UserRegistration />} />
      <Route path="/" element={<Home />} />
        <Route path="/communities" element={<Package />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<CommunityForm />} />
        <Route path="/user" element={<UserForm />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/" element={<CourseList />} />
        <Route path="/package/:id" element={<PackagePage />} />
        <Route path="/package/:id/event-form" element={<EventForm />} />
        <Route path="/UserDashboard" element={<UserDashboard />} />
        <Route path="/userProfile" element={<Userprofile />} />
        <Route path="/communityDashboard" element={<CommunityDashboard />} />
        <Route path="/userPackage/:id" element={<UserPackage />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/communityProfile" element={<Volunteer />} />
        {/* <Route path="/volunteerProfile" element={<VolunteerProfile/>}></Route> */}
    </Routes>
  );
};

export default App;
