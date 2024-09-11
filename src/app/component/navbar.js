
"use client"
import { useState, useEffect } from 'react';
import Link from "next/link";

export default function Navbar() {
    const [isNavFixed, setIsNavFixed] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (window.pageYOffset > header.offsetTop) {
                setIsNavFixed(true);
            } else {
                setIsNavFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`top-0 left-0 w-full ${isNavFixed ? 'navbar-fixed' : 'bg-white bg-opacity-75 z-20'} flex flex-col items-center`}>
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4 flex items-center">
                        <a href="/" className="block py-6">
                            <img src="../logo.png" class="h-10 w-10"/>
                        </a>
                        <a href="/" className="font-bold text-sm md:text-lg text-green-600 block py-6 mx-4">
                            Desa Wisata
                            <div className="-m-2"></div>
                            Sembalun
                        </a>
                    </div>
                    <div className="flex items-center px-4">
                        <button 
                            id="hamburger" 
                            name="hamburger" 
                            type="button" 
                            className={`block absolute right-4 lg:hidden ${isNavOpen ? 'navbar-active' : ''}`}
                            onClick={() => setIsNavOpen(!isNavOpen)}
                        >
                            <span className="navbar-line origin-top-left transition duration-300 ease-in-out"></span>
                            <span className="navbar-line transition duration-300 ease-in-out"></span>
                            <span className="navbar-line origin-bottom-left transition duration-300 ease-in-out"></span>
                        </button>
                        <nav id="nav-menu" className={`absolute py-5 bg-white shadow-lg rounded-b-lg max-w-[250px] w-full right-4 top-full z-30 lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none ${isNavOpen ? '' : 'hidden'}`}>
                            <ul className="block lg:flex transition-all duration-300">
                                <li className="group">
                                    <Link href="/" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">Beranda</Link>
                                </li>
                                <li className="group">
                                    <Link href="/tentang/" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">Tentang</Link>
                                </li>
                                <li className="group">
                                    <Link href="https://arcg.is/1uLumS1" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">Peta</Link>
                                </li>
                                <li className="group">
                                    <Link href="/destinasi/" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">Destinasi</Link>
                                </li>
                                <li className="group">
                                    <Link href="/umkm/" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">UMKM</Link>
                                </li>
                                <li className="group">
                                    <Link href="/gallery/" className="text-base text-slate-700 py-2 mx-6 group-hover:text-primary flex">Gallery</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}

