"use client"

import {
    Button,
} from "@material-tailwind/react";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Tentang() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
            })
          
            sr.reveal('.tentang__judul', {origin: 'top'})
            sr.reveal('.tentang__text')
            const handleResize = () => {
                if (window.innerWidth >= 960) { // lg screen size and above
                    sr.reveal('.tentang__video', {
                        origin: 'right',
                        distance: '100px',
                        duration: 3000,
                        delay: 100
                    });
                } else {
                    sr.reveal('.tentang__video', {
                        origin: 'bottom',
                        distance: '100px',
                        duration: 3000,
                        delay: 100
                    });
                }
            };

            window.addEventListener('resize', handleResize);
            handleResize(); // Call once on component mount

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <section class="bg-white relative py-15 pt-8 lg:pt-16">
        <div class="container">
            <div class="items-center flex flex-wrap justify-center">

                <div class="w-full lg:w-6/12 px-4">
                    <div class="md:pr-12">
                        <h3 class="tentang__judul font-bold text-lg sm:text-2xl text-secondary md:text-4xl lg:text-5xl">Tentang <br/> Desa Sembalun</h3>
                        <div class="tentang__text">
                            <p class="mt-4 font-normal text-sm md:text-lg leading-relaxed text-gray-600">
                            Sembalun merupakan salah satu desa di kaki Gunung Rinjani yang terletak di Kecamatan Sembalun, Kabupaten Lombok Timur, Provinsi Nusa Tenggara Barat. Secara administratif, Desa Sembalun termasuk ke dalam Kecamatan Sembalun dengan luas wilayah mencapai 32,5 km2. Berbagai destinasi wisata seperti jalur utama pendakian Gunung Rinjani dan objek wisata alam lainnya membuat Sembalun menyandang gelar Desa Wisata.
                            </p>
                            <div class="flex items-center flex-wrap ">
                                <a href="/tentang" class="text-secondary hover:brightness-75 inline-flex items-center mt-2 md:mb-2 lg:mb-0">Read More
                                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="tentang__video w-full lg:w-5/12 p-4 overflow-hidden">
                    <div class="lg:right-0">
                        <div class=' aspect-video ' >
                            <iframe 
                                class="h-full w-full rounded-lg"
                                src="https://www.youtube.com/embed/g-e3LYPQYyY?si=jHWQkLfL_SY9o-hm" 
                                width="100%" 
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen> 
                            </iframe>
                        </div> 
                    </div>
                </div>
                

                
            </div>
        </div>
      </section>
    )
}