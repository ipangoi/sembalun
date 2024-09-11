import { TbMapShare } from "react-icons/tb";

export default function Persawahan() {
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
                                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Area Persawahan</h1>
                                        <div class="flex mb-4">
                                            <a class="flex-grow text-secondary border-b-2 border-secondary py-2 text-lg px-1">Description</a>
                                        </div>
                                        <p class="leading-relaxed mb-4">
                                        Area persawahan di Sembalun, Lombok Timur, merupakan pemandangan yang menakjubkan dengan hamparan hijau yang luas dan subur. Terletak di dataran tinggi di kaki Gunung Rinjani, persawahan ini memanfaatkan sistem irigasi tradisional yang mengalirkan air dari pegunungan. Terasering yang rapi menciptakan lanskap yang indah dan simetris, menjadi latar sempurna bagi fotografer dan pencinta alam. Selain berfungsi sebagai sumber pangan utama, persawahan di Sembalun juga menjadi simbol kesejahteraan dan keberlanjutan bagi masyarakat setempat. Pengunjung dapat menikmati keindahan alam sambil mempelajari metode pertanian yang digunakan oleh masyarakat Sembalun.
                                        </p>
                                            <div class="flex border-t border-b mb-2 border-gray-200 py-2">
                                            <span class="text-gray-500">Lokasi</span>
                                            <span class="ml-auto text-gray-900 text-right">Sembalun, Lombok, Indonesia</span>
                                        </div>
                                        
                                        
                                    </div>
                                    
                                    <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="/5.jpg"/>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </section>

        </section>

        
    )
}