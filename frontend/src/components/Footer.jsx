import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
import appleimg from "../assets/apple.jpg";
import googleimg from "../assets/google-play.webp.jpg";
import logo from "../assets/logo.jpg";
const Footer = () => {
    return (
        <main className="px-[5%] py-10 bg-white font-sans">
            <section data-aos="fade-down">
                <div className="flex justify-between flex-wrap gap-2">
                    <div className="flex flex-col gap-2 mb-5 md:mb-0 w-full md:w-auto items-center md:items-start justify-center md:justify-start">
                        <img src={logo} width={100} height={100} alt="logo" />
                        <p className="text-sm text-gray-500 font-semibold w-full md:max-w-[200px] text-center md:text-left">
                            Book your trip in minute, get full Control for much longer.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-lg text-gray-800 font-extrabold">Company</h1>
                        <div className="text-base text-gray-500 font-semibold flex flex-col gap-2">
                            <a href="#" className="hover:text-orange-500 transition duration-200">About</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Careers</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Mobile</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-lg text-gray-800 font-extrabold">Contact</h1>
                        <div className="text-base text-gray-500 font-semibold flex flex-col gap-2">
                            <a href="#" className="hover:text-orange-500 transition duration-200">Help/FAQ</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Press</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Affiliates</a>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        <h1 className="text-lg text-gray-800 font-extrabold">More</h1>
                        <div className="text-base text-gray-500 font-semibold flex flex-col gap-2">
                            <a href="#" className="hover:text-orange-500 transition duration-200">Airlinefees</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Airline</a>
                            <a href="#" className="hover:text-orange-500 transition duration-200">Low fare tips</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center md:items-start justify-center md:justify-start w-full md:w-auto mt-5 md:mt-0">
                        <div className="flex items-center gap-4">
                            <FaFacebookF className="text-4xl p-2 text-gray-800 bg-white rounded-full shadow-md cursor-pointer" />
                            <CiInstagram className="text-4xl p-2 text-gray-800 bg-white rounded-full shadow-md cursor-pointer" />
                            <FaTwitter className="text-4xl p-2 text-gray-800 bg-white rounded-full shadow-md cursor-pointer" />
                        </div>

                        <p className="text-xl text-gray-500 font-bold">Discover our app</p>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <img src={googleimg} width={20} height={20} alt="Google Play" />
                                <div>
                                    <h3 className="text-xs font-extrabold text-white">GET IT ON</h3>
                                    <p className="text-[11px] font-semibold text-white">GOOGLE PLAY</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center gap-1 bg-black py-2 px-5 rounded-full cursor-pointer">
                                <img src={appleimg} width={20} height={20} alt="Apple Store" />
                                <div>
                                    <h3 className="text-[11px] font-semibold text-white">Available on the</h3>
                                    <p className="text-sm font-extrabold text-white">Apple Store</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-sm text-gray-500 text-center font-normal mt-5">
                    All rights reserved @jadoo.co
                </p>
            </section>
        </main>
    );
};

export default Footer;
