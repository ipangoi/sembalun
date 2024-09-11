import { TbMapShare } from "react-icons/tb";

export default function Pergasingan() {
    return (

        <section class="text-gray-600 body-font">
            <div class="relative block h-[240px] lg:h-[500px]">
                <div class="relative w-full h-full">
                    <div
                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: 'url("/pergasingan.jpg")',
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
                                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Bukit Pergasingan</h1>
                                        <div class="flex mb-4">
                                            <a class="flex-grow text-secondary border-b-2 border-secondary py-2 text-lg px-1">Description</a>
                                        </div>
                                        <p class="leading-relaxed mb-4">
                                        Bukit Pergasingan merupakan salah satu jejeran bukit yang ada di kawasan lingkar Gunung Rinjani, Kecamatan Sembalun, Lombok Timur, Nusa Tenggara Barat. Bukit Pergasingan menjadi salah satu tujuan hiking para pendaki jika berkunjung ke Kawasan Taman Nasional Gunung Rinjani (TNGR). Waktu mendaki yang dibutuhkan untuk mencapai pucaknya kurang lebih 3 sampai empat jam dengan kecuraman rata-rata 60 derajat. 
                                        </p>
                                        <div class="flex border-t border-gray-200 py-2">
                                            <span class="text-gray-500">Ketinggian</span>
                                            <span class="ml-auto text-gray-900">1.806 Mdpl</span>
                                        </div>
                                            <div class="flex border-t border-b mb-2 border-gray-200 py-2">
                                            <span class="text-gray-500">Lokasi</span>
                                            <span class="ml-auto text-gray-900 text-right">Sembalun, Lombok, Indonesia</span>
                                        </div>
                                        <a href="https://maps.app.goo.gl/bLo6ZznTnkYr3TAw8" class="text-left items-center hover:text-secondary duration-200">
                                            <span class="">
                                            Lihat Lokasi
                                            </span>
                                            <TbMapShare class="mx-2 h-8 w-8 inline"/>
                                        </a>
                                        
                                    </div>
                                    
                                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/pergasingan.jpg"/>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>

        </section>

        
    )
}