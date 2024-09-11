import { FcWikipedia } from "react-icons/fc";
import { TbMapShare, TbBrandWikipedia } from "react-icons/tb";

export default function Pergasingan() {
    return (

        <section class="text-gray-600 body-font">
            <div class="relative block h-[240px] lg:h-[500px]">
                <div class="relative w-full h-full">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: 'url("/rinjani.jpg")',
                            filter: 'brightness(50%)',
                            zIndex: -1
                        }}
                    ></div>
                </div>
            </div>
            <section class="relative py-16 bg-gray-100">
                <div class="container mx-auto">
                    <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 lg:-mt-96 py-8"
                    >
                        <section class="text-gray-600 body-font overflow-hidden">
                            <div class="container mx-auto">
                                <div class=" mx-auto flex flex-wrap">
                                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Gunung Rinjani</h1>
                                        <div class="flex mb-4">
                                            <a class="flex-grow text-secondary border-b-2 border-secondary py-2 text-lg px-1">Description</a>
                                        </div>
                                        <p class="leading-relaxed mb-4">
                                        Gunung Rinjani adalah gunung yang berlokasi di Pulau Lombok, Nusa Tenggara Barat. Gunung yang merupakan gunung berapi kedua tertinggi di Indonesia terletak pada lintang 8º25' LS dan 116º28' BT ini merupakan gunung favorit bagi pendaki Indonesia karena keindahan pemandangannya.
                                        </p>
                                        <div class="flex border-t border-gray-200 py-2">
                                            <span class="text-gray-500">Ketinggian</span>
                                            <span class="ml-auto text-gray-900">3.726 Mdpl</span>
                                        </div>
                                        <div class="flex border-t border-gray-200 py-2">
                                            <span class="text-gray-500">Luas</span>
                                            <span class="ml-auto text-gray-900">41.330 Ha</span>
                                        </div>
                                            <div class="flex border-t border-b mb-2 border-gray-200 py-2">
                                            <span class="text-gray-500">Lokasi</span>
                                            <span class="ml-auto text-gray-900 text-right">Lombok, Indonesia</span>
                                        </div>
                                        <a href="https://id.wikipedia.org/wiki/Gunung_Rinjani" class="text-left items-center hover:text-secondary duration-200 flex mb-2 mt-4">
                                            <span>
                                            Read on Wikipedia
                                            </span>
                                            <TbBrandWikipedia class="h-8 w-8 inline"/>
                                        </a>
                                        <a href="https://maps.app.goo.gl/V1LYuPuEdBGXYAvD6" class="text-left items-center hover:text-secondary duration-200">
                                            <span class="">
                                            Lihat Lokasi
                                            </span>
                                            <TbMapShare class="mx-2 h-8 w-8 inline"/>
                                        </a>
                                        
                                    </div>
                                    
                                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/rinjani-2.jpg"/>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>

        </section>

        
    )
}