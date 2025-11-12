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
        <div className="px-6 md:px-0 bg-base-100 main-container md:pb-16 pb-8">
            <div className='text-center'>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-linear-to-l inline-block from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Recent Bills
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {recentBills.map((bill) => (
                    <Card key={bill._id} bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default RecentBills;
