"use client";

import { FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import {
    Button,
} from "@material-tailwind/react";
import Data from "./umkm_data";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


export default function UMKMCard() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
                reset: true
            })
          
            sr.reveal('.umkm__card', {
                delay: 200,
                distance: '60px',
                interval: 150,
                origin: 'top',
                
            })
        }
    }, []);

    return (
        <section className="py-4">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center text-center gap-6 md:gap-8">
                    {Data.map((card, index) => (
                        <div className="umkm__card mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl p-4 max-w-xs md:max-w-md lg:max-w-lg">
                        
                        <div
                            key={index}
                            className="block max-w-sm mx-auto bg-white rounded-lg overflow-hidden transition-transform transform"
                        >
                            <div className="relative h-48 bg-white">
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="p-2">
                                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-primary transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {card.singkat}
                                </p>
                                <div className="mt-2 flex justify-center space-x-4">
                                        {/* <a
                                            
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-gray-900"
                                        >
                                            <FaFacebook size={24} />
                                        </a> */}
                                        <a
                                            href={`https://wa.me/`+card.contact}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-600 hover:text-secondary"
                                        >
                                            <FaWhatsapp size={24} />
                                        </a>
                                </div>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 flex justify-center">
                    <a href="/umkm" className="flex items-center">
                        <Button className="bg-white text-secondary md:text-base font-semibold hover:shadow-lg hover:border-2 hover:border-white hover:bg-secondary hover:text-white transition duration-500 ease-in-out flex items-center gap-2">
                            Lihat Selengkapnya{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </Button>
                    </a>
                </div>
            </div>
        </section>
    );
}
