import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiMapPin, FiCalendar, FiDollarSign, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router";

const BillCard = ({ bill }) => {
    const { image, title, category, location, date, amount, _id } = bill;

    return (
        <Fade triggerOnce duration={600}>
            <div className="card bg-base-100 border border-base-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-2xl overflow-hidden group flex flex-col h-full">
                {/* img */}
                <figure className="overflow-hidden aspect-auto shrink-0">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                            {category}
                        </span>
                    </div>
                </figure>

                {/* content */}
                <div className="card-body p-6 flex flex-col grow">
                    <div className="grow">
                        <h3 className="card-title text-lg font-bold text-base-content mb-2 line-clamp-2 min-h-14">
                            {title}
                        </h3>

                        {/* info */}
                        <div className="space-y-3 mb-4">
                            <div className="flex items-center gap-2 text-base-content/70">
                                <FiMapPin className="text-cyan-500 shrink-0" />
                                <span className="text-sm truncate">{location}</span>
                            </div>

                            <div className="flex items-center gap-2 text-base-content/70">
                                <FiCalendar className="text-purple-500 shrink-0" />
                                <span className="text-sm">{new Date(date).toLocaleDateString()}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FiDollarSign className="text-green-500 shrink-0" />
                                <span className="text-lg font-bold text-green-500">${(+amount || 0).toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* btn */}
                    <div className="card-actions mt-auto pt-4">
                        <Link to={`/bill-details/${_id}`} className="w-full">
                            <button className="btn bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600 w-full transform transition-all duration-300 hover:scale-105 group-hover:shadow-xl">
                                See Details
                                <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default BillCard;