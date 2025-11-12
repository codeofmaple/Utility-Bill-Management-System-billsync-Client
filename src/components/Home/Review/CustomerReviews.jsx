import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";

const CustomerReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Home Owner",
            rating: 5,
            comment: "This platform simplified my bill management completely. Paying all utilities in one place saves me so much time!",
            avatar: "https://i.ibb.co.com/HDkWRCxr/middle-aged-woman.jpg"
        },
        {
            id: 2,
            name: "Mike Chen",
            role: "Business Owner",
            rating: 5,
            comment: "The PDF reports are incredibly helpful for accounting. Secure payments and instant updates make it perfect for business use.",
            avatar: "https://i.ibb.co.com/nqm43B4h/bussiness-man.jpg"
        },
        {
            id: 3,
            name: "Johnson Davis",
            role: "Student",
            rating: 4,
            comment: "As a student managing multiple bills, this app has been a lifesaver. Simple, fast, and very user-friendly!",
            avatar: "https://i.ibb.co.com/FksmmFfL/student.jpg"
        },
        {
            id: 4,
            name: "Robert Wilson",
            role: "Retired",
            rating: 5,
            comment: "The interface is so easy to use. I can track all my bills without any technical knowledge. Highly recommended!",
            avatar: "https://i.ibb.co.com/WNMjSWWd/retired-person.jpg"
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`text-sm ${index < rating ? "text-yellow-400" : "text-base-300"
                    }`}
            />
        ));
    };

    return (
        <div className="bg-base-100 px-4">
            <div className="main-container">
                {/* header */}
                <Fade triggerOnce duration={800}>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            What Our{" "}
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Customers Say', 'Users Love', 'Clients Think']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h2>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Join thousands of satisfied users who simplified their utility bill management with our platform
                        </p>
                    </div>
                </Fade>

                {/* review cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {reviews.map((review, index) => (
                        <Fade
                            key={review.id}
                            triggerOnce
                            delay={index * 200}
                            duration={600}
                        >
                            <div className="card bg-base-100 h-full border border-base-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl">
                                <div className="card-body p-6">

                                    <div className="text-cyan-400 mb-4">
                                        <FaQuoteLeft className="text-2xl opacity-80" />
                                    </div>

                                    <p className="text-base-content/80 text-sm mb-4 leading-relaxed">
                                        "{review.comment}"
                                    </p>

                                    <div className="flex mb-4">
                                        {renderStars(review.rating)}
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <div className="text-2xl">
                                            <img
                                                src={review.avatar}
                                                alt={review.name}
                                                className="size-10 rounded-full object-cover shadow-md"
                                            />

                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-base-content">
                                                {review.name}
                                            </h4>
                                            <p className="text-sm text-base-content/60">
                                                {review.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* stat section */}
                <Zoom triggerOnce duration={800}>
                    <div className="bg-linear-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/20">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-3xl font-bold text-cyan-500 mb-2">10K+</div>
                                <div className="text-base-content/70">Happy Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-purple-500 mb-2">50K+</div>
                                <div className="text-base-content/70">Bills Processed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mb-2">4.9/5</div>
                                <div className="text-base-content/70">Average Rating</div>
                            </div>
                        </div>
                    </div>
                </Zoom>

                {/* CTA Section */}
                <Fade triggerOnce duration={800} delay={400}>
                    <div className="text-center mt-12">
                        <h3 className="text-2xl font-bold mb-4 text-base-content">
                            Ready to Join Them?
                        </h3>
                        <p className="text-base-content/70 mb-6 max-w-md mx-auto">
                            Start managing your utility bills the smart way today
                        </p>
                        <Link to='/register' className="btn btn-lg bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600">
                            Get Started Now
                        </Link>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default CustomerReviews;