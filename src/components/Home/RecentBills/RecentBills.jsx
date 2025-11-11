import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import Card from '../../Card/Card';

const RecentBills = () => {
    const axios = useAxios();
    const [recentBills, setRecentBills] = useState([]);

    useEffect(() => {
        axios
            .get('/recent-bills')
            .then((res) => setRecentBills(res.data))
            .catch((err) => console.error(err));
    }, [axios]);

    return (
        <div className="py-12 px-6 md:px-10 bg-linear-to-br from-purple-100 via-purple-50 to-cyan-100 min-h-[80vh]">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-linear-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Recent Bills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {recentBills.map((bill) => (
                    <Card key={bill._id} bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default RecentBills;
