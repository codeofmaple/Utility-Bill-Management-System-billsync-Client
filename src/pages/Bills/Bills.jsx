import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import useAxios from "../../hooks/useAxios";

const Bills = () => {
    const axios = useAxios();
    const [bills, setBills] = useState([]);

    useEffect(() => {
        axios.get('/bills')
            .then((res) => setBills(res.data))
            .catch((err) => console.error(err));
    }, [axios]);

    return (
        <div
            className="min-h-screen py-16 px-6 md:px-12 bg-linear-to-l from-cyan-50 to-purple-50"
        >
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:items-center md:justify-center gap-6">
                <div>
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-purple-500">
                        All Bills
                    </h1>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {bills.map((bill, index) => (
                    <Card key={bill._id} bill={bill} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Bills;
