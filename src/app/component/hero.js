"use client"

import Image from "next/image"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Hero() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 600,
                reset: true
            })
          
            sr.reveal('.hero__text', {origin: 'top'})
        }
    }, []);
    
    
    return (
        <section id="home" class="hero h-[540px] xl:h-[680px] flex bg-hero bg-center lg:bg-cover bg-no-repeat md:bg-fixed xl:rounded-bl-[210px] relative z-20">
            <div class="absolute inset-0 bg-black bg-opacity-10 z-10"></div>
            <div class="container flex flex-col items-center justify-center z-20">
                <div class="flex flex-wrap items-center text-center justify-center">
                    <div class="hero__text flex flex-col items-center w-full self-center p-12 m-auto lg:m-0">
                        <h2 class="judul-1 text-xs sm:text-sm font-semibold text-white md:text-base lg:text-lg w-3/4 sm:w-2/5 md:w-1/2 lg:w-3/5 xl:w-2/5 bg-secondary rounded-2xl text-center p-2">
                            Selamat Datang di
                        </h2>
                        <h1 class="judul text-4xl md:text-5xl font-bold mt-1 text-white lg:text-7xl">
                            Desa Wisata Sembalun
                        </h1>
                        <h2 class="judul-3 font-medium text-slate-500 text-gray-200 text-sm mb-5 md:text-xl lg:text-2xl">
                            Surga Kecil di Kaki Gunung Rinjani
                        </h2>
                    </div>

                </div>
            </div>
        </section>
    )
}