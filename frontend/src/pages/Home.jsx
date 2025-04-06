import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer"
import UserDashboardHero from "../components/userDashboardHero";
// import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-white pt-15 pl-15 pr-10">
            <Header />
            <Hero />
            <Courses />
            <Testimonials />
            <Footer />
            {/* <UserDashboardHero/> */}
        </div>
    );
};

export default Home;
