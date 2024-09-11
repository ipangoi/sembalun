"use client"

import artikel_data from "./artikel_data"
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Artikel() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
                reset: true
            })
            sr.reveal('.artikel__judul', {origin: 'top'})
          
            sr.reveal('.artikel__card', {
                delay: 200,
                distance: '60px',
                interval: 150,
                origin: 'top',
                
            })
        }
    }, []);

    return (
        <section class="bg-white text-gray-600 body-font pb-24">
            
            <div class="container px-5 py-12 mx-auto">
                <div class="artikel__judul w-full px-4">
                    <div class="mx-auto text-center mb-8">
                        <h2 class="font-bold text-secondary text-3xl sm:text-4xl lg:text-5xl">Berita & Artikel</h2>
                        <h4 class="font-semibold text-secondary text-lg mb-4 sm:text-xl lg:text-2xl">Seputar Desa Sembalun</h4>
                    </div>
                </div>
                <div class="flex flex-col -m-4">
                    <div class="bg-neutral rounded-box space-x-4 p-4 md:flex">
                        {artikel_data.map(a => (
                            <div class="artikel__card p-4 md:w-1/3">
                                <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg">
                                    <img class="lg:h-48 md:h-36 w-full object-cover object-center rounded-t-lg" src={a.img} alt="blog"/>
                                    <div class="p-6">
                                    <h2 class="text-sm title-font font-medium text-secondary mb-1">{a.category}</h2>
                                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{a.title}</h1>
                                        <p class="leading-relaxed mb-3">{a.text}</p>
                                        <div class="flex items-center flex-wrap ">
                                            <a href={a.url} class="text-secondary hover:brightness-75 inline-flex items-center md:mb-2 lg:mb-0">Buka Artikel
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}