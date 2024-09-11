"use client";

import {
    Button,
    Typography,
    Tabs,
    TabsHeader,
    TabsBody,
    TabPanel,
    Tab,
} from "@material-tailwind/react";
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Peta() {
    const data = [
        {
          label: "Google Maps",
          value: "gmaps",
          desc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6638.768285506544!2d116.52360513267324!3d-8.35877301801336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721996433854!5m2!1sid!2sid",
          url: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6638.768285506544!2d116.52360513267324!3d-8.35877301801336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721996433854!5m2!1sid!2sid",
          footer: "Peta Google Maps"
        },
        {
          label: "Perbatasan Dusun",
          value: "dusun",
          desc: "/Batas Dusun.pdf",
          footer: "Peta Lengkap"
        },
        {
          label: "Persebaran Wisata",
          value: "wisata",
          desc: "https://arcg.is/1uLumS1",
          url: "https://arcg.is/1uLumS1",
          footer: "Story Maps Lengkap"
        },
    ];

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sr = ScrollReveal({
                origin: 'bottom',
                distance: '60px',
                duration: 3000,
                delay: 100,
                reset: true
            })
            sr.reveal('.peta__judul', {origin: 'top'})
          
        }
    }, []);

    return (
        <section id="peta" class="bg-white pt-8 lg:pt-20 pb-16 ">
            <div class=" bg-secondary">
                <div class="container pt-8 pb-16">
                    <div class="w-full px-4">
                        <div class="peta__judul max-w-full relative mb-8 text-center">
                            <h4 class="font-semibold text-lg sm:text-xl md:text-2xl text-white lg:text-5xl">Peta Persebaran Wilayah</h4>
                            <h2 class="font-bold text-white text-xl sm:text-2xl md:text-3xl mb-4">Desa Sembalun</h2>
                        </div>

                        
                        
                        <div class="bg-white p-4 rounded-2xl">
                            <Tabs value="gmaps" className="mx-auto max-w-7xl w-full ">
                                <div className="w-full flex flex-col items-center pt-4">
                                <TabsHeader className=" hidden lg:flex h-10 lg:w-[50rem] border border-white/25 bg-opacity-90">
                                    {data.map(({ label, value }) => (
                                        <Tab key={value} value={value}>
                                            {label}
                                        </Tab>
                                    ))}
                                </TabsHeader>
                                <TabsBody>
                                    {data.map(({ value, desc, url, footer }) => (
                                    <TabPanel key={value} value={value}>
                                        <div class="relative w-full h-96 sm:h-[460px] md:h-[540px] shadow-lg rounded-xl">
                                            <iframe class="absolute top-0 left-0 w-full h-full rounded-xl"
                                                src={desc}
                                                frameborder="0"  style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0">
                                            </iframe>
                                        </div>
                                            <a href={url} class="flex flex-wrap justify-center mt-8">
                                                <Button className="bg-secondary text-white md:text-base hover:shadow-lg hover:border-2 hover:border-secondary hover:bg-white hover:text-secondary transition duration-500 ease-in-out flex items-center gap-2">
                                                    {footer}
                                                </Button>
                                            </a>
                                        
                                    </TabPanel>
                                    ))}
                                    {/* {data.map(({url}) => (
                                        <a href={url} class="flex flex-wrap justify-center mt-2">
                                            <Button className="bg-secondary text-white text-base hover:shadow-lg hover:border-2 hover:border-secondary hover:bg-white hover:text-secondary transition duration-500 ease-in-out flex items-center gap-2">
                                                Peta Lengkap{" "}
                                            </Button>
                                        </a>
                                    ))} */}
                                </TabsBody>
                                </div>
                            </Tabs>
                            {/* <div class="relative w-full h-96 sm:h-[460px] md:h-[540px] mb-4 shadow-lg rounded-xl">
                                <iframe class="absolute top-0 left-0 w-full h-full rounded-xl"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6638.768285506544!2d116.52360513267324!3d-8.35877301801336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1721996433854!5m2!1sid!2sid"
                                    frameborder="0"  style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0">
                                </iframe>
                            </div> */}
                            

                        </div>
                    </div>
                </div>
            </div>  
        </section> 
    )
}