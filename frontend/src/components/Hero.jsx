import { Link } from "react-router-dom";
import { IoIosPlay } from "react-icons/io";
import himg from "../assets/hero.svg";

const Hero = () => {
  return (
    <main className="relative w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 md:py-20">
      {/* Left Content */}
      <section className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-4">
        <p className="text-sm text-green-700 font-semibold font-serif">
          Empowering Minds Across the Globe
        </p>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900 ">
          Explore, Enjoy 
        </h1>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900">
          and Learn for 
        </h1>

        <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-gray-900">
          free
        </h1>

        <p className="text-sm text-gray-600 font-medium font-serif max-w-lg">
          Join a vibrant community where learning knows no bounds. Whether you're a curious learner or a passionate volunteer, our platform connects you to people who believe in sharing knowledge for free. Discover new skills, engage in meaningful conversations, and grow together—because education should be accessible to all.
        </p>

        <div className="flex gap-4 flex-wrap justify-center md:justify-start mt-2">
          <a
            href="#category"
            className="bg-green-600 text-white text-sm font-bold px-5 py-3 rounded-md hover:bg-green-700 transition"
          >
            Find Out More
          </a>

          <Link
            to="/"
            className="bg-gray-100 text-gray-700 text-sm font-bold px-5 py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transition"
          >
            <IoIosPlay className="text-xl text-white bg-green-500 p-1.5 rounded-full" />
            Play Demo
          </Link>
        </div>
      </section>

      {/* Right Image */}
      <section className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={himg}
          alt="Hero Illustration"
          width={500}
          height={500}
          className="animate-bounce-slow"
          loading="eager"
        />
      </section>
    </main>
  );
};

export default Hero;
