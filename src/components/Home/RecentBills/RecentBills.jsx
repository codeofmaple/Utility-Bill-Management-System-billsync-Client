import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import BillCard from '../../Card/BillCard';
import useAuth from '../../../hooks/useAuth';
import CustomLoading from '../../../pages/Loader/CustomLoading';

const RecentBills = () => {
    const { setLoading, loading } = useAuth();
    const axios = useAxios();
    const [recentBills, setRecentBills] = useState([]);

    useEffect(() => {
        axios
            .get('/recent-bills')
            .then((res) => setRecentBills(res.data))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [axios, setLoading]);

    if (loading) return (
        <CustomLoading pageName="Recent Bills"></CustomLoading>
    );

    return (
        <div className="px-4 md:px-0 bg-base-100 main-container">
            <div className='text-center'>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-linear-to-l inline-block from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Recent Bills
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                {recentBills.map((bill) => (
                    <BillCard key={bill._id} bill={bill} />
                ))}
            </div>
        </div>
    );
};

export default RecentBills;
