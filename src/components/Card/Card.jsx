import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({ bill }) => {
    const { image, title, category, location, date, _id } = bill;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'tween', duration: 0.45 }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
        >
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="aspect-video object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-5 text-gray-800 flex flex-col flex-1">
                <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>

                    <p className="text-sm text-purple-600 font-medium mb-2">{category}</p>

                    <div className="flex items-center gap-2 text-sm mb-1 text-gray-500">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{new Date(date).toLocaleDateString()}</span>
                    </div>
                </div>

                <div className="mt-auto">
                    <Link to={`/bill-details/${_id}`}>
                        <button className="w-full bg-linear-to-r from-cyan-400 to-purple-500 text-gray-800 font-semibold py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-cyan-500/25">
                            See Details
                        </button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
