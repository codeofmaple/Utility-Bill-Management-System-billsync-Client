import React from 'react';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet></Outlet>
            </main>

            <footer>
                <Footer></Footer>
            </footer>

            <ToastContainer />
        </div>
    );
};

export default HomeLayout;