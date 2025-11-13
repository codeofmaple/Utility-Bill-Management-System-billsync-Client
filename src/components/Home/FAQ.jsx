import React, { useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";
import { FiChevronDown, FiHelpCircle, FiMail, FiPhone, FiMessageCircle } from "react-icons/fi";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How do I pay my utility bills?",
            answer: "Simply navigate to the Bills section, select your utility, enter the required details, and proceed with secure payment. We support multiple payment methods including credit/debit cards and digital wallets."
        },
        {
            question: "Is my payment information secure?",
            answer: "Yes! We use bank-level encryption and security protocols to protect your data. Your payment information is never stored on our servers and all transactions are PCI DSS compliant."
        },
        {
            question: "Can I download my payment history?",
            answer: "Absolutely! Go to 'My Paid Bills' section and click the 'Download Report' button to get a PDF report of all your payment history with detailed information."
        },
        {
            question: "What utilities can I manage?",
            answer: "Currently we support Electricity, Gas, Water, and Internet bills. We're constantly working to add more utility providers to our platform."
        },
        {
            question: "How do I update my profile information?",
            answer: "Visit your Profile page where you can update your personal information, contact details, and preferences at any time."
        },
        {
            question: "What if I encounter payment issues?",
            answer: "Contact our 24/7 support team immediately. We'll help resolve any payment issues and ensure your bills are processed correctly."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-base-100 -mt-20">
            <div className="max-w-4xl mx-auto px-4">
                {/* header */}
                <Fade triggerOnce duration={800}>
                    <div className="text-center mb-12">
                        <Zoom triggerOnce duration={600}>
                            <FiHelpCircle className="text-6xl mx-auto mb-4 bg-linear-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text" />
                        </Zoom>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                <Typewriter
                                    words={['Help & FAQ', 'Support Center', 'Get Help']}
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
                            Find answers to common questions about managing your utility bills with BillSync.
                        </p>
                    </div>
                </Fade>

                {/* FAQ section */}
                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <Fade key={index} triggerOnce duration={600} delay={index * 100}>
                            <div
                                className={`card bg-base-100 border transition-all duration-300 ease-in-out cursor-pointer
                                    ${activeIndex === index
                                        ? 'border-cyan-500 shadow-xl bg-linear-to-r from-cyan-500/5 to-purple-500/5'
                                        : 'border-base-300 shadow-lg hover:shadow-xl hover:border-cyan-300'
                                    }`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="card-body p-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-base-content flex-1 pr-4">
                                            {faq.question}
                                        </h3>
                                        <div className={`transition-transform duration-300 ease-in-out ${activeIndex === index ? 'text-purple-500 rotate-180' : 'text-cyan-500'}`}>
                                            <FiChevronDown className="text-xl" />
                                        </div>
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-in-out
                                            ${activeIndex === index
                                                ? 'max-h-96 opacity-100 mt-4'
                                                : 'max-h-0 opacity-0 mt-0'
                                            }`}
                                    >
                                        <p className="text-base-content/70 pl-2 border-l-4 border-purple-500 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>

                {/* contract section */}
                <Zoom triggerOnce duration={800}>
                    <div className="card bg-linear-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                        <div className="card-body text-center p-8">
                            <h2 className="text-2xl font-bold text-base-content mb-4">
                                Still Need Help?
                            </h2>
                            <p className="text-base-content/70 mb-6">
                                Our support team is here to assist you 24/7
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="btn bg-linear-to-r from-cyan-500 to-purple-500 border-0 text-white hover:from-cyan-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-105">
                                    <FiMail className="text-lg mr-2" />
                                    Email Support
                                </button>
                                <button className="btn btn-ghost border border-base-300 text-base-content hover:bg-base-200 transform transition-all duration-300 hover:scale-105">
                                    <FiPhone className="text-lg mr-2" />
                                    Call Support
                                </button>
                                <button className="btn btn-ghost border border-base-300 text-base-content hover:bg-base-200 transform transition-all duration-300 hover:scale-105">
                                    <FiMessageCircle className="text-lg mr-2" />
                                    Live Chat
                                </button>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default FAQ;