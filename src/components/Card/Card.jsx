import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({ bill, index }) => {
    if (!bill) return null;

    const { image, title, category, location, date, _id } = bill;

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}

            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
            {/* img */}
            {image && (
                <div className="h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* others */}
            <div className="p-5 text-gray-800">
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                {category && (
                    <p className="text-sm text-purple-600 font-medium mb-2">{category}</p>
                )}

                {location && (
                    <div className="flex items-center gap-2 text-sm mb-1 text-gray-500">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        <span>{location}</span>
                    </div>
                )}

                {date && (
                    <div className="flex items-center gap-2 text-sm mb-4 text-gray-500">
                        <FaCalendarAlt className="text-cyan-400" />
                        <span>{new Date(date).toLocaleDateString()}</span>
                    </div>
                )}

                {_id && (
                    <Link to={`/bills/${_id}`}>
                        <button className="w-full mt-auto bg-linear-to-r from-cyan-300 to-purple-300 text-gray-700 font-semibold py-2 rounded-lg hover:from-purple-200 hover:to-cyan-200 transition-colors duration-300">
                            See Details
                        </button>
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
