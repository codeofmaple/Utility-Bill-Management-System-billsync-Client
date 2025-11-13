import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { FiHome, FiArrowLeft, FiSearch, FiFrown } from "react-icons/fi";
import { useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4">
            <div className="max-w-2xl mx-auto text-center space-y-8">
                {/* section */}
                <Fade triggerOnce duration={1000} cascade damping={0.3}>
                    {/* icon */}
                    <Zoom triggerOnce duration={800}>
                        <div className="relative">
                            <div className="text-8xl">
                                <FiFrown className="inline text-cyan-500" />
                            </div>
                        </div>
                    </Zoom>

                    {/* header */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-7xl font-bold">
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                404
                            </span>
                        </h1>

                        <h2 className="text-2xl md:text-3xl font-semibold text-base-content">
                            Page Not Found
                        </h2>

                        {/* type effect */}
                        <div className="text-lg text-base-content/70 min-h-8">
                            <Typewriter
                                words={[
                                    "Oops! The page you're looking for doesn't exist.",
                                    "Maybe it moved? Or maybe it never existed?",
                                    "Let's get you back on track!",
                                    "This page seems to be lost in cyberspace..."
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="|"
                                typeSpeed={50}
                                deleteSpeed={30}
                                delaySpeed={2000}
                            />
                        </div>
                    </div>

                    {/* btn */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="btn btn-lg bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                        >
                            <FiArrowLeft className="text-lg mr-2" />
                            Go Back
                        </button>

                        <button
                            onClick={() => navigate("/")}
                            className="btn btn-lg btn-ghost border border-cyan-500/30 text-cyan-500 hover:bg-cyan-500/10 hover:border-cyan-500 transform transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            <FiHome className="text-lg mr-2" />
                            Go Home
                        </button>
                    </div>

                    {/* search btn */}
                    <Fade triggerOnce delay={600}>
                        <div className="pt-8">
                            <p className="text-base-content/60 text-sm mb-4">
                                Can't find what you're looking for?
                            </p>
                            <div className="flex items-center justify-center max-w-md mx-auto bg-base-200 rounded-full px-4 py-2 border border-base-300">
                                <FiSearch className="text-base-content/50 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search our website..."
                                    className="bg-transparent border-none outline-none w-full text-base-content placeholder-base-content/50"
                                />
                            </div>
                        </div>
                    </Fade>
                </Fade>
            </div>
        </div>
    );
};

export default ErrorPage;