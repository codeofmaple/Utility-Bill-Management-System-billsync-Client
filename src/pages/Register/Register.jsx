// Register.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { FiUser, FiMail, FiCamera, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { SiThunderstore } from 'react-icons/si';
import './register.css';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, setUser, updateUser, logInWithGoogle, loading, setLoading } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const photo = e.target.photoURL.value.trim();
        const password = e.target.password.value;

        if (!name || !photo) {
            toast.error('Please fill out the form.');
            setError('Please fill out the form.');
            return;
        }

        // password validation rules
        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            setError('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/(?=.*[a-z])/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            setError('Password must contain at least one lowercase letter.');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            setError('Password must be at least 6 characters long.');
            return;
        }

        setLoading(true);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // update profile
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        const updated = { ...user, displayName: name, photoURL: photo };
                        setUser(updated);
                        toast.success('Profile updated');
                        navigate('/');
                    })
                    .catch((err) => {
                        setUser(user);
                        toast.error(`Profile update failed! ${err.code || err.message}`);
                        navigate('/');
                    })
                    .finally(() => {
                        setLoading(false);
                    });

                toast.success('Registration successful');
                e.target.reset();
            })
            .catch((error) => {
                setLoading(false);
                setError(error.code || error.message);
                toast.error(`Registration failed! ${error.code || error.message}`);
            });
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        logInWithGoogle()
            .then((result) => {
                setUser(result.user);
                toast.success('Google login successful!');
                navigate('/');
            })
            .catch((error) => {
                toast.error(`Login failed! ${error.message}`);
                setLoading(false);
            });
    };

    const inputBase =
        "w-full px-4 py-3 rounded-2xl bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none transition-shadow duration-200";

    return (
        <div
            className="min-h-screen flex items-center justify-center auth-bg-color px-4 py-5"
            style={{ background: 'linear-gradient(135deg,#06202f 0%, #08122a 50%, #2b0b3a 100%)' }}
        >
            <div className="w-full max-w-lg relative overflow-hidden rounded-3xl md:p-8 p-5">
                <div
                    className="absolute -top-16 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30"
                    style={{ background: 'linear-gradient(90deg,#00d2ff,#9b5cff)' }}
                />
                <div
                    className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-2xl opacity-20"
                    style={{ background: 'linear-gradient(90deg,#7ae0ff,#a56bff)' }}
                />

                {/* card */}
                <div className="relative z-10 rounded-2xl backdrop-blur-md bg-linear-to-br from-white/6 via-white/4 to-white/3 border border-white/10 shadow-xl p-8">
                    <div
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))' }}
                    />

                    <div className="text-center mb-6 relative z-20">
                        <div className="inline-block hover:opacity-90 transition-all duration-300 mb-1">
                            <div className="bg-linear-to-r from-cyan-400 to-purple-500 size-10 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                                <SiThunderstore className="text-white" size={22} />
                            </div>
                        </div>

                        <h1 className="text-3xl font-extrabold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            Create Account
                        </h1>
                        <p className="text-sm text-white/70 mt-2">Join BillSync to manage your bills securely</p>
                    </div>

                    {/* error */}
                    {error && (
                        <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm relative z-20">
                            {error}
                        </div>
                    )}

                    {/* form */}
                    <form onSubmit={handleRegister} className="space-y-4 relative z-20">
                        <div className="relative">
                            <FiUser className="absolute left-4 top-3.5 text-white/60" />
                            <input type="text" name="name" placeholder="Full Name" className={`${inputBase} pl-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 rounded-2xl`} required />
                        </div>

                        <div className="relative">
                            <FiMail className="absolute left-4 top-3.5 text-white/60" />
                            <input type="email" name="email" placeholder="Email address" className={`${inputBase} pl-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 rounded-2xl`} required />
                        </div>

                        <div className="relative">
                            <FiCamera className="absolute left-4 top-3.5 text-white/60" />
                            <input type="url" name="photoURL" placeholder="Profile Photo URL" className={`${inputBase} pl-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 rounded-2xl`} required />
                        </div>

                        <div className="relative">
                            <FiLock className="absolute left-4 top-3.5 text-white/60" />
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                placeholder="Password"
                                className={`${inputBase} pl-12 pr-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20 rounded-2xl`}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-3.5 text-white/70 hover:text-cyan-300 transition-colors"

                            >
                                {showPassword ? <FiEyeOff /> : <FiEye />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 bg-linear-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-2xl transition-transform duration-200 ease-out hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <span>Register</span>}
                            <FiArrowRight />
                        </button>
                    </form>

                    {/* devide */}
                    <div className="flex items-center gap-4 my-6 relative z-20">
                        <span className="flex-1 h-px bg-white/10" />
                        <span className="text-white/60 text-sm">OR</span>
                        <span className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* google */}
                    <button
                        onClick={handleGoogleLogin}
                        disabled={loading}
                        className="w-full py-3 border border-white/10 rounded-2xl bg-transparent flex items-center justify-center gap-3 font-medium hover:shadow-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/20"
                    >
                        <span className="p-2 rounded-full bg-white/6">
                            <FaGoogle className="text-white/90" />
                        </span>
                        <span className="text-white/90">Continue with Google</span>
                    </button>

                    {/* login link */}
                    <p className="text-center mt-5 text-sm text-white/70 relative z-20">
                        Already have an account?{' '}
                        <NavLink to="/login" className="font-semibold text-transparent bg-linear-to-r from-cyan-300 to-purple-300 bg-clip-text hover:underline">
                            Login Now
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
