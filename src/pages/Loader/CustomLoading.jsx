import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FiLoader } from 'react-icons/fi';
import Loader from './Loader';

const CustomLoading = ({ pageName = "page" }) => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-8">
            <Fade triggerOnce duration={800} cascade damping={0.2}>
                <div className="text-center space-y-3">
                    {/* Spinner */}
                    <Zoom triggerOnce duration={1000} delay={200}>
                        <div className="relative flex justify-center items-center">
                            <div>
                                <div className="w-20 h-20 border-4 border-cyan-500/20 rounded-full"></div>
                                <div className="absolute top-0 left-auto right-auto w-20 h-20 border-4 border-transparent rounded-full border-t-cyan-500 border-r-purple-500 animate-spin"></div>
                            </div>
                        </div>
                    </Zoom>

                    <Fade triggerOnce delay={400}>
                        <div >
                            <Loader pageName={pageName}></Loader>
                        </div>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
};

export default CustomLoading;