"use client"

import UMKMCard from "../umkm/card";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

   
export default function UMKM() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
            })
          
            sr.reveal('.umkm__judul', {origin: 'top'})
        }
    }, []);

    return (
        <section id="UMKM" class="pt-20 pb-20 bg-secondary">
            <div class="container">
                <div class="w-full px-4">
                    <div class="umkm__judul mx-auto text-center mb-8">
                        <h4 class="font-semibold text-lg md:text-xl text-white">Mari Sukseskan</h4>
                        <h2 class="font-bold text-white text-2xl mb-2 sm:text-3xl lg:text-4xl">UMKM Desa Sembalun</h2>
                        <p class="font-medium text-sm text-white md:text-lg">Eksplorasi Produk Khas Kaki Gunung Rinjani Persembahan UMKM Desa Sembalun</p>
                    </div>
                </div>
                <div class="relative w-full px-4">
                    <UMKMCard/>
                </div>
            </div>
        </section>
    )
}