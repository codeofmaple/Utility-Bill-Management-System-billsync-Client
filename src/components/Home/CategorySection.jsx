import { Fade } from 'react-awesome-reveal';
import { FiZap, FiDroplet, FiWifi, FiShield, FiCreditCard, FiSearch, FiFileText } from 'react-icons/fi';
import { FaFireFlameCurved } from 'react-icons/fa6';

const CategorySection = () => {
    const categories = [
        {
            name: "Electricity",
            icon: <FiZap className="text-3xl" />,
            desc: "Track and manage your electricity bills effortlessly",
            color: "from-yellow-400 to-cyan-400"
        },
        {
            name: "Gas",
            icon: <FaFireFlameCurved className="text-3xl" />,
            desc: "Keep your gas bills up to date with secure payments",
            color: "from-orange-400 to-purple-400"
        },
        {
            name: "Water",
            icon: <FiDroplet className="text-3xl" />,
            desc: "Monitor and pay your water bills with ease",
            color: "from-cyan-400 to-blue-400"
        },
        {
            name: "Internet",
            icon: <FiWifi className="text-3xl" />,
            desc: "Manage your internet bills and stay connected",
            color: "from-purple-400 to-cyan-400"
        },
    ];

    const features = [
        {
            icon: <FiShield />,
            title: "Secure Login",
            desc: "Bank-level security protects your data"
        },
        {
            icon: <FiCreditCard />,
            title: "Easy Payments",
            desc: "Pay current month bills seamlessly"
        },
        {
            icon: <FiSearch />,
            title: "Smart Search",
            desc: "Find and manage bills quickly"
        },
        {
            icon: <FiFileText />,
            title: "PDF Reports",
            desc: "Download payment history reports"
        }
    ];

    return (
        <div className="bg-base-100 text-base-content main-container">
            {/* hero */}
            <section className="text-center mb-7 md:mb-14 px-4">
                <Fade triggerOnce cascade damping={0.3}>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Utility Bill{' '}
                        <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                            Management System
                        </span>
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
                        A modern MERN stack solution for managing all your utility bills in one secure platform.
                        Pay current bills, track history, and download reports effortlessly.
                    </p>
                </Fade>
            </section>

            {/* category */}
            <section className="mb-7 md:mb-14 px-4 md:px-0">
                <Fade triggerOnce>
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Supported <span className="text-cyan-500">Utilities</span>
                    </h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 main-container mx-auto">
                    {categories.map((category, index) => (
                        <Fade key={index} triggerOnce delay={index * 100}>
                            <div className="card bg-base-100 border border-base-300 shadow-lg h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 rounded-xl">
                                <div className="card-body items-center text-center p-6">
                                    <div className={`bg-linear-to-r ${category.color} p-3 rounded-full text-white mb-4`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="card-title text-lg mb-2">{category.name}</h3>
                                    <p className="text-base-content/70 text-sm">{category.desc}</p>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            {/* feature */}
            <section className="px-4 md:px-0">
                <Fade triggerOnce>
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Key <span className="text-purple-500">Features</span>
                    </h2>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 main-container">
                    {features.map((feature, index) => (
                        <Fade key={index} triggerOnce delay={index * 150}>
                            <div className="bg-base-200 rounded-lg h-full p-4 text-center border border-base-300 hover:border-cyan-400/30 transition-colors duration-300">
                                <div className="text-cyan-500 mb-2 flex justify-center">
                                    {feature.icon}
                                </div>
                                <h3 className="font-semibold text-purple-500 mb-1">{feature.title}</h3>
                                <p className="text-base-content/70 text-xs">{feature.desc}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </section>

            {/* tech stack */}
            <section className="mt-7 md:mt-14 px-4">
                <Fade triggerOnce>
                    <div className="text-center max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold mb-6 text-cyan-500">
                            Built with Modern Technology
                        </h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'DaisyUI'].map((tech, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-linear-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-cyan-500/20 text-sm"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </Fade>
            </section>
        </div>
    );
};

export default CategorySection;