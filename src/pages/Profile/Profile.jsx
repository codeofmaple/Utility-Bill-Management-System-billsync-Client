import React, { useEffect, useState } from "react";
import { FiUser, FiMail, FiCalendar } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Profile = () => {
    const axios = useAxios();
    const { user, setLoading } = useAuth();
    const join = user?.metadata?.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "N/A";

    const [bills, setBills] = useState([]);



    useEffect(() => {
        axios.get("/my-bills")
            .then(data => {
                const billsData = data.data?.bills || data.data || [];
                const filteredBills = user?.email
                    ? billsData.filter(billData => billData.email === user.email)
                    : billsData;
                setBills(filteredBills);
            })
            .finally(() => setLoading(false));
    }, [axios, user]);

    const totalAmount = bills.reduce((sum, bill) => sum + (+bill.amount || 0), 0);
    const totalBills = bills.length;

    return (
        <div className="min-h-screen bg-base-200 py-10">
            <title>BillSync | Profile</title>
            <div className="max-w-lg mx-auto px-4">
                <div
                    className="relative rounded-2xl p-6 overflow-hidden
                     bg-white/6 dark:bg-slate-800/60 border border-white/10 dark:border-white/6
                     backdrop-blur-sm shadow-lg"
                >
                    {/* header */}
                    <div className="flex flex-col items-center text-center mb-6">

                        <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                            BillSync
                        </h1>

                        <h3 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                            Welcome, {user?.displayName}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Manage your bills securely</p>
                    </div>

                    {/* main */}
                    <div className="flex items-center gap-4">
                        <div
                            className="w-20 h-20 rounded-full overflow-hidden shrink-0
                         ring-4 ring-cyan-300/20 dark:ring-cyan-400/30 shadow-md"
                            style={{ background: "linear-gradient(135deg,#06b6d4,#8b5cf6)" }}
                        >
                            {user?.photoURL ? (
                                <img src={user.photoURL} alt="avatar" className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-white">
                                    <FiUser className="text-2xl" />
                                </div>
                            )}
                        </div>

                        <div className="flex-1">
                            <div className="text-sm text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                <FiMail className="text-cyan-400" />
                                <span className="truncate">{user?.email || "No email"}</span>
                            </div>
                            <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                                <FiCalendar className="text-purple-400" />
                                Joined {join}
                            </div>
                        </div>
                    </div>

                    {/* details & stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="p-3 rounded-lg bg-white/4 dark:bg-white/3 border border-white/8 text-center">
                            <div className="text-lg font-bold text-cyan-300">{totalBills}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Bills Paid</div>
                        </div>
                        <div className="p-3 rounded-lg bg-white/4 dark:bg-white/3 border border-white/8 text-center">
                            <div className="text-lg font-bold text-purple-300">${totalAmount}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Total Spent</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
