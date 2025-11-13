import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiSearch, FiFilter } from "react-icons/fi";

const FilterForm = ({ handleFilter }) => {
    return (
        <Fade triggerOnce duration={600}>
            <form onSubmit={handleFilter} className="w-full mb-8">
                <div className="flex flex-col md:flex-row gap-4 p-6 bg-base-200 rounded-2xl border border-base-300 shadow-lg">
                    {/* search */}
                    <div className="flex-1 relative">
                        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-500 text-lg" />
                        <input
                            type="text"
                            name="search"
                            placeholder="Search bills by title, category, or location..."
                            className="w-full pl-12 pr-4 py-3 bg-base-100 border border-base-300 rounded-xl 
                                     focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 
                                     transition-all duration-300 text-base-content placeholder-base-content/50"
                        />
                    </div>

                    {/* fiter */}
                    <div className="flex items-center gap-3">
                        <FiFilter className="text-purple-500 text-xl shrink-0" />
                        <select
                            name="category"
                            className="px-4 py-3 bg-base-100 border border-base-300 rounded-xl 
                                     focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 
                                     transition-all duration-300 text-base-content min-w-[180px]"
                        >
                            <option value="all">All Categories</option>
                            <option value="Electricity">Electricity</option>
                            <option value="Gas">Gas</option>
                            <option value="Water">Water</option>
                            <option value="Internet">Internet</option>
                        </select>
                    </div>

                    {/* btn */}
                    <button
                        type="submit"
                        className="btn bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white 
                                 hover:from-cyan-600 hover:to-purple-600 transform transition-all duration-300 
                                 hover:scale-105"
                    >
                        Apply Filters
                    </button>
                </div>
            </form>
        </Fade>
    );
};

export default FilterForm;