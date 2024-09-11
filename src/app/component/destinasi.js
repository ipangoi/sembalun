"use client"

import cardList from "./destinasi_data"
import {
    Button,
} from "@material-tailwind/react";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Destinasi() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
                reset: true
            })
            sr.reveal('.destinasi__judul', {origin: 'top'})
          
            sr.reveal('.destinasi__card', {
                delay: 200,
                distance: '60px',
                interval: 150,
                origin: 'top',
                
            })
        }
    }, []);


    return (
        <div>
            <section className="bg-white relative block" style= {{height: '400px'}} >
                <div className="relative w-full h-full flex flex-col items-center">
                    <div
                        className="bg-hero2 brightness-50 absolute top-0 w-full xl:w-10/12 h-full bg-secondary bg-center bg-cover xl:rounded-2xl z-10"
                    ></div>
                    
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
                        <div className="destinasi__judul -mt-12 flex flex-col items-center justify-center">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-10">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <h4 className="text-lg font-medium text-white sm:text-xl lg:text-2xl">
                                Destinasi Wisata
                            </h4>
                            <h2 className="pt-1 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
                                Desa Wisata Sembalun
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <section className="relative py-16 bg-white">
                <div className="container py-16 md:py-20">
                    <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 xl:w-11/12 lg:grid-cols-3 xl:gap-10 mb-6 -mt-72 p-6">
                        {cardList.map(card => (
                                <div className="hover:scale-110 transition-all ease-in-out duration-300 rounded-lg z-20">
                                    <div className="destinasi__card w-full bg-gradient-to-b from-white to-slate-50  rounded-lg  z-20">
                                        <div
                                            className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 rounded-t-lg"
                                            style={{ backgroundImage: `url(${card.img})`}}
                                        >
                                            <span href={card.url}
                                                className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50  hover:rounded-t-lg ease-in-out"
                                            ></span>
                                            <a href={card.url}
                                                className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base hover:bg-secondary hover:text-white duration-200 ease-in-out"
                                            >Read More</a>
                                        </div>
                                        <div className="py-6 px-5 h-60 rounded-b-xl border-2 border-gray-200">
                                            <span className="block font-body text-lg lg:text-xl font-bold text-secondary">
                                                {card.title}
                                            </span>
                                            <span className="block pt-2 font-body text-grey-20">
                                                {card.text}
                                            </span>
                                        </div>

                                    </div>
                                </div>
                        ))}
                    </div>
                    <div className="">
                        <a href="/destinasi/" className="flex flex-col items-center text-center">
                            <Button className="bg-secondary -ml-6 text-white flex items-center gap-2 md:text-base hover:scale-105">
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
        </div>
    );
}
