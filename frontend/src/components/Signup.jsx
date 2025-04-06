import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

const SignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-[#fef7f0]">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign Up</h2>
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
                    <FaUser className="text-gray-600 mr-3" />
                    <input
                        type="text"
                        placeholder="Username"
                        className="bg-transparent outline-none w-full"
                    />
                </div>
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-4">
                    <FaEnvelope className="text-gray-600 mr-3" />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-transparent outline-none w-full"
                    />
                </div>
                <div className="flex items-center bg-gray-100 p-3 rounded-lg mb-6">
                    <FaLock className="text-gray-600 mr-3" />
                    <input
                        type="password"
                        placeholder="Password"
                        className="bg-transparent outline-none w-full"
                    />
                </div>
                <button className="bg-orange-500 text-white w-full py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition">
                    Sign Up
                </button>
                <p className="mt-4 text-gray-600">
                    Already have an account? <a href="/login" className="text-orange-500 font-semibold">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
