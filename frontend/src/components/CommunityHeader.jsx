import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import logo from "../assets/logo.jpg";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsScrollingUp(window.scrollY < lastScrollY);
    lastScrollY = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav
      className={`py-5 px-[5%] top-0 w-full fixed flex items-center justify-between z-20 transition-all duration-300 font-sans ${
        scrollY > 0 && !isScrollingUp
          ? "shadow-md backdrop-blur-md bg-opacity-50"
          : "bg-transparent"
      }`}
    >
      <Link to="/" className="w-[80px]">
        <img
          src={logo}
          width={80}
          height={80}
          alt="logo"
          className="w-full"
          loading="eager"
        />
      </Link>

      <section
        className={`${
          isMenuOpen ? "left-0" : "left-[-100%]"
        } transition-all duration-300 absolute top-[68px] md:top-0 md:left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-[#212832] font-bold bg-[#e79310] md:bg-transparent pl-[5%] md:pl-0 py-10 md:py-0 w-full md:w-auto`}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
          <Link
            to="/"
            className="hover:text-white md:hover:text-[#e79310] transition delay-200"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/communities"
            className="hover:text-white md:hover:text-[#e79310] transition delay-200"
            onClick={toggleMenu}
          >
            Communities
          </Link>
          <Link
            to="/updates"
            className="hover:text-white md:hover:text-[#e79310] transition delay-200"
            onClick={toggleMenu}
          >
            Updates
          </Link>
          <Link
            to="/feedback"
            className="hover:text-white md:hover:text-[#e79310] transition delay-200"
            onClick={toggleMenu}
          >
            Feedback
          </Link>
        </div>

        {/* Toggle Button for User/Community Menu */}
        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 mt-4 md:mt-0">
          <button
            className="px-4 py-1 border border-[#212832] rounded-[4px] hover:bg-[#212832] hover:text-white transition delay-200"
            onClick={toggleUserMenu}
          >
            User/Community
          </button>

          {isUserMenuOpen && (
            <div className="absolute bg-white shadow-md rounded-md top-[40px] left-0 w-full md:w-auto text-center">
              <Link
                to="/login"
                className="block py-2 px-4 text-[#212832] hover:bg-[#e79310] transition duration-200"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block py-2 px-4 text-[#212832] hover:bg-[#e79310] transition duration-200"
                onClick={toggleMenu}
              >
                Community
              </Link>
              <Link
                to="/user"
                className="block py-2 px-4 text-[#212832] hover:bg-[#e79310] transition duration-200"
                onClick={toggleMenu}
              >
                User
              </Link>
            </div>
          )}
        </div>
      </section>

      {isMenuOpen ? (
        <IoClose
          className="block md:hidden text-4xl text-[#e79310] font-bold cursor-pointer"
          onClick={toggleMenu}
        />
      ) : (
        <IoMenu
          className="block md:hidden text-4xl text-[#e79310] font-bold cursor-pointer"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Header;
