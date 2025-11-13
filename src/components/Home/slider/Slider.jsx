import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// slider imgs
import img1 from '../../../assets/slide_img/all_bill_in_one_1.jpg';
import img2 from '../../../assets/slide_img/all_bill_in_one_2.jpg';
import img3 from '../../../assets/slide_img/electricity_1.jpg';
import img4 from '../../../assets/slide_img/gas_1.jpg';
import img5 from '../../../assets/slide_img/internet_1.jpg';
import img6 from '../../../assets/slide_img/water_1.jpg';

// slides
const slides = [
    {
        src: img1,
        alt: "All payment in one",
        title: "One Platform, All Bills",
        description: "Pay, track, and download reports for all your monthly utilities from a single dashboard."
    },
    {
        src: img2,
        alt: "All payment in one",
        title: "Secure & Easy Payments",
        description: "Enjoy fast and secure payments with instant updates and smooth user experience."
    },
    {
        src: img3,
        alt: "House electricity payment",
        title: "Power Your Home Efficiently",
        description: "Manage electricity bills easily and keep your energy usage under control every month."
    },
    {
        src: img4,
        alt: "House gas payment",
        title: "Warm Living, Smart Billing",
        description: "Stay cozy while keeping track of your gas expenses with simple and secure payments."
    },
    {
        src: img5,
        alt: "House internet payment",
        title: "Stay Connected, Stay Smart",
        description: "Handle your internet payments in one place and enjoy seamless connectivity all month."
    },
    {
        src: img6,
        alt: "House water payment",
        title: "Every Drop Counts",
        description: "Save water and money by managing your water bills smartly and on time."
    },
];

const Slider = () => {
    return (
        <Fade triggerOnce duration={1000} cascade damping={0.3}>
            <div className="bg-base-100 md:py-8">
                <div className="main-container px-4 md:px-0">

                    <div className="text-center mb-8">
                        <Zoom triggerOnce duration={800}>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Utility Bill{' '}
                                <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                    <Typewriter
                                        words={['Management', 'Payment', 'Solution']}
                                        loop={0}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={80}
                                        deleteSpeed={50}
                                        delaySpeed={2000}
                                    />
                                </span>
                            </h1>
                        </Zoom>
                        <Fade triggerOnce delay={600}>
                            <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                                Manage all your utility bills in one secure platform with seamless payments and instant updates
                            </p>
                        </Fade>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-xl">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectFade]}
                            navigation
                            pagination={{
                                clickable: true,
                                dynamicBullets: true
                            }}
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            speed={800}
                            slidesPerView={1}
                            className="aspect-auto"
                        >
                            {slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Zoom triggerOnce duration={1200}>
                                            <img
                                                loading="lazy"
                                                src={slide.src}
                                                alt={slide.alt}
                                                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                                                data-tooltip-content={`Slide ${index + 1}: ${slide.title}`}
                                            />
                                        </Zoom>

                                        <div className="absolute inset-x-4 bottom-4 md:bottom-12 md:inset-x-12 
                                            bg-base-100/80 backdrop-blur-md px-4 py-2 md:px-8 md:py-6 rounded-2xl shadow-lg 
                                            border border-base-300 mx-auto max-w-2xl text-center">

                                            <Fade triggerOnce delay={400} direction="up">
                                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                                    {slide.title}
                                                </h3>
                                            </Fade>

                                            <Fade triggerOnce delay={600} direction="up">
                                                <p className=" hidden md:block text-base-content/80 text-xs sm:text-sm md:text-base leading-relaxed">
                                                    {slide.description}
                                                </p>
                                            </Fade>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Slider;