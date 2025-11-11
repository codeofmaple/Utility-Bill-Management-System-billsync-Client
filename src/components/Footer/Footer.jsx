import React from 'react';
import { SiThunderstore } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin, FaShieldAlt, FaHeadset, FaArrowRight } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';
import { MdMailOutline } from "react-icons/md";

const links = {
    nav: ['Home', 'All Bills', 'My Payments', 'Dashboard'],
    support: ['Privacy Policy', 'Terms of Service', 'FAQ']
};

const socials = [FaFacebook, FaInstagram, FaXTwitter, FaLinkedin];

const Footer = () => (
    <footer className="footer-bg text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-purple-900/30 via-transparent to-cyan-900/30"></div>
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-400 to-purple-500"></div>

        <div className="bill-sync-container relative z-10 py-16 grid grid-cols-1 md:grid-cols-4 gap-8 md:px-0 px-[2%]">
            {/* logo */}
            <div className='space-y-6'>

                <div to="/" className="flex items-center space-x-3 hover:opacity-90 transition-all duration-300">
                    <div className="bg-linear-to-r from-cyan-400 to-purple-500 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                        <SiThunderstore className="text-white" size={22} />
                    </div>
                    <h1 className="text-2xl font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
                        BillSync
                    </h1>
                </div>

                <p className="text-slate-300 text-sm">Streamline utility management with secure payments and complete control.</p>
                <div className="flex items-center space-x-3 text-cyan-400">
                    <FaShieldAlt />
                    <span className="text-sm font-semibold">100% Secure Payments</span>
                </div>
            </div>

            {/* nav links */}
            <div className='space-y-6'>
                <h3 className="text-lg font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text flex items-center">
                    Navigation
                    <span className="ml-3 h-0.5 w-8 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                </h3>
                <ul className="space-y-4">
                    {links.nav.map(item => (
                        <li key={item}>
                            <a href="#" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></span>
                                {item}
                                <FaArrowRight className="text-cyan-400 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* support */}
            <div className='space-y-6'>
                <h3 className="text-lg font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text flex items-center">
                    Support
                    <span className="ml-3 h-0.5 w-8 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                </h3>
                <ul className="space-y-4">
                    <li>
                        <a href="#" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                            <FaHeadset className="text-cyan-400 mr-3" />
                            Help Center
                            <FaArrowRight className="text-cyan-400 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
                        </a>
                    </li>
                    {links.support.map(item => (
                        <li key={item}>
                            <a href="#" className="group flex items-center text-slate-300 hover:text-white transition-all duration-300">
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"></span>
                                {item}
                                <FaArrowRight className="text-cyan-400 text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all ml-auto" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* social */}
            <div className='space-y-6'>
                <h3 className="text-lg font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text flex items-center">
                    Connect With Us
                    <span className="ml-3 h-0.5 w-8 bg-linear-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                </h3>

                <div className="flex space-x-4">
                    {socials.map((Icon, i) => (
                        <a key={i} href="#" className="relative overflow-hidden w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-lg hover:-translate-y-1 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/30">
                            <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Icon className="relative z-10" />
                        </a>
                    ))}
                </div>

                <div className="space-y-3 text-sm mt-6">
                    <p className="text-slate-300 flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                        <span className="text-cyan-400"><MdMailOutline className="size-4" /></span> support@billsync.com
                    </p>
                    <p className="text-slate-300 flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300">
                        <span className="text-cyan-400"><FaPhoneAlt /></span> +1 (555) 123-BILL
                    </p>
                </div>
            </div>
        </div>

        {/* copyright */}
        <div className="border-t border-slate-800/50 relative z-10">
            <div className="text-center py-6">
                <p className="text-slate-400 text-sm">
                    © 2025 <span className="font-bold bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">BillSync</span>. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;

