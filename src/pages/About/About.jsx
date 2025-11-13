import { Fade, Zoom } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter';
import { FiShield, FiFileText, FiSearch, FiCreditCard, FiZap, FiWifi } from 'react-icons/fi';
import { LuDroplets } from "react-icons/lu";
import { Link } from 'react-router';

const About = () => {
    const features = [
        {
            icon: <FiShield className="text-2xl" />,
            title: "Secure Login",
            description: "Bank-level security to protect your personal and payment information"
        },
        {
            icon: <FiCreditCard className="text-2xl" />,
            title: "Easy Payments",
            description: "Pay current month bills seamlessly with multiple payment options"
        },
        {
            icon: <FiSearch className="text-2xl" />,
            title: "Smart Search",
            description: "Quickly find and manage your utility bills with advanced search"
        },
        {
            icon: <FiFileText className="text-2xl" />,
            title: "PDF Reports",
            description: "Download detailed PDF reports of your payment history"
        }
    ];

    const utilityTypes = [
        { name: "Electricity", icon: <FiZap /> },
        { name: "Gas", icon: <FiZap /> },
        { name: "Water", icon: <LuDroplets /> },
        { name: "Internet", icon: <FiWifi /> }
    ];

    const techStack = ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'DaisyUI'];

    return (
        <div className="min-h-screen bg-base-100 text-base-content">
            <title>BillSync | About</title>
            {/* name */}
            <section className="py-16 px-4">
                <div className="container mx-auto text-center">
                    <Fade triggerOnce duration={800}>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About{' '}
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Utility Bill System', 'Payment Platform', 'Bill Manager']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>
                        <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                            A modern, secure solution for managing all your utility bills in one place.
                            Built with MERN stack for reliability and performance.
                        </p>
                    </Fade>
                </div>
            </section>

            {/* feature */}
            <section className="py-12 px-4 bg-base-100">
                <div className="container mx-auto">
                    <Zoom triggerOnce>
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Why Choose <span className="text-cyan-500">Our Platform</span>
                        </h2>
                    </Zoom>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <Fade key={index} triggerOnce delay={index * 150}>
                                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-300">
                                    <div className="card-body text-center p-6">
                                        <div className="text-cyan-500 mb-3 flex justify-center">
                                            {feature.icon}
                                        </div>
                                        <h3 className="card-title text-lg justify-center text-purple-500">
                                            {feature.title}
                                        </h3>
                                        <p className="text-base-content/70 text-sm">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </div>
                </div>
            </section>

            {/* utilities */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Fade triggerOnce>
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Supported <span className="text-purple-500">Utilities</span>
                        </h2>
                    </Fade>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {utilityTypes.map((utility, index) => (
                            <Zoom key={index} triggerOnce delay={index * 200}>
                                <div className="badge badge-lg py-4 px-6 border-0 bg-linear-to-r from-cyan-500/10 to-purple-500/10 text-base-content gap-2">
                                    <span className="text-cyan-500">
                                        {utility.icon}
                                    </span>
                                    {utility.name}
                                </div>
                            </Zoom>
                        ))}
                    </div>

                    {/* tech stack */}
                    <Fade triggerOnce>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-6 text-cyan-500">
                                Built with Modern Technology
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {techStack.map((tech, index) => (
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
                </div>
            </section>

            {/* invite section */}
            <section className="py-12 px-4 bg-linear-to-r from-cyan-500/5 to-purple-500/5">
                <div className="container mx-auto text-center">
                    <Fade triggerOnce>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Ready to Simplify Your Bills?
                        </h2>
                        <p className="text-base-content/70 mb-6 max-w-md mx-auto">
                            Join users managing their utility bills efficiently with our platform.
                        </p>
                        <Link to='/register' className="btn btn-lg bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600">
                            Get Started Today
                        </Link>
                    </Fade>
                </div>
            </section>
        </div>
    );
};

export default About;