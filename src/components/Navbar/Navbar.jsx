import { React, useState } from 'react';
import { NavLink, useNavigate, Link } from 'react-router';
import { FiHome, FiFileText, FiCreditCard, FiUser, FiMenu, FiX, FiLogIn } from 'react-icons/fi';
import { SiThunderstore } from 'react-icons/si';
import { FaAddressBook } from 'react-icons/fa';
import { RiLogoutCircleRLine } from "react-icons/ri";
import './navbar.css';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            toast.success("Sign-out successful.");
            navigate('/');
        } catch (err) {
            toast.error(`Sign-out failed. ${err.code || err.message}`);
        }
    };

    const linkClass = ({ isActive }) =>
        `navlink-css links-hover-effect ${isActive ? 'text-purple-600' : 'text-gray-700'}`;

    const closeMobile = () => setMobileOpen(false);
    const toggleMobile = () => setMobileOpen(!mobileOpen);

    const Links = ({ isMobile = false }) => (
        <>
            <NavLink to="/" className={linkClass} onClick={closeMobile}><FiHome /> Home</NavLink>
            <NavLink to="/bills" className={linkClass} onClick={closeMobile}><FiFileText /> Bills</NavLink>
            {user && <NavLink to="/my-pay-bills" className={linkClass} onClick={closeMobile}><FiCreditCard /> My Pay Bills</NavLink>}

            <div className="divider md:hidden border-t border-gray-200 my-2" />

            {!user ? (
                <>
                    <NavLink to="/login" className={linkClass} onClick={closeMobile}><FiLogIn /> Login</NavLink>
                    <NavLink to="/register" className="bg-linear-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-center" onClick={closeMobile}>
                        <FaAddressBook className="inline mr-2" /> Register
                    </NavLink>
                </>
            ) : (
                <>
                    {!isMobile && (
                        <div className="relative group" onClick={closeMobile}>
                            <Link
                                to="/"
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full overflow-hidden shadow-md transition-transform duration-200 transform hover:scale-105"
                            >
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt={user.displayName || 'avatar'} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white">
                                        <FiUser />
                                    </div>
                                )}
                            </Link>

                            {/* hover card */}
                            <div className="pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 absolute right-0  w-48 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg shadow-lg p-3 text-sm z-50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full overflow-hidden">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt="mini" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-600"><FiUser /></div>
                                        )}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-gray-800 truncate">{user.displayName || user.email}</div>
                                        <div className="text-xs text-gray-500">{user.email}</div>
                                    </div>
                                </div>

                                <div className="mt-3 flex gap-2">
                                    <Link to="/" className="flex-1 px-3 py-1 rounded-md text-center bg-gray-100 hover:bg-gray-200">Profile</Link>
                                </div>
                            </div>
                        </div>
                    )}

                    <button onClick={() => { handleLogout(); closeMobile(); }} className="bg-linear-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300" >
                        <RiLogoutCircleRLine className="inline mr-1" /> Logout
                    </button>
                </>
            )}
        </>
    );

    return (
        <nav className={`bg-white shadow-lg`}>
            <div className="bg-linear-to-r from-cyan-400/5 to-purple-500/5">
                <div className="navbar bill-sync-container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16">
                    <div className="navbar-start">
                        <Link to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300">
                            <div className="bg-linear-to-r from-cyan-400 to-purple-500 size-10 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                                <SiThunderstore className="text-white" size={22} />
                            </div>
                            <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                                BillSync
                            </h1>
                        </Link>
                    </div>

                    <div className="navbar-end flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-6">
                            <Links />
                        </div>

                        {user && (
                            <div className="flex items-center md:hidden mr-1">
                                <Link to="/profile" className="inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden shadow-sm transition-transform duration-150 transform hover:scale-105">
                                    {user.photoURL ? (
                                        <img src={user.photoURL} alt={user.displayName || 'avatar'} className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full bg-linear-to-r from-cyan-400 to-purple-500 flex items-center justify-center text-white">
                                            <FiUser />
                                        </div>
                                    )}
                                </Link>
                            </div>
                        )}

                        {/* mobile toggle button */}
                        <button className="md:hidden btn btn-square btn-ghost" onClick={toggleMobile}>
                            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>

                    {/* mobile dropdown */}
                    {mobileOpen && (
                        <div className="absolute z-50 top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl md:hidden border-t border-gray-100">
                            <div className="flex flex-col p-6 space-y-4">
                                <Links isMobile={true} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
