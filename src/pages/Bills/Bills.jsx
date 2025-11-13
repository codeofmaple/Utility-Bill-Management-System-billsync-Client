import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

const Bills = () => {
    const { setLoading, loading } = useAuth();
    const axios = useAxios();
    const [bills, setBills] = useState([]);

    useEffect(() => {
        axios.get('/bills')
            .then((res) => setBills(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [axios, setLoading]);

    if (loading) return (
        <CustomLoading pageName="My Pay Bills"></CustomLoading>
    );

    return (
        <div
            className="min-h-screen py-8 md:py-16 px-6 md:px-12 bg-base-200"
        >
            <title>BillSync | Bills</title>
            {/* header */}
            <div className='text-center'>
                <h2 className="text-3xl md:text-4xl font-bold mb-10 bg-linear-to-l inline-block from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    All Bills
                </h2>
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
