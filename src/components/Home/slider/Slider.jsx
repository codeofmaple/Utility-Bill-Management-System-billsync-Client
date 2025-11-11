import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

import "./Slider.css";

const slides = [
    { src: "https://i.ibb.co.com/v4NmzCwS/Cuddly-Bear-Plush-Toy-2.jpg", alt: "Colorful building block set", title: "Playful Building Blocks" },
    { src: "https://i.ibb.co.com/XkDqWxC5/Toy-Police-Car-with-Sound-15.jpg", alt: "Toy train", title: "Beary-Go-Round" },
    { src: "https://i.ibb.co.com/v4NmzCwS/Cuddly-Bear-Plush-Toy-2.jpg", alt: "Lego bricks", title: "Creative Bricks" },
    { src: "https://i.ibb.co.com/XkDqWxC5/Toy-Police-Car-with-Sound-15.jpg", alt: "Colorful pencil set", title: "Rainbow Color Pencil" },
    { src: "https://i.ibb.co.com/v4NmzCwS/Cuddly-Bear-Plush-Toy-2.jpg", alt: "Indoor toys", title: "Sweet and cuddly" },
    { src: "https://i.ibb.co.com/XkDqWxC5/Toy-Police-Car-with-Sound-15.jpg", alt: "Outdoor & Indoor toys", title: "Adventure Auto" },
];

const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden mb-8 shadow-lg">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}
                slidesPerView={1}
                className="mySwiper"
            >
                {slides.map((toy, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full md:aspect-1280/580 overflow-hidden">
                            {/* img */}
                            <img
                                loading="lazy"
                                src={toy.src}
                                alt={toy.alt}
                                className="size-full object-cover transform transition-transform duration-900 ease-in-out scale-100 hover:scale-105"
                            />

                            <div className="absolute inset-0 pointer-events-none 
                            bg-linear-to-t from-black/45 via-transparent to-transparent"></div>
                            {/* info */}
                            <div className="absolute left-6 bottom-6 
                            bg-white/60 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm max-w-[80%]">
                                <h3 className="text-pink-600 font-extrabold text-lg md:text-xl">
                                    {toy.title}
                                </h3>
                                <p className="text-sm text-gray-700 hidden md:block">
                                    Discover quality toys from friendly local sellers.
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
