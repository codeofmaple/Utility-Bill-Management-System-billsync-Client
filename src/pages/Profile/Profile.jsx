import React, { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { FiUser, FiMail, FiCalendar, FiDollarSign, FiFileText, FiAward, FiTrendingUp } from "react-icons/fi";
import useAuth from "../../hooks/useAuth";
import useSecureAxios from "../../hooks/useSecureAxios";

const Profile = () => {
    const secureAxios = useSecureAxios();
    const { user, setLoading } = useAuth();
    const [bills, setBills] = useState([]);

    const joinDate = user?.metadata?.creationTime
        ? new Date(user.metadata.creationTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        })
        : "N/A";

    useEffect(() => {
        secureAxios.get(`/my-bills?email=${user?.email}`)
            .then(data => {
                const billsData = data.data?.bills || data.data || [];
                const filteredBills = user?.email
                    ? billsData.filter(billData => billData.email === user.email)
                    : billsData;
                setBills(filteredBills);
            })
            .finally(() => setLoading(false));
    }, [secureAxios, user, setLoading]);

    const totalAmount = bills.reduce((sum, bill) => sum + (+bill.amount || 0), 0);
    const totalBills = bills.length;
    const averageBill = totalBills > 0 ? (totalAmount / totalBills).toFixed(2) : "0.00";

    return (
        <div className="min-h-screen bg-base-100 py-8">
            <div className="max-w-lg mx-auto px-4">
                <Fade triggerOnce duration={1000}>
                    <div className="card bg-base-100 border border-base-300 shadow-2xl hover:shadow-3xl transition-all duration-500 rounded-3xl overflow-hidden">
                        {/* fixed bg */}
                        <div className="bg-linear-to-br from-cyan-600 via-blue-400 to-purple-500 p-6 text-center">
                            <Zoom triggerOnce duration={800}>
                                <div className="space-y-3">
                                    {/* img */}
                                    <div className="relative inline-block">
                                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20 bg-white/10 backdrop-blur-sm mx-auto">
                                            {user?.photoURL ? (
                                                <img
                                                    src={user.photoURL}
                                                    alt="avatar"
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full rounded-full bg-white/20 flex items-center justify-center">
                                                    <FiUser className="text-3xl text-white" />
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                                            <FiAward className="text-white text-sm" />
                                        </div>
                                    </div>

                                    <h1 className="text-2xl font-bold text-white">
                                        {user?.displayName || 'User'}
                                    </h1>

                                    <div className="text-white/80 text-sm">
                                        <Typewriter
                                            words={[
                                                'Utility Bill Manager',
                                                'BillSync Pro User',
                                                'Smart Bill Payer',
                                                'Financial Wizard'
                                            ]}
                                            loop={0}
                                            cursor
                                            cursorStyle="|"
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={2000}
                                        />
                                    </div>
                                </div>
                            </Zoom>
                        </div>

                        <div className="card-body p-6">
                            {/* user details */}
                            <Fade triggerOnce delay={300} cascade damping={0.2}>
                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 p-3 bg-base-200 rounded-xl hover:bg-base-300 transition-colors duration-300">
                                        <div className="p-2 bg-cyan-500/10 rounded-lg">
                                            <FiMail className="text-cyan-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-base-content/70">Email</p>
                                            <p className="text-base-content font-medium truncate">{user?.email || "No email"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 bg-base-200 rounded-xl hover:bg-base-300 transition-colors duration-300">
                                        <div className="p-2 bg-purple-500/10 rounded-lg">
                                            <FiCalendar className="text-purple-500 text-xl" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-base-content/70">Member Since</p>
                                            <p className="text-base-content font-medium">{joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            {/* cards */}
                            <Zoom triggerOnce delay={500}>
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center p-4 bg-linear-to-br from-cyan-500/10 to-cyan-500/5 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                                        <FiFileText className="text-2xl text-cyan-500 mx-auto mb-2" />
                                        <div className="text-xl font-bold text-cyan-500">{totalBills}</div>
                                        <div className="text-xs text-base-content/70">Bills Paid</div>
                                    </div>

                                    <div className="text-center p-4 bg-linear-to-br from-purple-500/10 to-purple-500/5 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                                        <FiDollarSign className="text-2xl text-purple-500 mx-auto mb-2" />
                                        <div className="text-xl font-bold text-purple-500">${totalAmount.toFixed(2)}</div>
                                        <div className="text-xs text-base-content/70">Total Spent</div>
                                    </div>

                                    <div className="text-center p-4 bg-linear-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-500/20 hover:border-purple-500/40 transition-all duration-300">
                                        <FiTrendingUp className="text-2xl bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent mx-auto mb-2" />
                                        <div className="text-xl font-bold bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">${averageBill}</div>
                                        <div className="text-xs text-base-content/70">Avg/Bill</div>
                                    </div>
                                </div>
                            </Zoom>

                            {/* badge */}
                            <Fade triggerOnce delay={700}>
                                <div className="text-center p-4 bg-linear-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl border border-base-300">
                                    <p className="text-sm text-base-content/60">
                                        <span className="font-semibold bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                            {totalBills === 0 ? 'New Bill Manager' :
                                                totalBills < 5 ? 'Rising Star' :
                                                    totalBills < 15 ? 'Bill Master' : 'Ultimate Biller'}
                                        </span>
                                    </p>
                                    <p className="text-xs text-base-content/50 mt-1">
                                        {totalBills === 0 ? 'Start your bill management journey!' :
                                            `You've successfully managed ${totalBills} bills`}
                                    </p>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Profile;