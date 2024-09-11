

export default function Tentang(){
    return (
        <section class="text-gray-600 body-font">
            <div class="relative block h-[240px] lg:h-[500px]">
                <div class="relative w-full h-full">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: 'url("/5.jpg")',
                            filter: 'brightness(50%)',
                            zIndex: -1
                        }}
                    ></div>
                    <div class="absolute -mt-32 top-0 left-0 w-full h-full flex items-center justify-center z-10">
                            <h1 class="font-semibold text-white text-3xl lg:text-6xl">
                                Desa Wisata Sembalun
                            </h1>
                        </div>
                </div>
            </div>
            <section class="relative py-16 bg-gray-100">
                <div class="container mx-auto px-4">
                    <div
                    class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-48 lg:-mt-96 p-8"
                    >
                        <div class="container md:px-5 py-2 mx-auto">
                            <div class="flex flex-col text-center w-full mb-12">
                                {/* <h1 class="sm:text-4xl text-3xl font-semibold title-font mb-4 text-secondary">Desa Wisata Sembalun</h1> */}
                                <h2 class="md:px-12 sm:text-2xl text-xl font-medium mb-2 text-secondary text-left">Deskripsi</h2>
                                <p class="md:px-12 mb-6 mx-auto leading-relaxed text-sm md:text-base text-left">Sembalun merupakan salah satu desa di kaki Gunung Rinjani yang terletak di Kecamatan Sembalun, Kabupaten Lombok Timur, Provinsi Nusa Tenggara Barat. Desa ini memiliki luas wilayah mencapai 16,39 Km² yang berbatasan langsung dengan Kecamatan Sambelia (Utara), Kecamatan Aikmel dan Pringgasela (Selatan), Kabupaten Lombok Barat (Barat), dan Kecamatan Pringgabaya (Timur). Berbagai destinasi wisata seperti jalur utama pendakian Gunung Rinjani dan objek wisata alam lainnya membuat Sembalun menyandang gelar Desa Wisata.</p>
                                <h2 class="md:px-12 sm:text-2xl text-xl font-medium mb-2 text-secondary text-left">Fasilitas</h2>
                                <p class="md:px-12 mx-auto leading-relaxed text-sm md:text-base text-left">Tersedia fasilitas penunjang pariwisata di Desa Sembalun seperti hotel, villa, homestay, rumah makan, supermarket, dll. Selain itu, tersedia juga fasilitas umum seperti tempat ibadah, toilet umum, dan tempat parkir.</p>
                            </div>
                            <h2 class="px-12 sm:text-2xl text-xl font-medium mb-4 text-secondary text-center">Data Statistik</h2>
                            <div class="flex flex-wrap -m-4 text-center">
                                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="#02985B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M8 17l4 4 4-4m-4-5v9"></path>
                                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                                    </svg>
                                    <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                                    <p class="leading-relaxed">Dusun</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="#02985B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                                    </svg>
                                    <h2 class="title-font font-medium text-3xl text-gray-900">2.309</h2>
                                    <p class="leading-relaxed">Total Penduduk</p>
                                    </div>
                                </div>
                                <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
                                    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                                    <svg fill="none" stroke="#02985B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                                        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                                    </svg>
                                    <h2 class="title-font font-medium text-3xl text-gray-900">16,39 Km²</h2>
                                    <p class="leading-relaxed">Luas Wilayah</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-12">
                                <h2 class="px-12 sm:text-2xl text-xl font-medium mb-8 text-secondary text-center">Fasilitas Umum</h2>
                                <div class="flex flex-wrap -m-4">
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/kandes.jpg" alt="kandes"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">Kantor Desa Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="https://maps.app.goo.gl/GUSTbWPL4xKDnKk2A">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/rest_area.jpg" alt="content"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">Rest Area Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="https://maps.app.goo.gl/2HNQBNRZXZw5ZAoH9">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="https://dummyimage.com/720x400" alt="content"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">Puskesmas Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="#" class="https://maps.app.goo.gl/UAry6tnNZxaHCYFv7">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/pasar.jpg" alt="content"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">Pasar Minggu</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="https://maps.app.goo.gl/BpLtNGwRRvZQUEpZ7">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/shelter.jpg" alt="content"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">Shelter Bus Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="https://maps.app.goo.gl/Dh11Rp4Tu3TMWemr6">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/sdn1.jpg" alt="sdn1"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">SDN 1 Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    <div class="xl:w-1/4 md:w-1/2 px-4 py-2">
                                        <a href="https://maps.app.goo.gl/ecRoQ1sUfd5Yx3g97">
                                            <div class="border-2 border-gray-200 p-6 rounded-lg text-center hover:scale-105 transition-all ease-in-out duration-300">
                                                <img class="h-40 rounded w-full object-cover object-center mb-2" src="/smp.jpg" alt="content"/>
                                                <h2 class="text-lg text-secondary font-medium title-font">SMPN 1 Sembalun</h2>
                                            </div>

                                        </a>
                                    </div>
                                    
                                    
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </section>
    )
}