import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";
import CustomLoading from "../Loader/CustomLoading";
import BillCard from "../../components/Card/BillCard";
import FilterForm from "./FilterForm";

const Bills = () => {
    const { setLoading, loading } = useAuth();
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const axios = useAxios();
    const [bills, setBills] = useState([]);


    // get bills 
    useEffect(() => {
        setStatus('loading');
        axios.get('/bills')
            .then((data) => {
                setBills(data.data)
                setStatus('success');
            })
            .catch((error) => {
                console.error(error)
                setStatus('error');
            })
            .finally(() => setLoading(false));
    }, [axios, setLoading]);

    const handleFilter = (e) => {
        e.preventDefault();
        const category = e.target.category.value;
        const search = e.target.search.value;

        axios.get(`/filter?category=${category}&search=${search}`)
            .then((response) => {
                setBills(response.data);
            })
            .catch((error) => console.error(error))
    };

    if (status === 'loading') return <CustomLoading />;

    return (
        <div className="min-h-screen bg-base-100 py-8">
            <div className="main-container px-4 md:px-0">
                {/* title */}
                <Fade triggerOnce duration={800}>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Available Bills', 'Utility Bills', 'Monthly Bills']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            Browse and manage all your utility bills in one place.
                        </p>
                    </div>
                </Fade>

                {/* form*/}
                <FilterForm
                    handleFilter={handleFilter}
                />

                {/* bill count */}
                <Fade triggerOnce delay={300}>
                    <div className="flex justify-between items-center mb-8">
                        <p className="text-base-content/70">
                            Showing <span className="font-semibold text-cyan-500">{bills.length}</span> bills
                        </p>
                    </div>
                </Fade>

                {/* Cards Section  */}
                {status === 'success' && bills.length !== 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {bills.map((bill, index) => (
                            <Zoom key={bill._id} triggerOnce delay={index * 50}>
                                <BillCard bill={bill} />
                            </Zoom>
                        ))}
                    </div>
                ) : (
                    <Fade triggerOnce>
                        <div className="flex items-center justify-center min-h-[50vh]">
                            <div className="text-center items-center">
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-base-content mb-2">
                                    No Bills Found
                                </h3>
                                <p className="text-base-content/70">
                                    Try adjusting your search or filter criteria
                                </p>
                            </div>
                        </div>
                    </Fade>
                )}


            </div>
        </div>
    );
};

export default Bills;
