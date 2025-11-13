import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router';
import { Fade, Zoom } from 'react-awesome-reveal';
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { SiThunderstore } from 'react-icons/si';
import useAuth from '../../hooks/useAuth';
import { toast } from 'react-toastify';

const Login = () => {
    const { logInWithGoogle, setUser, loading, setLoading, logIn } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                toast.success("Login successful");
                navigate(`${location.state ? location.state : "/"}`)
                e.target.reset();
            })
            .catch((error) => {
                toast.error(`Login failed! ${error.code || error.message}`);
                setLoading(false);
            });
    };

    const handleGoogleLogin = () => {
        setLoading(true);
        logInWithGoogle()
            .then((result) => {
                setUser(result.user);
                toast.success("Google login successful!");
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                toast.error(`Login failed! ${error.message}`);
                setLoading(false);
            });
    };

    const inputBase = "w-full px-4 py-3 rounded-2xl bg-white/6 border border-white/10 text-white placeholder-white/60 focus:outline-none transition-all duration-300 ease-out";

    return (
        <Fade triggerOnce duration={1000}>
            <div className="min-h-screen flex items-center justify-center px-4 bg-base-200" style={{ background: 'linear-gradient(135deg,#06202f 0%, #08122a 50%, #2b0b3a 100%)' }}>
                <title>BillSync | Login</title>
                <div className="w-full max-w-lg relative overflow-hidden rounded-3xl md:p-8 p-5">
                    {/* anime */}
                    <div className="absolute -top-16 -left-20 w-72 h-72 rounded-full blur-3xl opacity-30 animate-pulse" style={{ background: 'linear-gradient(90deg,#00d2ff,#9b5cff)' }} />
                    <div className="absolute -bottom-24 -right-16 w-80 h-80 rounded-full blur-2xl opacity-20 animate-pulse delay-1000" style={{ background: 'linear-gradient(90deg,#7ae0ff,#a56bff)' }} />

                    {/* card */}
                    <Zoom triggerOnce duration={800}>
                        <div className="relative z-10 rounded-2xl backdrop-blur-md bg-linear-to-br from-white/6 via-white/4 to-white/3 border border-white/10 shadow-2xl p-8 transform transition-all duration-500 hover:shadow-3xl">
                            <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.02))' }} />

                            {/* title */}
                            <Fade triggerOnce cascade damping={0.3}>
                                <div className="text-center mb-6 relative z-20">
                                    <Zoom triggerOnce duration={600}>
                                        <div className="inline-block hover:scale-110 transition-transform duration-300">
                                            <div className="bg-linear-to-r from-cyan-400 to-purple-500 size-10 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300">
                                                <SiThunderstore className="text-white" size={22} />
                                            </div>
                                        </div>
                                    </Zoom>
                                    <h1 className="text-3xl font-extrabold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                        Welcome Back
                                    </h1>
                                    <p className="text-sm text-white/70 mt-2">Login to manage your bills securely</p>
                                </div>
                            </Fade>

                            {/* Form */}
                            <form onSubmit={handleLogin} className="space-y-4 relative z-20">
                                <Fade triggerOnce cascade damping={0.2} delay={200}>
                                    <div className="space-y-4">
                                        <div className="relative transform transition-all duration-300 hover:scale-[1.02]">
                                            <FiMail className="absolute left-4 top-3.5 text-white/60 transition-colors duration-300" />
                                            <input
                                                type="email"
                                                placeholder="Email address"
                                                name="email"
                                                className={`${inputBase} pl-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20`}
                                                required
                                            />
                                        </div>

                                        <div className="relative transform transition-all duration-300 hover:scale-[1.02]">
                                            <FiLock className="absolute left-4 top-3.5 text-white/60 transition-colors duration-300" />
                                            <input
                                                type={showPassword ? 'text' : 'password'}
                                                placeholder="Password"
                                                name="password"
                                                className={`${inputBase} pl-12 pr-12 focus:border-cyan-400 focus:shadow-lg focus:shadow-cyan-500/20`}
                                                required
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-3.5 text-white/70 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110"
                                            >
                                                {showPassword ? <FiEyeOff /> : <FiEye />}
                                            </button>
                                        </div>
                                    </div>
                                </Fade>

                                <Fade triggerOnce delay={500}>
                                    <div className="text-right">
                                        <NavLink to="/forgot-password" className="text-sm text-cyan-300 hover:text-cyan-200 transition-all duration-300 transform hover:scale-105">
                                            Forgot Password?
                                        </NavLink>
                                    </div>
                                </Fade>

                                <Fade triggerOnce delay={600}>
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 bg-linear-to-r from-cyan-400 to-purple-500 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 ease-out hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95"
                                    >
                                        {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <span>Login</span>}
                                        <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                                    </button>
                                </Fade>
                            </form>

                            {/* devide */}
                            <Fade triggerOnce delay={700}>
                                <div className="flex items-center gap-4 my-6 relative z-20">
                                    <span className="flex-1 h-px bg-white/10 transition-all duration-300" />
                                    <span className="text-white/60 text-sm">OR</span>
                                    <span className="flex-1 h-px bg-white/10 transition-all duration-300" />
                                </div>
                            </Fade>

                            {/* google */}
                            <Fade triggerOnce delay={800}>
                                <button
                                    onClick={handleGoogleLogin}
                                    disabled={loading}
                                    className="w-full py-3 border border-white/10 rounded-2xl bg-transparent flex items-center justify-center gap-3 font-medium hover:shadow-lg hover:border-cyan-400 transition-all duration-300 hover:shadow-cyan-500/20 transform hover:scale-[1.02] active:scale-95"
                                >
                                    <span className="p-2 rounded-full bg-white/6 transition-all duration-300">
                                        <FaGoogle className="text-white/90" />
                                    </span>
                                    <span className="text-white/90">Continue with Google</span>
                                </button>
                            </Fade>

                            {/* register */}
                            <Fade triggerOnce delay={900}>
                                <p className="text-center mt-5 text-sm text-white/70 relative z-20">
                                    Don't have an account?{' '}
                                    <NavLink state={location.state} to="/register" className="font-semibold text-transparent bg-linear-to-r from-cyan-300 to-purple-300 bg-clip-text hover:underline transition-all duration-300">
                                        Register Now
                                    </NavLink>
                                </p>
                            </Fade>
                        </div>
                    </Zoom>
                </div>
            </div>
        </Fade>
    );
};

export default Login;